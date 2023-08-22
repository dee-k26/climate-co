import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Diagnosis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$165'
  },
  {
    id: 2,
    title: 'Servicing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$181.50'
  },
  {
    id: 3,
    title: 'Gas Safety Check',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$302'
  },
  {
    id: 4,
    title: 'Electrical Safety Check',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$275'
  },
  {
    id: 5,
    title: 'Smoke Detector Check',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$99'
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
            <p className="services__item-description">
              {service.price}
            </p>
          </li>
        ))}
      </ul>
    </section>
  
  );
};

export default Services;