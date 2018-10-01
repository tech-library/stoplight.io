import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPaintBrush,
  faBook,
  faFlask,
  faServer,
  faCheck,
  faCheckCircle,
  faRss,
  faUsers,
  faComments,
  faGraduationCap,
  faSuitcase,
  faArrowRight,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const init = () => {
  library.add(faPaintBrush);
  library.add(faBook);
  library.add(faFlask);
  library.add(faServer);
  library.add(faCheck);
  library.add(faCheckCircle);
  library.add(faRss);
  library.add(faUsers);
  library.add(faComments);
  library.add(faGraduationCap);
  library.add(faSuitcase);
  library.add(faArrowRight);
  library.add(faBars);
  library.add(faTimes);
  library.add(faTwitter);
  library.add(faLinkedin);
  library.add(faGithub);
};
