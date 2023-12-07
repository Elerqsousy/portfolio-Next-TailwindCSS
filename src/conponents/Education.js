import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, link }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} |{' '}
          <a target='_blank' href={link} className='text-primary capitalize'>
            {place}
          </a>
        </span>
        <p className='font-medium w-full'>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start'],
    once: true,
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative overflow-hidden'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='mt-2 absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            type='Bachelor Of Science In Computer Science'
            place='Google'
            link='https://www.google.com/'
            time='2016-2020'
            info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
          <Details
            type='Bachelor Of Science In Computer Science'
            place='Google'
            link='https://www.google.com/'
            time='2016-2020'
            info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
          <Details
            type='Bachelor Of Science In Computer Science'
            place='Google'
            link='https://www.google.com/'
            time='2016-2020'
            info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;