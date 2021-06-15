import React from 'react'
import './student.css'

function student() {
    return (
        <div className="studentbox">
            <div className="EnrolltitleContainer">
                <div className="Enrolltitle">
                    Enroll New Student
                </div>
                <input placeholder="Firstname" type="text" />
                <input placeholder="Lastname" type="number" />
            </div>
        </div>
    )
}

export default student
