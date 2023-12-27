import React from 'react';
import '../styles/pages/About.css';
import ContactMe from '../components/ContactMe';

function About() {
  return (
    <main>
      <h1> About Joseph Thomas Ehigie </h1>
      <p>Thanks for getting here, Read below to know more about myself</p>
      <img src={require('../images/jojo_thomas.jpeg')} alt='Joseph Thomas Ehigie' />

      <section className='about'>
        <h2>About me</h2>

        <p>
          I am a passionate Full Stack Software Engineer with an unwavering enthusiasm for crafting seamless and aesthetically pleasing web applications. My journey into the world of software engineering began years ago when I was captivated by the intricacies of game development. Since then, my dedication to becoming a proficient software engineer has driven me to build production-ready applications and tools.

          Fortunate to embark on this educational journey, I secured a place at the prestigious Holberton School. It was there that I earned my Full Stack Software Engineering Diploma, courtesy of a scholarship generously provided by Alx Africa.
        </p>
        <h2> Educational Background
        </h2>
        <p> I hold a Bachelor's degree in Statistics from the University of Benin, Edo, Nigeria. This foundation in
          statistics provides a unique perspective that complements my technical skills, allowing me to approach
          problem-solving with a well-rounded mindset.
        </p>
        <h2> Technical Expertise
        </h2>
        <p> My proficiency spans a myriad of technologies, including React, Node, Express, Python, Django, Postgres,
          MongoDB, and more. I specialize in creating full-stack applications and take pride in my ability to automate
          processes. Crafting efficient Command Line Interface (CLI) tools is one of the many ways I contribute to
          enhancing development workflows.
        </p>
        <h2> Collaborative Spirit
        </h2>
        <p> As a firm believer in the power of teamwork, I have successfully collaborated with diverse teams on projects
          of varying scales. Whether it's a small, agile group or a larger team, I thrive on the dynamic exchange of
          ideas and the collective effort required to bring innovative solutions to life.
        </p>
        <h2> Continuous Learning
        </h2>
        <p> In addition to my formal education, I am committed to continuous learning and growth within the
          ever-evolving field of software engineering. The journey doesn't end with a diploma; it's an ongoing
          exploration of new technologies and best practices.
        </p>
        <p> Thank you for visiting my corner of the internet. I look forward to connecting and collaborating with fellow
          enthusiasts, creators, and innovators.</p>

      </section>
      <ContactMe/>
    </main>
  );
}

export default About;
