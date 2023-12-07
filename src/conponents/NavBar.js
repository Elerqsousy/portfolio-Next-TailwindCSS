'use client'; // this is a client component

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import Logo from './Logo';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './icons';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={classNames(className, 'relative group')}>
      {title}
      <span
        className={classNames(
          'h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5 group-hover:!w-full transition-[width] ease duration-300 dark:bg-light',
          { '!w-0': router.asPath !== href }
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='m-4' />
        <CustomLink href='/projects' title='Projects' className='m-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap gap-2'>
        <motion.a
          href='/'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='/'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-[22px] mr-3'
        >
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          className={classNames(
            'ml-3 flex items-center justify-center rounded-full p-1 bg-light text-dark',
            { '!bg-dark !text-light': currentTheme !== 'dark' }
          )}
        >
            <SunIcon className={classNames('fill-dark', {'hidden': currentTheme !== 'dark'})} />
            <MoonIcon className={classNames('fill-dark', {'hidden': currentTheme === 'dark'})} />
        </button>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
