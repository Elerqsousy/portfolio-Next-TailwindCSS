import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ContactFormContext } from './Context';

const ContactForm = () => {
  const { isOpen, setIsOpen } = React.useContext(ContactFormContext);
  const [state, handleSubmit] = useForm('xpzgvlvj');
  const [isSubmitted, setSubmitted] = React.useState(false);

  const handleClose = () => {
    setSubmitted(false);
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (!!state.succeeded) {
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [state.succeeded, handleClose]);

  return (
    <>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            onClick={handleClose}
            className={classNames(
              'z-20 bg-dark/20 dark:bg-light/20 backdrop-blur-sm ',
              'top-0 left-0 w-screen h-screen fixed'
            )}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          {/* Modal Container */}
          <motion.div
            className='min-w-[70vw] flex flex-col justify-between items-center
          z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
          text-light dark:text-dark'
            initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              type='button'
              onClick={handleClose}
              className='flex-col justify-center items-center absolute top-12 left-12 md:top-9 md:left-9'
            >
              <span className='bg-light dark:bg-dark block h-0.5 w-6 rounded-sm rotate-45 translate-y-1/2' />
              <span className='bg-light dark:bg-dark block h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1/2' />
            </button>

            {isSubmitted ? (
              <div className='flex flex-col items-center justify-center gap-4 text-light dark:text-dark'>
                <h3 className='text-xl md:text-md'>Thanks for your message!</h3>
                <p className='text-lg md:text-sm'>
                  I will get back to you the soonest.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 w-full p-14 md:p-8'
              >
                <input
                  id='name'
                  type='name'
                  name='name'
                  placeholder='Name*'
                  required
                  className='w-full rounded-md p-3 text-dark dark:text-light'
                />
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                />
                <input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email*'
                  required
                  className='w-full rounded-md p-3 text-dark dark:text-light'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <textarea
                  id='message'
                  name='message'
                  placeholder='Message*'
                  required
                  className='w-full rounded-md p-3 text-dark dark:text-light'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <button
                  type='submit'
                  disabled={state.submitting}
                  className='mt-7 font-semibold p-3 w-full bg-light/75 dark:bg-dark/75 text-dark dark:text-light rounded-md'
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};

export default ContactForm;
