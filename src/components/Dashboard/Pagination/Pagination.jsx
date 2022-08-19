import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Pagination.module.css'

export default function Pagination() {
    return (
        <div className={classes.pagination}>
            <div>
                <FontAwesomeIcon icon={faArrowDown} /> Previous
            </div>
            <div>
                <span className={classes.active}>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <div>
                Next <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    )
}
