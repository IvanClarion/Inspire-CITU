import React from 'react'
import HealthPerson from '../assets/icons/health-person.svg'
import AboutCollege from '../assets/icons/education.svg'
import Diverse from '../assets/icons/diverse-programs.svg'
import Collab from '../assets/icons/collab.svg'
import Health from '../assets/icons/health.svg'
import International from '../assets/icons/international.svg'
import Innovation from '../assets/icons/innovation.svg'
import Forward from '../assets/icons/forward.svg'
import Research from '../assets/icons/research.svg'
import Nurse from '../assets/images/Nurse.png'
import {motion} from "framer-motion";
function ClientHome() {
  return (
    <>
     <motion.section className='home-layout'
     initial={{transY:0, opacity:0}}
     animate={{scaleY:1, opacity:1}}
     transition={{duration:0.3, delay:0.2}}
     >
      <div className='home-layout2'>
        <article className='break-words flex-col text-deepNavyBlue text-2xl lg:text-4xl font-semibold'>
          <label>Welcome to College of Nursing and Allied Health Sciences Research Journal</label>
        <div className=' flex flex-row gap-5 justify-center lg:justify-start text-base my-3'>
        <a href='#journal'><button className='home-button'>Research Journal</button></a>
        <a href='#board'><button className='home-button'>Editorial Board</button></a>
        </div>
        </article>
        <img src={HealthPerson} alt="" className='lg:w-2xl'/>
      </div>

      {/* About Inspire*/}
      <section className='about-section'>
        <div className='about-container'>
        <img src={AboutCollege} alt="" className='size-52' />
        <article>
          <label className='text-xl text-deepNavyBlue font-bold'>About College</label>
          <p>The College of Nursing and Health Allied Sciences (CNHAS) is an institution dedicated to excellence in healthcare education, research, and practice.</p>
        </article>
        </div>

        <div className='about-container'>
        <img src={Diverse} alt="" className='size-52' />
        <article>
          <label className='text-xl text-deepNavyBlue font-bold'>Academic Programs and Research</label>
          <p>CNHAS offers diverse academic programs and research opportunities in various healthcare disciplines</p>
        </article>
        </div>

        <div className='about-container'>
        <img src={Collab} alt="" className='size-52' />
        <article>
          <label className='text-xl text-deepNavyBlue font-bold'> Commitment to Innovation and Collaboration</label>
          <p>We strive to be at the forefront of healthcare advancements by fostering innovation and interdisciplinary collaboration.</p>
        </article>
        </div>
      </section>

      {/* Research Journal*/}
      <section className='journal-section' id='journal'>
        <article>
          <label className='text-2xl font-bold'>Research Journals</label>
          <p>Browse our latest Research Journal</p>
        </article>
        <div className='journal-section-container'>
        <div className='journal-container'>
        <img src={Health} alt="" className='bg-deepNavyBlue p-2 rounded-full'/>
        <label>Health</label>
        <img src={Forward} alt="" className='bg-golden p-2  rounded-full'/>
        </div>
        <div className='journal-container'>
        <img src={International} alt="" className='bg-deepNavyBlue p-2 rounded-full'/>
        <label>International</label>
        <img src={Forward} alt="" className='bg-golden p-2  rounded-full'/>
        </div>
        <div className='journal-container'>
        <img src={Innovation} alt="" className='bg-deepNavyBlue p-2 rounded-full'/>
        <label>Innovation</label>
        <img src={Forward} alt="" className='bg-golden p-2  rounded-full'/>
        </div>
        <div className='journal-container'>
        <img src={Research} alt="" className='bg-deepNavyBlue p-2 rounded-full'/>
        <label>Education</label>
        <img src={Forward} alt="" className='bg-golden p-2  rounded-full'/>
        </div>
        </div>
      </section>
      {/* Editorial Board*/}
      <article className='text-deepNavyBlue flex flex-col justify-center items-center lg:justify-normal'>
        <label className='text-3xl font-semibold'>Editorial Board</label>
        <p>These are the list of contributors of Inspire</p>
      </article>
      <section className='board-section2' id='board'>
      <div className='board-section'>
      <article>
          <label className='text-2xl font-bold'>Ms.Sample Name</label>
          <p>Position In In-spire</p>
        </article>
        <div className='board-section-container '>
        <div className='board-container'>
        <img src={Nurse} alt="" />
        <span className='overlay-box'></span>
        </div>
        </div>
        </div>
        <div className='board-section flex-row-reverse'>
      <article>
          <label className='text-2xl font-bold'>Ms.Sample Name</label>
          <p>Position In In-spire</p>
        </article>
        <div className='board-section-container '>
        <div className='board-container'>
        <img src={Nurse} alt="" />
        <span className='overlay-box'></span>
        </div>
        </div>
        </div>
      </section>
    </motion.section> 
    </>
  )
}

export default ClientHome
