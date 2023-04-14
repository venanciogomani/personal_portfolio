import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; 

    setform({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_c22n33e',
      'template_2fqix2t',
      {
        from_name: form.name,
        to_name: "Venancio",
        from_email: form.email,
        to_email: "cadlegomani@gmail.com",
        message: form.message
      },
      "0FcV9g1N2Qg8rUdvn"
    )
    .then(() => {
      setloading(false);
      alert("Thanks for hitting me up. I'll pop you message soon as I can. Stay sexy!");

      setform({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setloading(false);
      console.log(error);
      alert("Yikes! Okay so don't be alarmed.. but something went haywire. No worries though, you're still sexy!");
    });
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Hit me up!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='In the words of a once wise man, Wazzzzzzzup???'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <div className='flex flex-row justify-between align-middle'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? "Yeeting..." : "Yeet!"}
            </button>
            <span className='py-3 pink-text-gradient'><a href="mailto:info@venanciogomani.net">info@venanciogomani.net</a></span>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas 

        />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");