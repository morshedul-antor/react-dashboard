import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth, Theme } from './contexts/context'
import { authState, authReducer } from './contexts/reducers/auth'
import { themeState, themeReducer } from './contexts/reducers/theme'
import { DashboardPage, HomePage } from './pages'
import PrivateRoute from './routes/PrivateRoute'

function App() {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateTheme, dispatchTheme] = useReducer(themeReducer, themeState)

    return (
        <Auth.Provider value={{ stateAuth, dispatchAuth }}>
            <Theme.Provider value={{ stateTheme, dispatchTheme }}>
                <Routes>
                    <Route path="/home" element={<HomePage />} />

                    <Route path="/*" element={<PrivateRoute />}>
                        <Route path="" element={<DashboardPage />} />
                    </Route>
                </Routes>
            </Theme.Provider>
        </Auth.Provider>
    )
}

export default App
