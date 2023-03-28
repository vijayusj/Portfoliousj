import { TypeAnimation } from 'react-type-animation';

const TypeA = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
        1000, // Waits 1s
        'BlockChain Enthusiast', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'WEB 3.0 Enthusiast',
        1000,
        'UpComing SDE',
        1000, // Types 'Three' without deleting 'Two'
        'Freelancer',
        1000,
      ]}
      wrapper="div"
      // cursor={true}
      speed={73}
      className={'type'}
      deletionSpeed={70}
      repeat={Infinity}
<<<<<<< HEAD
=======
      style={{
        fontSize: '4rem',
        color: ' rgb(198, 21, 98)',
        fontWeight: '800',
      }}
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
    />
  );
};

export default TypeA;
