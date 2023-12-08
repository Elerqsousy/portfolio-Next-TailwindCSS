import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light md:text-base'>
      <Layout className='!py-8 flex items-center justify-between md:flex-col lg:!py-4'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built with <span className='text-primary dark:text-primaryDark text-xl px-1'>&#9825;</span>{' '}
          by&nbsp;
          <Link
            className='underline underline-offset-2'
            target={'_blank'}
            href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
          >
            Riz
          </Link>
        </div>
        <Link
          className='underline underline-offset-2 md:hidden'
          target={'_blank'}
          href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
        >
          Say hi!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
