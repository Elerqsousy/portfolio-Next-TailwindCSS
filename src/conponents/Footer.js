import React from 'react';
import Link from 'next/link';

import Layout from './Layout';
import { ContactFormContext } from './Context';

const Footer = () => {
  const { setIsOpen } = React.useContext(ContactFormContext);

  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light md:text-sm'>
      <Layout className='!py-8 flex items-center justify-between sm:flex-col lg:!py-4'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built with <span className='text-xl px-1 md:text-base'>&#9825;</span>{' '}
          by&nbsp;
          <Link
            className='underline underline-offset-2 text-primary dark:text-primaryDark'
            target={'_blank'}
            href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
          >
            Riz
          </Link>
        </div>
        <button
          className='underline underline-offset-2 md:hidden'
          onClick={() => setIsOpen(true)}
        >
          Hire me!
        </button>
      </Layout>
    </footer>
  );
};

export default Footer;
