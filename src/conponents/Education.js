import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, link }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
       justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
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
      <div
        ref={ref}
        className='w-[75%] mx-auto relative overflow-hidden lg:w-[90%] md:w-full'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='mt-2 absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:mt-3 xs:mt-4 xs:w-[2px] md:left-[28px] xs:left-[19px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type='Remote Front-end Web Development Program'
            place='Microverse'
            link='https://www.microverse.org/'
            time='November 2023'
            info='Invested 600+ hours mastering algorithms, full-stack development, and technologies such as Ruby, Rails, SQL. Utilizing remote pair-programming, GitHub, gitflow, and scrum for effective collaboration with global developers.'
          />
          <Details
            type='Remote Full Stack Web Development Program'
            place='Microverse'
            link='https://www.microverse.org/'
            time='April 2022'
            info='Devoted 700+ hours to mastering algorithms and honing my skills in front-end development, specifically in JavaScript, React, and Redux. Utilizing remote pair-programming, GitHub, gitflow, and scrum for effective collaboration with global developers.'
          />
          <Details
            type='Bachelor of Commerce'
            place='Cairo University'
            link='https://cu.edu.eg/Home'
            time='2016-2020'
            info='Major in Accounting and Finance.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
