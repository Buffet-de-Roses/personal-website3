import { useEffect, useRef, useState } from 'react';
import './Profile.css';

export default function Home2() {

  const me = useRef();
  const showText = (target, message, index, interval) => {
    if (index < message.length) {
      target.current.append(message[index++]);
      setTimeout(() => {showText(target, message, index, interval); }, interval);
    }
  }

  useEffect(() => {
    showText(me, 'I\'m Tom', 0, 300);
  })

  return (
    <div className='profile'>
      <div ref={me}>
      </div>
      <p>_</p>
    </div>
    
  );
}