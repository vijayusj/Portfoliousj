import React, { useRef, useState, useEffect } from 'react';
import Background from './BackgroundA';
import Blast from './Blast';
import img1 from '../assets/images/5295497.jpg';
import img2 from '../assets/images/5295526.jpg';
<<<<<<< HEAD
import img3 from '../assets/images/animated.jpeg';
import mask from '../assets/images/sjmask_thumbnail.png';
=======
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
import {
  FaVolumeMute,
  FaVolumeUp,
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
// scss
import ad from '../assets/audio/Cornfield_Chase_Piano_Interstellar-646455.mp3';
<<<<<<< HEAD
// import '../sass/_header.scss';
import TypeA from './TypeA';
const Header = () => {
  // const audioEle = useRef();
=======
import '../sass/_header.scss';
import TypeA from './TypeA';
const Header = () => {
  const audioEle = useRef();
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
  // const [blast, setBlast] = useState(true);
  const [play, setPlay] = useState(false);

  const handler = () => {
    setPlay(!play);
  };

<<<<<<< HEAD
  // useEffect(() => {
  //   if (play) {
  //     audioEle.current.play();
  //   } else {
  //     audioEle.current.pause();
  //   }
  //   console.log('11');
  // }, [play]);

  return (
    <div className="header">
      <div className="part">
        <Background ani="ll" />
      </div>

=======
  useEffect(() => {
    if (play) {
      audioEle.current.play();
    } else {
      audioEle.current.pause();
    }
    console.log('11');
  }, [play]);

  return (
    <div className="header">
      <Background />
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      <div className="cont">
        <h1>
          Hello this is vijay <span className="wave">👋🏻</span>
        </h1>
        <div className="content">
          <h2>I am A</h2>
<<<<<<< HEAD
          <TypeA />
=======
          {/* <TypeA /> */}
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
        </div>
      </div>

      <div className="photo">
<<<<<<< HEAD
        <div className="inner">
          <div className="photo-side front">
            <img src={img3} alt="steve jobs" />
            <img src={mask} alt="mask" className="mask" />
          </div>
          <div className="photo-side back">
            <img src={img1} alt="steve jobs" />
          </div>
        </div>
      </div>
      {/* <div>{blast ? <Blast /> : ''}</div> */}
      {/* <div className="audio">
=======
        <div className="photo-side front">
          <img src={img2} alt="steve jobs" />
        </div>
        <div className="photo-side back">
          <img src={img1} alt="steve jobs" />
        </div>
      </div>
      {/* <div>{blast ? <Blast /> : ''}</div> */}
      <div className="audio">
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
        <audio src={ad} ref={audioEle} />
        <button className="music" onClick={handler}>
          {play ? (
            <FaVolumeMute className="ic mute" />
          ) : (
            <FaVolumeUp className="ic play" />
          )}
        </button>
<<<<<<< HEAD
      </div> */}
=======
      </div>
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
      <div className="links">
        <div className="icon li">
          <a
            href="https://www.linkedin.com/in/vijay-kinnera-94a3bb216/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaLinkedin />
          </a>
        </div>
        <div className="icon git">
          <a
            href="https://github.com/vijayusj"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div className="icon insta">
          <a
            href="https://www.instagram.com/vijay__tsm/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="icon leet">
          <a
            href="https://leetcode.com/Vijay_kinnera/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
