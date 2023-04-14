import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-conatin' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Gist About Me</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leadong-[30px]'
      >
        Software engineer with 7+ years of experience 
        and a broad range of expertise in building maintainable, 
        reusable, and cost-effective software solutions for data-focused, 
        customer-facing applications. I have strong experience in 
        architecting multi-layered or single-page products with 
        TypeScript - React and Angular while also retaining the 
        versatility in fluently utilizing backend technologies 
        such Node, PHP, and .NET to build efficient, high-performing, 
        and robust MVC solutions. Coupled with my Bachelor of Engineering 
        degree in Computer Science, my experience and skills make me a 
        valuable asset in developing complex, intuitive, and high-performing 
        software that meets the needs of today's tech-driven world.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")