import classNames from 'classnames';
import React from 'react';

const skillList = [
  '<html>',
  'JavaScript',
  'React',
  'Next.js',
  'Redux',
  'jQuery',
  'Typescript',
  'CSS3',
  'Bootstrap',
  'TailwindCSS',
  'Sass',
  'React Charts',
  'Framer-motion',
  'Ruby',
  'Rails',
  'MySQL',
  'PostgreSQL',
  'Rest API',
  'API Documentation',
  'Mobile First Development',
  'Unit testing',
  'Responsive Development',
  'TDD',
  'Chrome Dev Tools',
  'High Availability',
  'Microservices',
  'Pair-Programming',
  'Agile',
  'Scrum',
  'Code Review',
];

const Randomized = ({ items }) => {
  const RN = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let lineLength = RN(1, 5);
  const spanStructure = (item, end = false) => (
    <div>
      <span
        className='text-dark dark:text-light'
        style={{
          fontSize: RN(14, 30),
          fontWeight: RN(5, 6) * 100,
          opacity: `0.${RN(5, 9)}`,
          paddingRight: end ? RN(100, 150) : RN(20, 40),
          paddingLeft: end ? RN(20, 40) : 0,
        }}
      >
        {item}
      </span>
    </div>
  );
  return (
    <div className='w-full flex justify-center items-center flex-wrap overflow-hidden'>
      {items.map((item, i) => {
        if (i === lineLength) {
          lineLength += RN(1, 5);
          return <div key={item + '-' + i}>{spanStructure(item, true)}</div>;
        }
        return <div  key={item + '-' + i}>{spanStructure(item)}</div>;
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16 
      lg:mt-32 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'>
        Skills
      </h2>
      <Randomized items={skillList} />
    </div>
  );
};

export default Skills;
