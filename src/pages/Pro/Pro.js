import './Pro.css';
// import berlin from '../../assets/pic/berlin.png';
import epitech from '../../assets/pic/epitech.png';
import icilaba from '../../assets/pic/icilaba.jpeg';
import Experience from '../../components/experience/experience';
import mytribe from '../../assets/pic/mytribe.png';
import viaccessOrca from '../../assets/pic/membres-viaccess.jpeg';

export default function Pro() {
  const experiences = [
    {
      name: 'MyTribe',
      link: 'https://tomix-boop.github.io/landing-page-eip/',
      location: 'remote',
      time: 'Mars 2022 -> Juin 2023',
      job: 'Développeur BackEnd',
      description: ['MyTribe est un projet que nous développons avec un groupe de 8 étudiants dans le cadre de notre master. Ce projet a pour but de connecter la famille en combinant une messagerie, des listes, des albums photos et des évènements.'],
      technology: 'NodeJS',
      imgUrl: mytribe,
      color: 'rgb(126,177,242)',
      darkColor: 'rgb()',
    },
    {
      name: 'EPITECH',
      link: 'https://www.epitech.eu/',
      location: 'Berlin',
      time: 'Septembre 2021 -> Mai 2022',
      job: 'Étudiant en 4e année',
      description: ["Découverte d'un nouveau pays pour ma 4e année. Mon choix pour Berlin étant motivé par une ville ayant une bonne réputation auprès de la jeunesse et rester en Europe dans le cadre d'une situation sanitaire encore instable. Durant cette année j'ai pu consolider mes bases avec le framework Angular ainsi qu'en apprendre un nouveau ReactJS. J'ai aussi travaillé sur des projets de cybersécurité, tel que des CTF et la création d'HoneyPot. Pour finir j'ai décidé de suivre des cours porter sur le management, la gestion et la comptabilité pour avoir un aperçu de la gestion de projet dans son ensemble."],
      technology: 'Angular, ReactJS, NodeJS',
      imgUrl: epitech,
      color: 'rgba(0,90,168, .8)',
      darkColor: 'rgb(0,90,168)'
    },
    {
      name: 'Icilaba creation',
      link: 'https://icilaba.fr/',
      location: 'Rennes',
      time: 'Avril 2021 -> Aout 2021',
      job: 'Stage développeur FullStack',
      description: ["Développement d'un nouvel outil pour la gestion de projet au sein de l'entreprise. J'ai été en charge de la gestion du projet en étant accompagné par mon tuteur. J'ai grâce à ce projet compris le fonctionnement FrontEnd et BackEnd d'une application et comment les assembler."],
      technology: 'NodeJS, Angular',
      imgUrl: icilaba,
      color: 'rgba(2,43,209, .6)',
      darkColor: 'rgb(2,43,209)',
    },
    {
      name: 'VIACCESS-ORCA',
      link: 'https://www.viaccess-orca.com/',
      location: 'Rennes',
      time: 'Septembre 2019 -> Décembre 2019',
      job: 'Stage Testeur Java',
      description: ['Mise en place d\'une politique de test pour le nouvel outil de l\'entreprise.'],
      technology: 'Java',
      imgUrl: viaccessOrca,
      color: 'rgba(247,56,48, .75)',
      darkColor: 'rgb(101,44,111)'
    },
    {
      name: 'EPITECH',
      link: 'https://www.epitech.eu/',
      location: 'Rennes',
      time: 'Septembre 2018 -> Juin 2021',
      job: 'Étudiant',
      description: [
        "1ère année: Découverte de la programmation avec le langage C. Réalisation de projet en groupe grâce à des outils tel que GitHub et Canva pour les présentations.",
        "2è année: Enrichissement des compétences en C. Découverte du langage C++ pour comprendre les langages orientés objets et du Python pour les projets de Mathématique.",
        "3è année: Approfondissement du C++. Découverte du JavaScript par la création d'application utilisant des requêtes API. DevOps, fonctionnement de docker pour la mise en place d'application à moindre coût.",
      ],
      technology: 'C, C++, Python, JavaScript',
      imgUrl: epitech,
      color: 'rgba(0,90,168, .8)',
      darkColor: 'rgb(0,90,168)',
    }
  ]
  return (
    <div className='pro'>
      {
        experiences.map((experience) => <Experience key={experience.name} experience={experience}/>)
      }
    </div>
  )
}