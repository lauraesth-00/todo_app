import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>¡Hola {currentUser.displayName ? currentUser.displayName : currentUser.email}, listo! Ya estás adentro.</div>
    )
}

export default Home