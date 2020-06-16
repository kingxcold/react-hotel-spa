import React,{useState} from 'react';
import Title from './Title';
import {FaCocktail, FaSwimmingPool, FaStar, FaConciergeBell} from 'react-icons/fa';




const Services = () => {
    const [{services}] = useState({     /* ===> DESTRUCT services */
        services:[
            {
                icon:<FaCocktail fontSize="4rem"/>,
                title:'Free cocktails',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaStar fontSize="4rem"/>,
                title:'5 Stars Services',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaSwimmingPool fontSize="4rem"/>,
                title:'Swiming Pool',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaConciergeBell fontSize="4rem"/>,
                title:'Breakfast',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            }
        ]
    });

    return (
        <section className="services">
            <Title title='services'/>
            <div className="services-center">
                {services.map((service,index)=>(
                        <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                ))}
            </div>
        </section>
    )
}

export default Services
