import { Link } from 'react-router-dom';
import sleepPic from '../../assets/pic/profile-pic.png';
import workPic from '../../assets/pic/me.jpg';
import './Home.css';

export default function Home(props) {
  return (
    <div className={`home ${props.work ? 'work' : 'sleep'}`}>
      <div className='pic-wave first'></div>
      <div className='pic-wave second'></div>
      <div className='pic-wave third'></div>
      <Link to='/profile'><img className='pic' src={props.work ? workPic : sleepPic} alt='profile-pic'></img></Link>
    </div>
  );
}