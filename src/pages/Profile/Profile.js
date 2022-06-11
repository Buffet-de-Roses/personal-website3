import './Profile.css';
import { useState } from 'react';
import Me from '../Me/Me';
import Pro from '../Pro/Pro';
import Contact from '../Contact/Contact';

export default function Profile(props) {
  const [page, setPage] = useState('profile');

  return (
    <div className={`profile ${props.work ? 'work' : 'sleep'}`}>
      <div className='options'>
        <ul>
          <li onClick={() => setPage('profile')}>À propos de moi</li>
          <li onClick={() => setPage('pro')}>Expériences</li>
          <li onClick={() => setPage('contact')}>Contact</li>
        </ul>
      </div>
      <div className='selectedOption'>
        {
          {
            'profile': <Me />,
            'pro': <Pro />,
            'contact': <Contact />
          }[page]
        }
      </div>
    </div>
  );
}