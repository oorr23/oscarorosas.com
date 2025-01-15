import "./filterComponent.css"

const FilterComponent = () => {
    return (
        <div className="filter-container">
            <p className="filter-container-heading">Filter</p>
                <div className="filter-subsection">
                    <p className="filter-subsection-heading">Skills</p>
                    <div className="checkbox-group">
                        <label>
                            <input  type="checkbox" name="skill" value="JavaScript" />
                            JavaScript
                        </label>
                        <label>
                            <input type="checkbox" name="skill" value="React" />
                            React
                        </label>
                        <label>
                            <input type="checkbox" name="skill" value="Node.js" />
                            Node.js
                        </label>
                    </div>
                </div>

                <div className="filter-subsection">
                    <p className="filter-subsection-heading">Proficieny</p>
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" name="skill" value="JavaScript" />
                            JavaScript
                        </label>
                        <label>
                            <input type="checkbox" name="skill" value="React" />
                            React
                        </label>
                        <label>
                            <input type="checkbox" name="skill" value="Node.js" />
                            Node.js
                        </label>
                    </div>
                </div>
                
        </div>
    )
}

export default FilterComponent