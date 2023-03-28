import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Blast = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

<<<<<<< HEAD
  const opt = {
    fullScreen: {
      zIndex: 9,
    },

    particles: {
      sounds: {
        enable: true,
      },
=======
  const options = {
    fullScreen: {
      zIndex: -1,
    },
    particles: {
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      number: {
        value: 0,
      },
      color: {
<<<<<<< HEAD
        value: ['#00FFFC', '#FC00FF', '#fffc00', '#57df03'],
=======
        value: ['#00FFFC', '#FC00FF', '#fffc00'],
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      },
      shape: {
        type: ['polygon', 'triangle', 'circle'],
        options: {},
      },
      opacity: {
<<<<<<< HEAD
        value: 6,
=======
        value: 1,
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: 'max',
          destroy: 'min',
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 20,
        },
        decay: 0.1,
        direction: 'none',
        straight: false,
        outModes: {
          default: 'destroy',
          top: 'none',
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: 'random',
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    emitters: {
      position: {
<<<<<<< HEAD
        x: 85,
        y: 20,
      },
      life: {
        count: 4,
=======
        x: 70,
        y: 30,
      },
      life: {
        count: 3,
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
        duration: 0.4,
        delay: 0.4,
      },
      rate: {
        delay: 0.4,
        quantity: 150,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };
  return (
    <div className="ani">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
<<<<<<< HEAD
        options={opt}
=======
        options={options}
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      />
    </div>
  );
};

export default Blast;
