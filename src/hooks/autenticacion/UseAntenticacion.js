import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import authContext from '../../context/auth/authContext'
import { auth, db } from '../../FirebaseConfig'

const UseAntenticacion = () => {

    // state que controla la vista del modal
    const { setMiPerfil } = useContext(authContext)

    //state de crear usuario
    const [usuarioNuevo, setUsuarioNuevo] = useState({
        nombre: '',
        email: '',
        contraseña: ''
    })

    //state de iniciar sesion
    const [usuarioExistente, setUsuarioExistente] = useState({
        email: '',
        contraseña: ''
    })

    const nuevaCuenta = async e => {
        const { nombre, email, contraseña } = usuarioNuevo

        e.preventDefault()
        if (nombre.trim().length === 0 || email.trim().length === 0 || contraseña.trim().length === 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        } else if (contraseña.trim().length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña debe tener minimo 6 caracteres'
            })



        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes registrar un correo valido'
            })
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Usuario Creado, Bienvenido!'
        })

        const nuevoUsuario = await auth.createUserWithEmailAndPassword(email, contraseña)
        await nuevoUsuario.user.updateProfile({
            displayName: nombre
        })

        await db.collection('usuarios').add({ nombre: nuevoUsuario.user.displayName, email: nuevoUsuario.user.email, uid: nuevoUsuario.user.uid, rol: 'cliente' })

        await setMiPerfil(false)
    }

    //inicio de sesion
    const iniciarSesion = async e => {
        e.preventDefault()

        const { email, contraseña } = usuarioExistente

        if (email.trim().length === 0 || contraseña.trim().length === 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo invalido'
            })
        }

        auth.signInWithEmailAndPassword(email, contraseña).then(() => {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Sesion iniciada, Bienvenido!'
            })

        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'Comprueba los Datos que Proporcionaste'
            })
        })

        await setMiPerfil(false)

    }

    return {
        usuarioNuevo,
        usuarioExistente,
        setUsuarioNuevo,
        nuevaCuenta,
        setUsuarioExistente,
        iniciarSesion

    }
}

export default UseAntenticacion
