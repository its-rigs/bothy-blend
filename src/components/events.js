import * as React from 'react';

const Event = ({ image, details }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img alt={image.alt} src={image.src} />
      </div>
      <div className="event-content">
        <h2>{details.name}</h2>
        <ul>
          <li>{details.where}</li>
          <li>{details.when}</li>
          <li>{details.desciption}</li>
        </ul>
      </div>
    </div>
  );
};

export const Events = () => {
  return (
    <section id="events">
      <div className="container">
        <h1>Events</h1>
        <div className="layout">
          <Event
            image={{ alt: 'test', src: 'test' }}
            details={{
              name: 'Event 1',
              where: 'Scotland',
              when: 'In the future',
              desciption: 'Some event hosted by people',
            }}
          />
          <Event
            image={{ alt: 'test', src: 'test' }}
            details={{
              name: 'Event 2',
              where: 'Scotland',
              when: 'In the future',
              desciption: 'Some event hosted by people',
            }}
          />
          <Event
            image={{ alt: 'test', src: 'test' }}
            details={{
              name: 'Event 3',
              where: 'Scotland',
              when: 'In the future',
              desciption: 'Some event hosted by people',
            }}
          />
          <Event
            image={{ alt: 'test', src: 'test' }}
            details={{
              name: 'Event 4',
              where: 'Scotland',
              when: 'In the future',
              desciption: 'Some event hosted by people',
            }}
          />
          <Event
            image={{ alt: 'test', src: 'test' }}
            details={{
              name: 'Event 5',
              where: 'Scotland',
              when: 'In the future',
              desciption: 'Some event hosted by people',
            }}
          />
        </div>
      </div>
    </section>
  );
};
