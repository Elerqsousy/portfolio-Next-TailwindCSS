import React from 'react';
import Link from 'next/link';

import Layout from './Layout';
import { ContactFormContext } from './Context';

const Footer = () => {
  const { setIsOpen } = React.useContext(ContactFormContext);

  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light lg:text-sm fixed bottom-0'>
      <Layout className='!py-8 flex items-center gap-3 sm:flex-col lg:!py-4 md:gap-0'>
        <span className='felx-1 w-full md:text-center'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center justify-center felx-1 w-full'>
          Built with <span className='text-xl px-1 md:text-base'>&#9825;</span>
          by&nbsp;
          <Link
            className='underline underline-offset-2 hover:opacity-75'
            target={'_blank'}
            href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
          >
            Riz
          </Link>
        </div>
        <button
          className='underline underline-offset-2 hover:opacity-75 text-primary dark:text-primaryDark felx-1 w-full text-end md:text-center'
          onClick={() => setIsOpen(true)}
        >
          Hire me!
        </button>
      </Layout>
    </footer>
  );
};

export default Footer;
