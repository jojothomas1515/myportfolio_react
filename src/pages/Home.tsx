import React, { Component } from 'react';
import '../styles/pages/Home.css';
import { FaArrowRight, FaRobot, FaTerminal, FaTools, FaTrophy } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

class Home extends Component {


  render() {
    return (
      <>
        <main>
          <section className={'intro'}>
            <div className={'hello'}>
              <h1> Hello, my name is Joseph Thomas Ehigie
              </h1>
              <h5>I am and <b>focused developer</b> who is currently based in Edo, Nigeria.</h5>
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
              <div className='featured_project_card'>
                <img src={require('../images/meetdev.png')} alt={'meet-devs'} />
                <div className='featured_project_card_details'>
                  <h3>MeetDevs</h3>
                  <p>A platform to connect dev with people who need them</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
