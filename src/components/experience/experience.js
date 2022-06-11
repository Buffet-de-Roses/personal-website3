import './experience.css';
import Location from '../../assets/pic/location.png';

export default function Experience(props) {
  return (
    <div className='experience' style={{backgroundColor: props.experience.color}}>
      <div className='experience-card'>
        <div className='experience-header'>
          <div className='description-title'>
          <h1 className='experience-h1'><a href={props.experience.link} target='_blank' rel='noreferrer'>{props.experience.name}</a></h1>
            <h3 className='experience-h3'>{props.experience.job}</h3>
            <p className='experience-title-paragraph'>{props.experience.time}</p>
            <div className='experience-location'>
              <span><img className='location' src={Location} alt='location' href='https://www.flaticon.com/free-icons/location' ></img></span>
              <p>{props.experience.location}</p>
            </div>
          </div>
          <img className='experience-header-logo' src={props.experience.imgUrl} alt='logo'></img>
        </div>
        <div className='experience-body'>
          <div className='experience-description'>{props.experience.description.map((describe) => <p key={describe}>{describe}</p>)}</div>
          <p className='experience-technology'>Technologies utilisées: {props.experience.technology}</p>
        </div>
      </div>
    </div>
  )
}