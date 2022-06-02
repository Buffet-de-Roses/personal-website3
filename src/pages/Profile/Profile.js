import './Profile.css';

export default function Profile(props) {

  // const showText = (target, message, index, interval) => {
  //   if (index < message.length) {
  //     target.current.append(message[index++]);
  //     setTimeout(() => {showText(target, message, index, interval); }, interval);
  //   }
  // }

  return (
    <div className={`profile ${props.work ? 'work' : 'sleep'}`}>
    </div>
  );
}