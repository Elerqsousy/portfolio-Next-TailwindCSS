import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { GithubIcon } from '@/conponents/icons';
import project1 from '../../public/images/projects/portfolio-cover-image.jpg';
import BorderSection from '@/conponents/BorderSection';
import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import TransitionEffect from '@/conponents/TransitionEffect';

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
        'flex-col justify-center !rounded-2xl p-6 dark:hover:shadow-[5px_5px_13px_light] xs:p-4': small,
      })}
      shadow={small ? false : true}
    >
      <Link
        href={link || github}
        target='_blank'
        className={classNames(
          'w-1/2 h-auto cursor-pointer overflow-hidden rounded-lg lg:w-full',
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
            className={classNames('my-2 w-full text-left text-4xl font-bold sm:text-base', {
              'text-3xl lg:text-2xl': small,
            })}
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
              className={classNames('font-semibold', {'md:text-base hover:underline': small,
                'ml-4 rounded-lg bg-dark hover:bg-dark/75 text-light p-1 px-6 text-lg': !small,
                'dark:bg-light dark:hover:bg-light/75 dark:text-dark sm:px-4 sm:text-base': !small,
                
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
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-x-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:gap-y-16'>
            <div className='col-span-12'>
              <Project
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency.'
                type='Featureed Project'
                link='/'
                github='/'
                img={project1}
                skills={[
                  'React',
                  'Tailwind CSS',
                  'Context API',
                  'React Router',
                  'Recharts',
                ]}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                type='Featureed Project'
                link='/'
                github='/'
                small={true}
                img={project1}
                skills={[
                  'React',
                  'Tailwind CSS',
                  'Context API',
                  'React Router',
                  'Recharts',
                  'Tailwind CSS',
                  'Context API',
                  'React Router',
                  'Recharts',
                ]}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                type='Featureed Project'
                github='/'
                small={true}
                img={project1}
                skills={[
                  'React',
                  'Tailwind CSS',
                  'Context API',
                  'React Router',
                  'Recharts',
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
