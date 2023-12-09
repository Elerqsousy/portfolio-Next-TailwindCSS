import classNames from 'classnames';
import React from 'react';

const BorderSection = ({
  children,
  className,
  childrenClassName,
  shadow = true,
}) => {
  return (
    <article
      className={classNames(
        'w-full h-full flex items-start justify-between relative',
        'rounded-br-2xl rounded-3xl border border-solid p-12',
        'border-dark bg-light hover:shadow-2xl dark:hover:shadow-light',
        'dark:bg-dark dark:border-light dark:hover:shadow-xl',
        'lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4',
        className
      )}
    >
      {children}
      {shadow && (
        <div
          className={classNames(
            'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light',
            'md:-right-1 lg:h-[102%] md:w-full md:rounded-[1.5rem]',
            childrenClassName
          )}
        />
      )}
    </article>
  );
};

export default BorderSection;
