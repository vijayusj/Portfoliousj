import React from 'react';
<<<<<<< HEAD
// import '../sass/_Navigation.scss';
=======
import '../sass/_Navigation.scss';
>>>>>>> f85d29853ae511b45003b4579aeac99fd196788f
const Navigation = () => {
  function click() {
    document.querySelector('.btns').classList.toggle('active');

    console.log('hii');
  }
  return (
    <div className="images">
      <button className="btn" onClick={click}>
        🍎
      </button>

      <div className="btns">
        <div className="img img1">
          <img
            className="link"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="icons"
          />
        </div>
        <div className="img img2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="icons"
          />
        </div>
        <div className="img img3">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            alt="icons"
          />
        </div>
        <div className="img img4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            alt="icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
