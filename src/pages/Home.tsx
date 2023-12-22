import React, { Component } from 'react';
import '../styles/pages/Home.css';
import { FaArrowRight, FaRobot, FaTerminal, FaTools, FaTrophy } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import { LanguageAndFrameworkCard, LanguageAndFrameworksContainer } from '../components/LanguageAndFrameworks';

class Home extends Component {


  render() {
    return (
      <>
        <main>
          <section className={'intro'}>
            <div className={'hello'}>
              <h1> Hello, my name is Joseph Thomas Ehigie
              </h1>
              <h5>I am a <b>focused developer</b> who is currently based in Edo, Nigeria.</h5>
              <div className='pc_only'>
                <div className='ss'><FaUserGear /> Backend Developer</div>
                <div className='ss'><FaTools /> DevOps Engineer</div>
              </div>
            </div>
            <div className={'image_container'}>
              <img id={'fine_boy'} src={require('../images/jojo_thomas.jpeg')} alt={'Joseph Thomas on a field'} />
            </div>
          </section>
          <section className='soft_skills'>
            <div className='soft_skill_container'>
              <FaTerminal />
              <h3>Resourceful</h3>
              <p>There might be things i don't know, but i do know how to learn</p>
            </div>
            <div className='soft_skill_container'>
              <FaTrophy />
              <h3>Team player</h3>
              <p>My success is inseparable from the success of my team, it's not about how well I've done, but how well
                we've collectively triumphed</p>
            </div>
            <div className='soft_skill_container'>
              <FaRobot />
              <h3>Lazy Developer</h3>
              <p>I'm a lazy developer, i don't like to repeat myself, so i automate repetitive tasks</p>
            </div>
          </section>

          <section className={'featured_projects'}>
            <div className='section_title_container'>
              <h1>Selected Work</h1>

              <Link to={'/projects'}>
                View All

                <FaArrowRight />
              </Link>
            </div>
            <div className='featured'>
              <FeaturedProjectCard image={require('../images/meetdev.png')} alt={'meet-devs'} title={'MeetDevs'}
                                   description={'A platform to connect dev with people who need them'}
                                   githubLink={'https://github.com/Ayobami6/MeetDevs'}
                                   liveLink={'https://meet-devs.vercel.app'} />
            </div>
          </section>
          <section className={'familiar_tech'}>
            <h1> Familiar Frameworks and Programming languages</h1>
            <p>Some of the Programming languages and frameworks i'm well familiar with</p>

            <LanguageAndFrameworksContainer>
              <LanguageAndFrameworkCard imageUrl={require('../images/python-logo-only.png')} altText={'Python Logo'}
                                        name={'Python'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/javascript-39397.png')} altText={'Javascript Logo'}
                                        name={'Javascript'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/ts-logo-512.png')} altText={'Typescript Logo'}
                                        name={'Typescript'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/python-logo-only.png')} altText={'Python Logo'}
                                        name={'Python'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/python-logo-only.png')} altText={'Python Logo'}
                                        name={'Python'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/python-logo-only.png')} altText={'Python Logo'}
                                        name={'Python'} />
              <LanguageAndFrameworkCard imageUrl={require('../images/python-logo-only.png')} altText={'Python Logo'}
                                        name={'Python'} />
            </LanguageAndFrameworksContainer>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
