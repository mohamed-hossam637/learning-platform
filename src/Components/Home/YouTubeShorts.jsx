import React from 'react'
import short from '../../assets/Rectangle 49 (1).png'

export default function YouTubeShorts() {
  return <>
        <div className='short col-lg-2 col-6'>
            <img className='w-100 rounded' src={short} alt='' />
            <h6 className='fw-bold pt-2'>
            عنوان فيديو للمدرس
            </h6>
            <p>
            شرح تفصيلي اطول و اكثر دقه للمدرس
            </p>
        </div>
  </>
}
