import React from 'react'
import logo from '../../assets/dark-logo.png'
export default function Slider() {
  return <>
    <div className='slider h-100'>
        <div className='slide'>
          <img className='mb-4' src={logo} alt='' />
            <h3 className='py-3'>عنوان يخص <span className='gradient'>المدرس</span></h3>
            <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
        </div>
    </div>
  </>
}
