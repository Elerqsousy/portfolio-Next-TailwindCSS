import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { GithubIcon } from '@/conponents/icons';
import BorderSection from '@/conponents/BorderSection';
import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import TransitionEffect from '@/conponents/TransitionEffect';

import project1 from '../../public/images/projects/grandeur.png';
import project2 from '../../public/images/projects/8doors.png';
import project3 from '../../public/images/projects/expensable.png';
import project4 from '../../public/images/projects/bookstore.png';
import project5 from '../../public/images/projects/bloowatch.png';
import project6 from '../../public/images/projects/themusical.png';
import project7 from '../../public/images/projects/todo.png';
import project8 from '../../public/images/projects/spacex.png';
import project9 from '../../public/images/projects/mathmagicians.png';
import project10 from '../../public/images/projects/gameleadership.gif';
import project11 from '../../public/images/projects/cryptomaster.png';

const FramerImage = motion(Image);

const Project = ({
  type,
  title,
  summary = null,
  img,
  link,
  github,
  skills,
  small = false,
}) => {
  return (
    <BorderSection
      className={classNames({
        'flex-col justify-center !rounded-2xl p-6 dark:hover:shadow-[5px_5px_13px_light] xs:p-4':
          small,
      })}
      shadow={small ? false : true}
    >
      <Link
        href={link || github}
        target='_blank'
        className={classNames(
          'w-1/2 h-auto cursor-pointer rounded-lg lg:w-full max-h-[50vh] overflow-hidden',
          { '!w-full': small }
        )}
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw'
          priority
        />
      </Link>
      <div
        className={classNames(
          'w-1/2 flex flex-1 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 h-full',
          { '!pl-0 mt-4 !w-full lg:text-lg md:text-base': small }
        )}
      >
        <span className='text-primary font-medium text-xl dark:text-primaryDark sm:text-sm'>
          {type}
        </span>
        <Link
          href={link || github}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2
            className={classNames(
              'my-2 w-full text-left text-4xl font-bold sm:text-base',
              {
                'text-3xl lg:text-2xl': small,
              }
            )}
          >
            {title}
          </h2>
        </Link>

        {summary && (
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
            {summary}
          </p>
        )}
        <ul className='mb-4 flex justify-start items-center flex-wrap'>
          {skills?.map((skill, i) => (
            <li
              key={skill + '-' + i}
              className='text-sm text-dark/75 dark:text-light/75'
            >
              {skill}
              {i < skills.length - 1 && <>, &nbsp;</>}
            </li>
          ))}
        </ul>
        <div
          className={classNames('flex items-center mt-auto', {
            'w-full flex-row-reverse justify-between': small,
          })}
        >
          <Link
            href={github}
            target='_blank'
            className={classNames('w-10', { 'w-8 md:w-6': small })}
          >
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target='_blank'
              className={classNames('font-semibold', {
                'md:text-base hover:underline': small,
                'ml-4 rounded-lg bg-dark hover:bg-dark/75 text-light p-1 px-6 text-lg':
                  !small,
                'dark:bg-light dark:hover:bg-light/75 dark:text-dark sm:px-4 sm:text-base':
                  !small,
              })}
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </BorderSection>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mahmoud Rizk | Projects</title>
        <meta
          name='description'
          content='Mahmoud Rizk Portfolio. About and Experience Section.'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light pt-24 lg:pt-16'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-x-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:gap-y-16 md:mb-[100px]'>
            <div className='col-span-12'>
              <Project
                title='Grandeur'
                summary='A sophisticated Real Estate platform designed to seamlessly connect buyers and sellers, streamlining the process of booking check-up visits to captivating properties.'
                type='React on Rails Project'
                link='https://grandeur-tx4o.onrender.com/'
                github='https://github.com/Elerqsousy/grandeur-backend'
                img={project1}
                skills={[
                  'Ruby-on-Rails',
                  'PostgreSQL',
                  'React',
                  'Redux',
                  'Typescript',
                  'Bootstrap',
                  'Tailwind CSS',
                ]}
              />
            </div>
            {/* <div className='col-span-12'>
              <Project
                title='8doors'
                summary='8doors is a template to be used for development. It is also ment to be a platform for doctors and clinics, where you can communicate, connect, and see feed of each doctor, and connect with clinic as a doctor and preserve your appoinments.'
                type='Next.js Project'
                link='https://drive.google.com/file/d/1Z2vLvXo7yNDr-q3I2Xbdlzftt-E0HBs8/view?usp=share_link'
                github='https://github.com/Elerqsousy/8doors'
                img={project2}
                skills={[
                  'Next.js',
                  'Redux Toolkit',
                  'Context Api',
                  'TailwindCSS',
                ]}
              />
            </div> */}
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Expensable'
                summary='A Mobile-based Web Application for expense categorization and tracking. It helps users to keep track of their expenses and incomes, and to manage their budgets.'
                type='Rails Project'
                link='https://expensable.onrender.com/'
                github='https://github.com/Elerqsousy/ror_fintech'
                small={true}
                img={project3}
                skills={[
                  'Ruby-on-Rails',
                  'PostgreSQL',
                  'Device',
                  'CanCanCan',
                  'Bootstrap',
                ]}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Bookstore'
                summary='This is a simple SPA, single pgae application for a bookstore app. Users can add and save books with book name, author name, category, and progress. They can also search and categorize books according to their categories.'
                type='React Project'
                link='https://chimerical-daifuku-2e3358.netlify.app/'
                github='https://github.com/Elerqsousy/bookstore/'
                small={true}
                img={project4}
                skills={[
                  'React.js',
                  'Redux',
                  'Open-source Restful API',
                  'Sass',
                ]}
              />
            </div>
            {/* <div className='col-span-6 sm:col-span-12'>
              <Project
                title='bloowatch'
                type='Next.js Project'
                link='https://drive.google.com/file/d/18ocJTP93TDdF3mJ6UlUCCO55E6aE4B6S/view?usp=share_link'
                github='https://github.com/Elerqsousy/next-app-cart'
                small={true}
                img={project5}
                skills={[
                  'React.js',
                  'Redux Toolkit',
                  'Context API',
                  'TailwindCSS',
                ]}
              />
            </div> */}
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='The Musical'
                summary="An imaginary musical yearly event that features event details and star singers. It's built with a responsive design."
                type='Js Project'
                link='https://elerqsousy.github.io/musical-concert-page/'
                github='https://github.com/Elerqsousy/musical-concert-page'
                small={true}
                img={project6}
                skills={['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages']}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='To Do List'
                summary='A simple To Do List online application that allows users to save, and manipulate their to-dos, and save their list when application is closed.'
                type='Js Project'
                link='https://elerqsousy.github.io/to-do-list/'
                github='https://github.com/Elerqsousy/to-do-list'
                small={true}
                img={project7}
                skills={['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages']}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Math Magicians'
                summary='This is a simple SPA for a caluculator. It consists of 3 pages; Home: with an intro about the app, Calculator: were users can have access to a fully fledged calculator and a Quote page.'
                type='React Project'
                link='https://fancy-khapse-193ed3.netlify.app/'
                github='https://github.com/Elerqsousy/calculator-spa'
                small={true}
                img={project9}
                skills={['React', 'ECMA-5 JS', 'CSS3', 'Netlify']}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Game LeaderShip Board'
                summary='A simple design for a leaderboard list. All data are stored on Leaderboard API. Upon page load, List of scores get updated from the API. Upon submitting names and scores, names are added to the list of game scores on the API. Upon clicking refresh, list of names are updated and displayed.'
                type='Js Project'
                link='https://elerqsousy.github.io/leaderboard-api'
                github='https://github.com/Elerqsousy/leaderboard-api'
                small={true}
                img={project10}
                skills={['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages']}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Master'
                summary='This is a simple SPA for a caluculator. It consists of 3 pages; Home: with an intro about the app, Calculator: were users can have access to a fully fledged calculator and a Quote page.'
                type='React Project'
                link='https://adorable-creponne-58a432.netlify.app/'
                github='https://github.com/Elerqsousy/crypto-master'
                small={true}
                img={project11}
                skills={['React', 'ECMA-6 JS', 'CSS3', 'Netlify']}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Space X'
                summary='This is an application to reservce space rockets and mission. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier. The My Profile section displays all reserved rockets and space missions.'
                type='React Project'
                link='https://gorgeous-melba-746edd.netlify.app/'
                github='https://github.com/Elerqsousy/spacex'
                small={true}
                img={project8}
                skills={[
                  'React',
                  'Redux Toolkit',
                  'ECMAScript-6',
                  'Open-source Restful API',
                  'CSS3',
                ]}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
