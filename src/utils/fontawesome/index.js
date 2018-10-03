import { library } from '@fortawesome/fontawesome-svg-core';

import { faPaintBrush } from '@fortawesome/free-solid-svg-icons/faPaintBrush';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

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
