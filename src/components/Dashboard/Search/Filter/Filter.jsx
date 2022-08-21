import classes from './Filter.module.css'

export default function Filter({ setIsOpen, range, setRange, setGender }) {
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
                    <input type="range" value={range} onChange={(e) => setRange(e.target.value)} min={400} max={800} />
                    <p>
                        <span>400k</span>
                        <span>500k</span>
                        <span>600k</span>
                        <span>700k</span>
                        <span>800k</span>
                    </p>
                    <br />
                    <br />
                    <label>Influencer’s Gender</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked="checked"
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Male</span>
                    <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                    <span>Female</span>
                </div>

                <div>
                    <button onClick={() => setRange(700)}>Reset</button>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}
