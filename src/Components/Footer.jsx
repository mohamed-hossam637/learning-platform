import React from 'react'
import lightLogo from '../assets/light-logo.png'
import companyLogo from '../assets/company-logo.png'

export default function Footer() {
  return <>
    <footer className='footer'>
        <div className='container'>
            <div className='contact-section'>
                <div className='footer-logo'>
                    <img className='w-100 h-100' alt='' src={lightLogo}/>
                </div>
                <h4 className='text-center'>
                تواصل معنا عبر 
                </h4>
                <div className='row py-2 w-100'>
                    <div className='email col-lg-2 col-12'>
                        AhmedFadl@gmail.com
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className='col-lg-2 col-6'>
                        01140 665 667
                        <i class="fa-solid fa-phone-flip"></i>
                    </div>
                    <div className='col-lg-2 col-6'>
                        01140 665 667
                        <i class="fa-solid fa-phone-flip"></i>
                    </div>
                    <div className='col-lg-2 col-6'>
                        01140 665 667
                        <i class="fa-solid fa-phone-flip"></i>
                    </div>
                    <div className='col-lg-2 col-6'>
                        01140 665 667
                        <i class="fa-solid fa-phone-flip"></i>
                    </div>
                </div>
                <div className='footer-social-media py-1'>
                    <a href=''>
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href=''>
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href=''>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href=''>
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href=''>
                    <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <div className='copyright-logo'>
                    <img className='w-100 h-100' src={companyLogo} alt='' />
                </div>
                <p>
                حقوق النشر © 2024 لشركة Easy Tech . كل الحقوق محفوظة.
                </p>
            </div>
        </div>
    </footer>
  </>
}
