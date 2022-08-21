import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Auth } from '../contexts/context'

export default function PrivateRoute() {
    const { stateAuth } = useContext(Auth)

    return stateAuth.status === true ? <Outlet /> : <Navigate to="/home" />
}
