import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sleepPic from '../../assets/pic/profile-pic.png';
import workPic from '../../assets/pic/IMG_1392.JPG';
import './Home.css';

export default function Home() {
  const [workHour, setWorkHour] = useState();
  const workTime = () => {
    const now = new Date();
    const nowHour = now.getHours();
    if (nowHour >= 9 && nowHour <= 18) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    setWorkHour(workTime());
  }, [workHour])
  
  return (
    <div className={`home ${workHour ? 'work' : 'sleep'}`}>
      <div className='pic-wave first'></div>
      <div className='pic-wave second'></div>
      <div className='pic-wave third'></div>
      <Link to='/profile'><img className='pic' src={workHour ? workPic : sleepPic} alt='profile-pic'></img></Link>
    </div>
  );
}