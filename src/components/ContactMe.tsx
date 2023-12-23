import React from 'react';
import '../styles/components/ContactMe.css';
import { FaArrowUpRightDots } from 'react-icons/fa6';

function ContactMe() {
  return (
    <>
      <hr />
      <div className={'contact_me'}>
        <h1>
          Interested in working with me? <br />
        </h1>

        <a href='mailto:jojothomas1515@gmail.com'>Send me a mail <FaArrowUpRightDots /></a>
      </div>
    </>
  );
}

export default ContactMe;
