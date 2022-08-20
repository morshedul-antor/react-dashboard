import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Filter from './Filter/Filter'
import classes from './Search.module.css'

export default function Search({ search, setSearch }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classes.search}>
            <p>Profile(100)</p>
            <div>
                <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    placeholder="Search Profile"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={classes.button} onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faFilter} /> <span>Advance Filter</span>
            </div>
            {isOpen && <Filter setIsOpen={setIsOpen} />}
        </div>
    )
}
