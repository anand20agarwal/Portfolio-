import React from 'react';
import './styles.scss';
import PageHeaderContent from "../../components/pageHeaderContent"; // ✅ Capitalized import
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";


function About() {
  const personalDeatils= [
    {
      label: "Name",
      value: "Anand Agarwal"
    },
    {
      label: "Age",
      value: "25"
    },
    {
      label: "Address",
      value: "Bangalore"
    },
    {
      label: "Email",
      value: "anandagarwaljob@gmail.com"
    },
    {
      label: "Contact No",
      value: "+91 8892145195"
    },
  ];

  const jobSummery = "Hi, I'm Anand Agarwal, an enthusiastic MCA graduate from T John College with a strong passion for frontend web development. I specialize in React.js, building modern, responsive, and user-friendly interfaces. I enjoy solving coding challenges and continuously improving my skills in Java and modern web technologies. Currently, I am working on frontend projects and deploying them using Render. I am eager to collaborate on exciting projects and contribute to innovative solutions in the tech industry. I am always open to new opportunities where I can grow as a developer and make a meaningful impact. Let's connect and build something amazing together! 🚀";
  
  return (
    <section id="about" className='about'>
      <PageHeaderContent // ✅ Capitalized component name
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>    <Animate
             play
             duration={1.5}
             delay={1}
              start ={{
                transform:'translateX(-900px)',
              }}
              end ={{
                transform:'translatex(0px)',
              }}
             
             >
        <h3> MCA Graduate</h3>
        <p>{jobSummery}</p>
        </Animate>
        <Animate
             play
             duration={1.5}
             delay={1}
              start ={{
                transform:'translateX(500px)',
              }}
              end ={{
                transform:'translatex(0px)',
              }}
             
             >
        <h3 className='personalInformationheaderText'>Personal Information</h3>
        <ul>
          {
            personalDeatils.map((item,i)=>(
              <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate></div>
        <div className='about__content__servicesWrapper'>
        <Animate
             play
             duration={1.5}
             delay={1}
              start ={{
                transform:'translateX(600px)',
              }}
              end ={{
                transform:'translatex(0px)',
              }}
             >
          <div className='about__content__servicesWrapper__innerContent'>
          <div>
            <FaHtml5  size={60} color='var(--yellow-theme-main-color)'/>
           </div>
           <div>
           <FaCss3Alt  size={60} color='var(--yellow-theme-main-color)'/>
           </div>
           <div>
           <FaJs  size={60} color='var(--yellow-theme-main-color)'/>
           </div>
           <div>
           <FaReact  size={60} color='var(--yellow-theme-main-color)'/>
           </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
