import './Me.css';
import profile from '../../assets/pic/me.jpg'

export default function Me() {
  return (
    <div className='me'>
      <img src={profile} alt='profile-pic' className='me-img'></img>
      <div className='description'>
        <h1>Tom MARESCOT</h1>
        <h3>Étudiant en 5e année à <a href='https://www.epitech.eu/' target='_blank' rel='noreferrer'>EPITECH</a></h3>
        <p>Passionné depuis toujours par la conception, j'ai découvert par la programmation un moyen de réaliser mes projets. Curieux et créatif, à la recherche de nouvelle technologie à découvrir, je m'intéresse à la cybersécurité et plus récemment avec la découverte du DevOps à la sécurité des infrastructures.</p>
        <p>En m'intéressant à la cybersécurité, j'ai mis un pied dans le réseau et c'est aussi un sujet que j'apprécie beaucoup.</p>
      </div>
    </div>
  )
}