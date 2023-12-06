import classNames from 'classnames';
import React from 'react';

const borderedSection = ({ children, className, childrenClassName }) => {
  return (
    <div
      className={classNames(
        'relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8',
        className
      )}
    >
      <div
        className={classNames(
          'absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark',
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default borderedSection;
