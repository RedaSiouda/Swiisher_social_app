import cavalier from '../assets/rename.jpeg';
import berger from '../assets/berger.jpg';
import Scotich from '../assets/Scotich.webp';
import Spitz from '../assets/Spitz.jpg';


const quizPic = [
    {
        image: cavalier,
        correctBreed: 'Cavalier King Charles ',
        breedOptions: ['Bouledog français', 'Cavalier king Charles', 'Tekkel', 'Siamois'],
      },
      {
        image: berger,
        correctBreed: 'Berger Allemand',
        breedOptions: ['Bouledog français', 'Berger d\'Anatolie', 'Dalmatien', 'Berger Allemand'],
      },
      {
        image: Scotich,
        correctBreed: 'Westie ',
        breedOptions: ['Yorkshire', 'Cavalier king Charles', 'Westie', 'Pomerian'],
      },
      {
        image: Spitz,
        correctBreed: 'Spitz Allemand',
        breedOptions: ['Spitz Allemand', 'Cavalier king Charles', 'Pomerian', 'Siamois'],
      },
];

export default quizPic;