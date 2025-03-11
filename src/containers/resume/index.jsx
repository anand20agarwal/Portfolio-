import React from 'react';
import './styles.scss';
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from './utils';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa'; // 🎓 Education Icon

function Index() {
  return (
    <section id="resume" className='resume'>
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='timeline'>
        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                }}
                // date="2025 - Present" 
                icon={<FaGraduationCap />} 
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                }}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3>{item.title}</h3>
                    {"--"}
                  <h4>{item.subTitle}</h4>
                </div>
                <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                <p className='vertical-timeline-element-title-wrapper-date'> {item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Index; // ✅ Capitalized component name
