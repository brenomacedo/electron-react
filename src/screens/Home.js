import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

const Home = () => {

    const history = useHistory()

    return (
        <div>
            Hello world!
            <h1 onClick={() => {
                history.push('screen')
            }} style={{ cursor: 'pointer' }}>Clique aqui para ir para outra pagina!</h1>
        </div>
    )
}

export default Home