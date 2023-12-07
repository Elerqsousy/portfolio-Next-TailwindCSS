import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a
            target='_blank'
            href={companyLink}
            className='text-primary capitalize hover:underline dark:text-primaryDark'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
    once: true,
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-16 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative overflow-hidden'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='mt-2 absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
