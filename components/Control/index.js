export default function Control({ setControl }) {
    return (
        <div id="controls">
            <h2 className="fs-5 text-white">Controls</h2>
            <p className="text-white">Select one of the option below to toggle information</p>
            <hr className="border-light" />
            <label>
                <input type="radio" name="scale" value="velocity" defaultChecked onChange={(e) => setControl(e.target.value)} />
                <span>Velocity</span>
            </label>
            <label>
                <input type="radio" name="scale" value="circumference" onChange={(e) => setControl(e.target.value)} />
                <span>Circumference</span>
            </label>
        </div>
    )
}