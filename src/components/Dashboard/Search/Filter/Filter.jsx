import classes from './Filter.module.css'

export default function Filter({ setIsOpen }) {
    return (
        <div className={classes.filter}>
            <div className={classes.cross} onClick={() => setIsOpen(false)}>
                &times;
            </div>
            <div className={classes.form}>
                <div className={classes.close} onClick={() => setIsOpen(false)}>
                    &times;
                </div>
                <p>Filter Options</p>

                <div className={classes.field}>
                    <label>Influencer’s Industry</label>
                    <select>
                        <option value="">Select Options</option>
                    </select>
                    <br />
                    <label>Influencer’s Country</label>
                    <select>
                        <option value="">Select Options</option>
                    </select>
                    <br />
                    <label>Audience’s Country</label>
                    <select>
                        <option value="">Select Options</option>
                    </select>
                    <br />
                    <label>Influencer’s Social Media Platform</label>
                    <select>
                        <option value="">Select Options</option>
                    </select>
                    <br />
                    <label>Influencer’s Social Media Platform</label>
                    <select>
                        <option value="">Select Options</option>
                    </select>
                    <br />
                    <label>Influencer’s Social Media Platform</label>
                    <input type="range" />
                    <p>
                        <span>100k</span>
                        <span>200k</span>
                        <span>250k</span>
                        <span>500k</span>
                        <span>700k</span>
                    </p>
                    <br />
                    <br />
                    <label>Influencer’s Gender</label>
                    <input type="radio" /> <span>Male</span>
                    <input type="radio" /> <span>Female</span>
                </div>

                <div>
                    <button>Reset</button>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}
