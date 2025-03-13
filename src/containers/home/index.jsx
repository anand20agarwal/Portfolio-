import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {  
  const navigate = useNavigate();

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/15YKbSeKhY8z8q5kBl8un_e7_IA3Rz4Bw/view?usp=sharing", "_blank");
  };

  const handleNavigateToContactMePage = () => {
    navigate("/contact"); 
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Anand Agarwal
          <br />
          MCA Graduate
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateY(550px)',
          }}
          end={{
            transform: 'translateY(0px)',  // Fixed to translateY instead of translateX
          }}
        >
          <div className="home__contact-me">
            <button onClick={handleDownload}>Resume</button>
          </div>
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Home;