'use client'; // this is a client component

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import Logo from './Logo';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './icons';

const CustomLink = ({ href, title, onClick, invert = false, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} onClick={onClick} className={classNames(className, 'relative group')}>
      {title}
      <span
        className={classNames(
          'h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5 group-hover:!w-full transition-[width] ease duration-300 dark:bg-light',
          { '!w-0': router.asPath !== href, '!bg-light dark:!bg-dark': invert }
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const ref = React.useRef(null);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  const [isOpen, setIsOpen] = React.useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
     dark:text-light z-10 lg:px-16 md:px-12 sm:px-8 fixed shadow-sm bg-light/80
     dark:bg-dark/80 shadow-dark/25 dark:shadow-light/25 backdrop-blur-md'>

      {/* haburger menu button */}
      <button type='button' ref={ref} onClick={handleclick} className='z-30 flex-col justify-center items-center hidden lg:flex hover:opacity-60'>
        <span className={classNames('bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5', {'rotate-45 !translate-y-1': isOpen})}></span>
        <span className={classNames('bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 opacity-100', {'!opacity-0': isOpen})}></span>
        <span className={classNames('bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5', {'-rotate-45 !-translate-y-1': isOpen})}></span>
      </button>

      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div onClick={handleclick} className={classNames(
          'z-20 bg-dark/20 dark:bg-light/20 backdrop-blur-sm ',
          'top-0 left-0 w-screen h-screen fixed ' )} 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          />

          {/* smaller screen menu */}
          <motion.div className='min-w-[70vw] flex flex-col justify-between items-center
          z-40 fixed top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
          text-light dark:text-dark'
          initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <nav className='flex items-center flex-col justify-center mb-4 '>
            <CustomLink href='/' title='Home' className='m-2 hover:opacity-60' invert onClick={handleclick}/>
            <CustomLink href='/about' title='About' className='m-2 hover:opacity-60' invert onClick={handleclick}/>
            <CustomLink href='/projects' title='Projects' className='m-2 hover:opacity-60' invert onClick={handleclick}/>
          </nav>
          
          <nav className='flex items-center justify-center flex-wrap gap-6 mb-4 sm:gap:3'>
            <motion.a
              href='https://github.com/Elerqsousy'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-[22px]'
            >
              <LinkedInIcon light/>
            </motion.a>
          </nav>
          <button
              type='button'
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className={classNames(
                ' flex items-center justify-center rounded-full p-1 bg-light text-dark border border-dark/25 absolute top-8 right-8',
                { '!bg-dark !text-light !border-light/25': currentTheme !== 'dark' }
              )}
            >
                <SunIcon className={classNames('fill-dark', {'hidden': currentTheme !== 'dark'})} />
                <MoonIcon className={classNames('fill-dark', {'hidden': currentTheme === 'dark'})} />
            </button>
        </motion.div>
      </>
      )}

      {/* bigger screen menu */}
      <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='m-4' />
        <CustomLink href='/projects' title='Projects' className='m-4' />
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap gap-2'>
        <motion.a
          href='https://github.com/Elerqsousy'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-[22px] mr-3'
        >
          <LinkedInIcon />
        </motion.a>
        <button
          type='button'
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          className={classNames(
            ' flex items-center justify-center rounded-full p-1 bg-light text-dark',
            { '!bg-dark !text-light': currentTheme !== 'dark' }
          )}
        >
            <SunIcon className={classNames('fill-dark', {'hidden': currentTheme !== 'dark'})} />
            <MoonIcon className={classNames('fill-dark', {'hidden': currentTheme === 'dark'})} />
        </button>
      </nav>
      </div>

      
      <div className='absolute left-[50%] top-2 translate-x-[-50%] sm:top-1'>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
