import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Heating Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    title: 'Cooling Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Maintenance Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="services__title">Services</h2>
      <ul className="services__list">
        {services.map(service => (
          <li key={service.id} className="services__item">
            <h3 className="services__item-title">{service.title}</h3>
            <p className="services__item-description">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
