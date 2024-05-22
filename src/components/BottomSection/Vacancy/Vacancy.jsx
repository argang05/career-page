/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './vacancy.css';
import VacancyContainer from './VacancyContainer/VacancyContainer';

const Vacancy = () => {
  const headingRef = useRef(null);
  const vacancyRef = useRef(null);

  const vacancyData = [
    {
      title: "SDE III",
      desc: "Seeking Senior Software Engineer to develop and optimize advanced IoT solutions for innovative and dynamic projects",
      workExp: 7
    },
    {
      title: "Product Manager",
      desc: "Seeking a Product Manager to lead IoT innovations, drive product strategy, and ensure successful market delivery",
      workExp: 10
    },
    {
      title: "Sales Executive",
      desc: "Seeking dynamic Sales Executive to drive growth and build client relationships in cutting-edge IoT solutions.",
      workExp: 3
    },
    {
      title: "Data Scientist",
      desc: "Seeking a Data Scientist to drive insights and innovation with advanced analytics and machine learning techniques.",
      workExp: 4
    },
    {
      title: "UI/UX Designer",
      desc: "Design intuitive and visually stunning interfaces to enhance user experience for Tor.ai’s IoT solutions.",
      workExp: 2
    },
    {
      title: "DevOps Engineer",
      desc: "Seeking a DevOps Engineer to streamline deployments, automate workflows, and enhance system reliability at Tor.ai.",
      workExp: 5
    },
  ];

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (vacancyRef.current) {
      observer.observe(vacancyRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (vacancyRef.current) {
        observer.unobserve(vacancyRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='heading' ref={headingRef}>
        <div className='mark'></div>
        <h1>Vacancies:</h1>
      </div>
      <div className='vacancy' ref={vacancyRef}>
        {vacancyData?.map((vacancy, indx) => (
          <VacancyContainer vacancy={vacancy} key={indx} />
        ))}
      </div>
    </>
  );
};

export default Vacancy;
