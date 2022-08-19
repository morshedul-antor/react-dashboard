import { faArrowUp, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Search.module.css'

export default function Search({ search, setSearch }) {
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
            <div className={classes.button}>
                <FontAwesomeIcon icon={faFilter} /> <span>Advance Filter</span>
            </div>
        </div>
    )
}
