import { Routes, Route } from 'react-router-dom'
import { DashboardPage } from './pages'

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
        </Routes>
    )
}

export default App
