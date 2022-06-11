import './Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <ul>
        <li><a href='https://www.linkedin.com/in/tom-marescot/' target='_blank' rel='noreferrer'>Linkedin</a></li>
        <li><a href='https://github.com/tomix-boop' target='_blank' rel='noreferrer'>Github</a></li>
        <li><a href='mailto:tom.marescot@epitech.eu' id='email'>Email</a></li>
      </ul>
    </div>
  )
}