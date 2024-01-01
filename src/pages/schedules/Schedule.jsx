import React from 'react'

const Schedule = ({lecture}) => {

    

    try{
        return (
            <div className="lecture__container">
                <div className="lecture__card">
                    <span className="location">{lecture.location}</span>
                    <span className="status">{lecture.status}</span>
                    <span className="course">{lecture.course}</span>
                    <span className="time__period">{lecture.time_period}</span>

                </div>
            </div>
        )
    }catch(error){
        console.log('error')
    }
    
}

export default Schedule