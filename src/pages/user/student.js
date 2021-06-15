import React from 'react'
import './student.css'

function student() {
    return (
        <div className="studentbox">
            <div className="EnrolltitleContainer">
                <div className="Enrolltitle">
                    Enroll New Student
                </div>
                <div className="main2">
                    <input placeholder="Firstname" type="text" />
                    <input placeholder="Lastname" type="text" />
                    <input placeholder="Firstname" type="text" />
                    <input placeholder="Lastname" type="text" />
                </div>
            </div>
        </div>
    )
}

export default student
