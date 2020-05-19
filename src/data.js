import Project from './Details/Project';
import Edu from './Details/Edu';
import List from './Details/List';
import Profile from './Details/Profile';
import Experience from './Details/Experience';
import Contect from './Details/Contect';
import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';

const data = {
  profile: {
    about: {
      title: 'About Minji',
      content: Profile()
    },
    career: {
      title: 'Experience',
      content: Experience()
    }
  },
  skills: {
    education: {
      title: 'Education',
      content: Edu()
    },
    frontEnd: {
      title: 'Front-end',
      content: List(['javascript', 'HTML/CSS', 'React', 'Redux'])
    },
    backEnd: {
      title: 'Back-end',
      content: List(['Node.js', 'express', 'MongoDB', 'Mongoose'])
    }
  },
  project1: {
    title: '2. Magnae-note',
    content: Project(
      'https://www.magnae-note.com',
      project1Img,
      '화상회의를 진행하는 동안 음성 인식을 통해 회의록을 자동으로 작성해 주고, 작성된 회의록을 선택하여 녹화된 회의 영상을 손쉽게 되돌려 볼 수 있도록 Time travel 기능을 제공하는 웹 애플리케이션입니다.',
      'ES2015+, React, Redux, Styled Components, Electron, WebRTC, Socket.io, Node.js, Express, jwt, MongoDB, Mongoose',
      'https://github.com/minnnji/magnae-note_client',
      'https://github.com/minnnji/magnae-note_server')
  },
  project2: {
    title: '1. Mi-SleepDiary',
    content: Project(
      'https://goofy-tereshkova-3641df.netlify.app',
      project2Img,
      'Mi Sleep Diary는 Mi band(Xiaomi Wearable Device)로 수집된 수면데이터를 연동하여 수면 패턴(깊은 수면, 얕은 수면)을 차트로 확인하고, 말/행동 점수와 함께 그 날의 컨디션을 작성할 수 있는 모바일웹 어플리케이션입니다.',
      'ES2015+, React, Redux, CSS Module, D3.js, Google Fit REST API, Node.js, Express, MongoDB, Mongoose, Jest, Enzyme',
      'https://github.com/minnnji/Mi-SleepDiary_client',
      'https://github.com/minnnji/Mi-SleepDiary_server')
  },
  contact: {
    github: {
      title: 'Github',
      content: Contect('github', 'https://github.com/minnnji')
    },
    homepage: {
      title: 'Blog',
      content: Contect('tistory', 'https://minnnji23.tistory.com ')
    },
    phone: {
      title: 'Phone',
      content: Contect('phone', '', '010-2326-4353')
    },
    email: {
      title: 'e-mail',
      content: Contect('gmail', '', 'choimj2326@gmail.com')
    }
  }
}

export default data;
