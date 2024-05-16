import React from 'react'
import student from '../../assets/student.png'
export default function TopStudents() {
  return <>
    <div className='col-lg-2 col-7 student-card'>
        <div className='image'>
            <img className='w-100 h-100' src={student} alt=''/>
        </div>
        <p>
            أحمد محمد أحمد محمد
        </p>
        <div className='student-score text-capitalize'>
            score: 3.34
        </div>
    </div>
</>
}
