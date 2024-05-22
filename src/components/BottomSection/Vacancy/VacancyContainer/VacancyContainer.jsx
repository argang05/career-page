/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './vacancycontainer.css'

const VacancyContainer = ({vacancy,key}) => {
  return (
        <div className={`vacancyContainer vacancy${key}`}>
            <div className='textSection'>
                <h1>{vacancy?.title}</h1>
                <p>{vacancy?.desc}</p>
                <span>
                    Years of Work Experience Required : {vacancy?.workExp} years
                </span>
            </div>
            <button>Apply Now!</button>
        </div>
  )
}

export default VacancyContainer