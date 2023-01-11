import React, { useState } from 'react'
import idiomaContext from './idiomaContext'

const IdiomaState = props => {

    const [idioma, setIdioma] = useState('español')

    return (
        <idiomaContext.Provider
            value={{
                idioma,
                setIdioma
            }}
        >
            {props.children}
        </idiomaContext.Provider>
    )
}

export default IdiomaState
