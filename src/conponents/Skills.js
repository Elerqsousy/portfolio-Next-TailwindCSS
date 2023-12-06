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
  const spanStructure = (item, end=false) => (
    <div>
    <span
      className='text-dark'
      style={{
        fontSize: RN(14, 30),
        fontWeight: RN(5, 6) * 100,
        opacity: `0.${RN(5, 9)}`,
        paddingRight: end ? 200 : RN(2, 4) * 10,
        paddingLeft: end ? RN(2, 4) * 10 : 0,
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
          return (
            <div>
              {spanStructure(item, true)}
            </div>
          );
        }
        return (
          <div>{spanStructure(item)}</div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16'>
        Skills
      </h2>
      <Randomized items={skillList} />
    </div>
  );
};

export default Skills;
