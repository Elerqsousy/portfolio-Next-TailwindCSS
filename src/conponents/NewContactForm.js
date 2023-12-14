import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ContactFormContext } from './Context';

const NewContactForm = () => {
  const formRef = React.useRef(null);
  const { isOpen, setIsOpen } = React.useContext(ContactFormContext);
  const [countdown, setCountdown] = React.useState(-1);
  const [state, handleSubmit] = useForm('xpzgvlvj');
  const [isSubmitted, setSubmitted] = React.useState(false);

  const resetForm = () => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    };
    setSubmitted(false);
    setCountdown(-1);
  };
  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleSubmitForm = (e) => {
    setSubmitted(true);
    setCountdown(10);
  };

  React.useEffect(() => {
    let timer;
    if (countdown >= 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        handleClose();
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  React.useEffect(() => {
    if (!!state.succeeded) {
      handleSubmitForm();
    }
  }, [state.succeeded, handleSubmitForm]);

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
              <div className='flex flex-col items-center justify-center gap-4 text-light dark:text-dark  text-center '>
                <h3 className='text-lg md:text-sm'>
                  Your message has been submitted successfully!
                </h3>
                <p className='text-sm md:text-xs'>
                  I will get back to you the soonest.
                </p>

                <button
                  type='button'
                  onClick={resetForm}
                  className='flex items-center bg-light/75 text-dark p-2.5 px-6 w-fit self-center
                  mt-5 rounded-lg text-lg font-semibold hover:bg-dark/75 hover:text-light 
                  border-2 border-solid  border-transparent hover:border-light/75
                  dark:bg-dark dark:text-light dark:hover:bg-light/75 dark:hover:text-dark dark:border-dark/75
                  md:p-2 md:px-4 md:text-sm active:scale-95 transition duration-150'
                >
                  Send another message
                </button>
                {countdown > -1 && (
                  <p className='mt-10 text-sm md:text-xs'>
                    This pop-up will close in{' '}
                    <span className='dark:text-primary text-primaryDark text-md md:text-sm'>
                      {countdown}
                    </span>{' '}
                    seconds
                  </p>
                )}
              </div>
            ) : (
              <form
                ref={formRef}
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
                  className='flex items-center bg-light/75 text-dark p-2.5 px-6 w-fit self-center
                  mt-10 rounded-lg text-lg font-semibold hover:bg-dark/75 hover:text-light 
                  border-2 border-solid  border-transparent hover:border-light/75
                  dark:bg-dark dark:text-light dark:hover:bg-light/75 dark:hover:text-dark dark:border-dark/75
                  md:p-2 md:px-4 md:text-sm active:scale-95 transition duration-150'
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

export default NewContactForm;
