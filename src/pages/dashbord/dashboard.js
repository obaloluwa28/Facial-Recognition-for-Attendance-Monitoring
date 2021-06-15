import React from 'react'
import './dashboard.css'
import '../../components/Navbar.css'
import { Link } from 'react-router-dom';

function dashboard() {
    return (
        <>
            <div className="topLayer">
                <p id="parag1">Monitor</p>
            </div>
            <div className="mini">
                <div className="topBox">
                    <Link to="" className="myLink1">
                        <div className="firstBox">
                            <p id="courses">Courses</p>
                            <p id="number">18</p>
                        </div>
                    </Link>
                    
                    <Link to="" className="myLink2">
                        <div className="secondBox">
                            <p id="courses">Department</p>
                            <p id="number">13</p>
                        </div>
                    </Link>
                </div>

                <div className="midBox">
                    <Link to="" className="myLink3">
                        <div className="thirdBox">
                            <p id="courses">Level</p>
                            <p id="number">5</p>
                        </div>
                    </Link>
                
                    <Link to="/lecturers" className="myLink1">
                        <div className="botsecondBox">
                            <p id="courses">Lecturers</p>
                            <p id="number">135</p>
                        </div>
                    </Link>
                </div>

                <div className="botmBox">
                    <Link to="" className="myLink1">
                        <div className="bothirdBox">
                            <p id="courses">Sessions</p>
                            <p id="number">13</p>
                        </div> 
                    </Link>

                    <Link to="/students" className="myLink1">
                        <div className="botfirstBox">
                            <p id="courses">Students</p>
                            <p id="number">3500</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default dashboard
