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
        'w-full h-full flex items-center justify-between relative',
        'rounded-br-2xl rounded-3xl border border-solid p-12',
        'border-dark bg-light hover:shadow-2xl dark:hover:shadow-light dark:bg-dark dark:border-light dark:hover:shadow-lg',
        className
      )}
    >
      {children}
      {shadow && (
        <div
          className={classNames(
            'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light',
            childrenClassName
          )}
        />
      )}
    </article>
  );
};

export default BorderSection;
