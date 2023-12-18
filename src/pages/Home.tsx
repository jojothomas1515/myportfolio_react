import React, { Component } from 'react';
import '../styles/pages/Home.css'

class Home extends Component {


  render() {
    return (
      <>
        <main>
          <section className={'intro'}>
            <div className={'hello'}>
              <h1> Hello, my name is Joseph Thomas Ehigie
              </h1>
              <h5>I am and <b>focused developer</b> who is currently based in Edo, Nigeria</h5>
              <div className='pc_only'>
                <div className='ss'>Backend Developer</div>
                <div className='ss'>DevOps Engineer</div>
              </div>
            </div>
            <div className={'image_container'}>
              <img id={'fine_boy'} src={require('../images/jojo_thomas.jpeg')}/>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
