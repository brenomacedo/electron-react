import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

const Screen = () => {

    const history = useHistory()

    return (
        <div>
            <h1 onClick={() => history.push('/')}>Outra tela!</h1>
        </div>
    )
}

export default Screen