import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import '../App.css'

const Home = () => {

    const history = useHistory()

    return (
        <div>
            Hello world!
            <Link to="/screen" >asdasd</Link>
        </div>
    )
}

export default Home