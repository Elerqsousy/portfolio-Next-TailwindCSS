import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, link }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
      items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} |&nbsp;
          <a
            target='_blank'
            href={link}
            className='text-primary capitalize hover:underline dark:text-primaryDark'
          >
            {place}
          </a>
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
    once: true,
  });

  return (
    <div className='my-64 lg:my-32'>
      <h2
        className='font-bold text-8xl mb-16 w-full text-center
      lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
      >
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative overflow-hidden lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='mt-2 absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:mt-3 xs:mt-4 xs:w-[2px] md:left-[28px] xs:left-[19px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
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
