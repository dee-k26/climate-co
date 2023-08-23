import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Diagnosis',
    description: 'Streamline property management with our expert HVAC diagnosis and repair services. Our proficient technicians promptly identify appliance issues, offering effective solutions that maintain rental properties in optimal condition, ensuring tenant satisfaction and regulatory compliance.',
    price: '$165'
  },
  {
    id: 2,
    title: 'Servicing',
    description: 'Enhance tenant comfort and property value through our thorough HVAC appliance servicing. Our adept team ensures heating and cooling systems operate flawlessly, extending the longevity of appliances and reducing tenant turnover.',
    price: '$181.50'
  },
  {
    id: 3,
    title: 'Gas Safety Check',
    description: 'Prioritize tenant safety with our comprehensive gas safety checks, aligned with tenancy regulations. We meticulously assess gas systems, providing rental providers peace of mind while adhering to legal requirements.',
    price: '$302'
  },
  {
    id: 4,
    title: 'Electrical Safety Check',
    description: 'Maintain secure rental properties with our meticulous electrical safety checks. Our certified technicians examine electrical systems, promoting tenant well-being and fulfilling obligations outlined in the tenancy act.',
    price: '$275'
  },
  {
    id: 5,
    title: 'Smoke Detector Check',
    description: 'Ensure tenant security with our detailed smoke detector checks. We confirm the functionality of smoke detectors, demonstrating your commitment to tenant safety and fulfilling regulatory mandates.',
    price: '$99'
  },
  {
    id: 6,
    title: 'Installation',
    description: 'Upgrade property efficiency and tenant satisfaction through our HVAC appliance installation services. From modern systems to energy-efficient units, our skilled team seamlessly integrates appliances, improving property desirability and tenant comfort.',
    price: 'POA'
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