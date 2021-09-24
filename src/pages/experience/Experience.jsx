import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Config from '../../../config';

const generateEducationTimeline = (data) => (
  <TimelineEvent
    title={data.location}
    titleStyle={{ fontSize: '12pt', fontWeight: 'bold' }}
    subtitle={data.title}
    subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
    createdAt={data.date}
    style={{ fontSize: '12pt', fontWeight: '300' }}
    // icon={<FA name={data.icon} />}
    iconStyle={{ cursor: 'default' }}
    key={data.title}
  />
);

const generateWorkTimeline = (data) => (
  <TimelineEvent
    title={data.company}
    titleStyle={{ fontSize: '12pt', fontWeight: 'bold' }}
    subtitle={`${data.position} - ${data.team}`}
    subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
    createdAt={data.date}
    style={{ fontSize: '12pt', fontWeight: '300' }}
    // icon={<FA name={data.icon} />}
    iconStyle={{ cursor: 'default' }}
    contentStyle={{
      'padding': '0em 0em',
      'boxShadow': 'none',
      'line-height': '1.8',
      'margin': '0 0'
    }}
    key={data.company}
  >
    <ul>
      {
        (data.work).map(item => {
          return (
            <li key={item}>{item}</li>
          );
        })
      }
    </ul>
  </TimelineEvent>
);

const previousEducationTimeLine = Config.education.slice(0,
  Config.education.length - 1);
const lastEducationTimeLine = Config.education.slice(
  Config.education.length - 1);

const previousWorkTimeLine = Config.experience.slice(0,
  Config.experience.length - 1);
const lastWorkTimeLine = Config.experience.slice(
  Config.experience.length - 1);

const Experience = () => (
  <div style={{ marginTop: '0.8rem' }}>
    <>
      <h2 style={{ marginBottom: '0rem' }}>Experience</h2>
      {Config.experience.length > 1 && (
        <Timeline lineStyle={{ top: '20px' }}>
          {previousWorkTimeLine.map(generateWorkTimeline)}
        </Timeline>
      )}
      {Config.experience.length > 0 && (
        <Timeline lineStyle={{ display: 'none' }}
                  style={{ top: '-30px' }}>
          {lastWorkTimeLine.map(generateWorkTimeline)}
        </Timeline>
      )}
    </>
    <>
      <h2 style={{ marginBottom: '0rem' }}>Education</h2>
      {Config.education.length > 1 && (
        <Timeline lineStyle={{ top: '20px' }}>
          {previousEducationTimeLine.map(generateEducationTimeline)}
        </Timeline>
      )}
      {Config.education.length > 0 && (
        <Timeline lineStyle={{ display: 'none' }}
                  style={{ top: '-30px' }}>
          {lastEducationTimeLine.map(generateEducationTimeline)}
        </Timeline>
      )}
    </>

  </div>
);

export default Experience;
