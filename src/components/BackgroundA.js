<<<<<<< HEAD
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
// eslint-disable-next-line
const BackgroundA = ({ ani }) => {
  const opt1 = {
    fullScreen: {
      enable: false,
=======
import React, { useState, useEffect, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const BackgroundA = () => {
  const [blast, setBlast] = useState(false);
  setTimeout(() => {
    setBlast(true);
  }, 5000);

  useEffect(() => {}, [blast]);
  const opt1 = {
    fullScreen: {
      // enable: false,
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      zIndex: -1,
    },
    background: {
      color: {
        value: '#0b0611',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        // onClick: {
        //   enable: true,
        //   mode: 'push',
        // },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          // quantity: 4,
          enable: false,
        },
        // repulse: {
        //   distance: 200,
        //   duration: 0.4,
        // },
      },
    },
    particles: {
      color: {
        value: 'rgb(55, 232, 61)',
      },
      links: {
        color: 'rgb(238, 83, 238)',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,

        random: false,
        speed: 3,
        straight: false,
        bounce: false,
      },
      number: {
        density: {
          enable: false,
          // area: 800,
        },
<<<<<<< HEAD
        value: 30,
=======
        value: 100,
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      },

      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  const opt2 = {
    fullScreen: {
<<<<<<< HEAD
      zIndex: 9,
    },

=======
      zIndex: -1,
    },
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
    particles: {
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
        x: 50,
        y: 5,
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
<<<<<<< HEAD
        quantity: 100,
=======
        quantity: 150,
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
<<<<<<< HEAD
    await console.log(container);
=======
    // await console.log(container);
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
  }, []);

  return (
    <div className="bg">
<<<<<<< HEAD
      <div className="blast">
        {ani && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={opt1}
          />
        )}
      </div>

      <div className="blast">
        {!ani && (
=======
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={opt1}
      />
      <div className="ani">
        {blast ? (
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
          <Particles
            id="tsparticle"
            init={particlesInit}
            loaded={particlesLoaded}
            options={opt2}
          />
<<<<<<< HEAD
=======
        ) : (
          ''
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
        )}
      </div>
    </div>
  );
};

export default BackgroundA;
