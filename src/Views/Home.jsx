import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../assets/social-media-icons/FacebookLogo.png'
import instagram from '../assets/social-media-icons/InstagramLogo.png'
import linkedin from '../assets/social-media-icons/LinkedinLogo.png'
import twitter from '../assets/social-media-icons/TwitterLogo.png'
import youtupe from '../assets/social-media-icons/YoutubeLogo.png'
import union from '../assets/Union.png'
import teacher from '../assets/Untitled-1 1.png'
import frame1 from '../assets/Frame 833.png'
import frame2 from '../assets/Frame 832.png'
import videoIcon from '../assets/Vector-videos.png'
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'
import teacherSpeak from '../assets/Rectangle 243.png'

import youtubeShortsLogo from '../assets/youtube-shorts.png'
import first from '../assets/Group 157.png'
import secund from '../assets/scound.png'
import third from '../assets/third.png'
import YouTubeShorts from '../Components/Home/YouTubeShorts';
import TopStudents from '../Components/Home/TopStudents';
import Slider from '../Components/Home/Slider';

export default function Home() {
  return <>
    <div className='wrapper'>
        <div className='container h-100 pe-4 ps-4'>
          <div className='right'>
            <div className='top'>
              <p>
                احمد
              </p>
              <p>
                فضل
              </p>
            </div>
            <div className='bottom w-100'>
              <p>
              أستاذ المواد الفلسفية 
              </p>
              <p>
              و علم النفس
              </p>
              <p className='bottom-mobile-view'>
              أستاذ المواد الفلسفية و علم النفس 
              </p>
            </div>
          </div>
          <div className='left'>
              <img className='first-union union' src={union} alt=''/>
              <img className='w-100 frame-one' src={frame1} alt='' />
              <img className='teacher h-100 w-100' src={teacher} alt='' />
              <img className='secound-union' src={union} alt='' />
              <img className='w-100 h-50 frame-tow' src={frame2} alt='' />
          </div>
        </div>
        <div className='social-media'>
          <a href='#'>
            <img className='w-100 h-100' src={facebook} alt='facebook'/>
          </a>
          <a href='#'>
            <img className='w-100 h-100' src={instagram} alt='instagram'/>
          </a>
          <a href='#'>
            <img className='w-100 h-100' src={linkedin} alt='linkedin'/>
          </a>
          <a href='#'>
            <img className='w-100 h-100' src={twitter} alt='twitter'/>
          </a>
          <a href='#'>
            <img className='w-100 h-100' src={youtupe} alt='youtupe'/>
          </a>
        </div>
    </div>
    <div className='offer'>
      <p className='m-0'>جميع الكورسات بـــ 700 جنيه</p>
      <Link to={'/'} className='book-now'>
      ألحق العرض
      </Link>
    </div>
    {/* start features section */}
    <section className='features mt-5 py-5'>
      <div className='container'>
        <div className='row'>

          <div className='feature col-lg-3'>
            <div className='icon'>
              <img src={videoIcon} alt='' />
            </div>
            <div className='title'> 
              <h5 className='m-0 fw-bold'>
              فيديوهات
              </h5>
              <p className='m-0'>
              يمكنك مشاهدة الفيديوهات الخاصة
بكل درس العديد من مرات المشاهدة   
              </p>
            </div>
          </div>

          <div className='feature col-lg-3'>
            <div className='icon'>
              <img src={Vector2} alt='' />
            </div>
            <div className='title'> 
              <h5 className='m-0 fw-bold'>
              ملخصات
              </h5>
              <p className='m-0'>
              قراءة الملخصات بعد كل درس
يتيح لك تثبيت المعلومات وفهمها
              </p>
            </div>
          </div>

          <div className='feature col-lg-3'>
            <div className='icon'>
              <img src={Vector3} alt='' />
            </div>
            <div className='title'> 
              <h5 className='m-0 fw-bold'>
              أسئلة
              </h5>
              <p className='m-0'>
              لك العديد من الأسئلة بعد كل درس يمكنك حل الأسئلة ومعرفة مستواك ودرجتك
              </p>
            </div>
          </div>

          <div className='feature col-lg-3'>
            <div className='icon'>
              <img src={Vector4} alt='' />
            </div>
            <div className='title'> 
              <h5 className='m-0 fw-bold'>
              أختبارات
              </h5>
              <p className='m-0'>
              عمل اختبارات اسبوعية وشهرية شاملة جميع انواع الأسئلة والأفكار
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* start about teacher section  */}
    <section className='teacher-speak mt-5 mb-5'>
      <div className='right-image h-100'>
        <img className=' h-100 w-100' src={teacherSpeak} alt=''/>
      </div>
      <Slider />
    </section>
    {/* start youtube shorts section */}
    <section className='youtube-shorts mt-5 py-5'>
      <div className='container'> 
        <h4 className='fw-bold text-center'>YouTube <img src={youtubeShortsLogo} alt='' /> Shorts</h4>
        <div className='row gap-2 py-4 w-100 scrolled' >
          <YouTubeShorts />
          <YouTubeShorts />
          <YouTubeShorts />
          <YouTubeShorts />
          <YouTubeShorts />
        </div>
      </div>
    </section>
    {/* start courses section  */}
    <section className='courses py-5'>
      <div className='container'>
        <h4 className='text-center mb-5'>
        كورسات
        </h4>
        <div className='row gap-2 mb-2'>
          <div className='first col-lg-5'>
              <h4>
              الصف الاول
الثانوي 
              </h4>
              <img src={first} alt='' className='h-100'/>
          </div>
          <div className='secund col-lg-6'>
              <h4>
              الصف الثاني
الثانوي
              </h4>
              <img src={secund} alt='' className='h-100'/>
          </div>
        </div>
        <div className='row'>
          <div className='third col-lg-11'>
                <h4>
                الصف الثالث
الثانوي
                </h4>
                <img src={third} alt='' className='h-100 w-50'/>
            </div>
        </div>
      </div>
    </section>
    {/* start first student section */}
    <section className='first-students py-5'>
      <h4 className='text-center mb-5'>
      الطلاب الأوائل
      </h4>
      <div className='container-fluid' >
        <div className='row w-100 py-2 gap-5 scrolled'>
            <TopStudents />
            <TopStudents />
            <TopStudents />
            <TopStudents />
            <TopStudents />
            <TopStudents />
        </div>
      </div>
    </section>

  </>
}
