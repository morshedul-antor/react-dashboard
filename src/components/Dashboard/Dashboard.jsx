import { useEffect, useState } from 'react'
import classes from './Dashboard.module.css'
import Pagination from './Pagination/Pagination'
import ProfileCard from './ProfileCard/ProfileCard'
import Search from './Search/Search'

export default function Dashboard() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [range, setRange] = useState(700)
    const [gender, setGender] = useState('Male')

    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/users`, {
                    method: 'GET',
                })
                const data = await response.json()
                setUsers(data)
            } catch {
                setUsers([])
            }
        }
        fetchData()
    }, [api])

    return (
        <div className={classes.dashboard}>
            <Search search={search} setSearch={setSearch} range={range} setRange={setRange} setGender={setGender} />
            <ProfileCard users={users} search={search} range={range} gender={gender} />
            <Pagination />
        </div>
    )
}
