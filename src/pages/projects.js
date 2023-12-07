import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { GithubIcon } from '@/conponents/icons';
import project1 from '../../public/images/projects/portfolio-cover-image.jpg';
import BorderSection from '@/conponents/BorderSection';
import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import classNames from 'classnames';

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
        'flex-col justify-center !rounded-2xl shadow-none p-6': small,
      })}
      shadow={small ? false : true}
    >
      <Link
        href={link}
        target='_blank'
        className={classNames('w-1/2 h-full cursor-pointer overflow-hidden rounded-lg', {'!w-full !h-auto': small})}
      >
        <Image src={img} alt={title} className={classNames({'w-full h-auto':small, 'h-full w-auto': !small})} />
      </Link>
      <div
        className={classNames(
          'w-1/2 flex flex-1 flex-col items-start justify-between pl-6 ',
          { 'pl-0 mt-4 !w-full': small }
        )}
      >
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2
            className={classNames('my-2 w-full text-left text-4xl font-bold', {
              'text-3xl': small,
            })}
          >
            {title}
          </h2>
        </Link>

        {summary && <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>}
        <ul className='mb-2 flex justify-start items-center flex-wrap '>
          {skills?.map((skill, i) => (
            <li className='text-sm text-dark/75 dark:text-light/75'>
              {skill}
              {i < skills.length - 1 && <>, &nbsp;</>}
            </li>
          ))}
        </ul>
        <div
          className={classNames('mt-2 flex items-center', {
            'w-full flex-row-reverse justify-between mt-auto': small,
          })}
        >
          <Link
            href={github}
            target='_blank'
            className={classNames('w-10', { 'w-8': small })}
          >
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target='_blank'
              className={classNames('font-semibold underline', {
                'ml-4 rounded-lg bg-dark text-light p-1 px-6 text-lg no-underline dark:bg-light dark:text-dark':
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
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16'
          />
          <div className='grid grid-cols-12 gap-24'>
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

            <div className='col-span-6'>
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
            <div className='col-span-6'>
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
