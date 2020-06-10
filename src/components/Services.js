import React,{useState} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaBeer, FaShuttleVan} from 'react-icons/fa';




const Services = () => {
    const [{services}] = useState({     /* ===> DESTRUCT services */
        services:[
            {
                icon:<FaCocktail fontSize="4rem"/>,
                title:'Free cocktails',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaHiking fontSize="4rem"/>,
                title:'Endless Hiking',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaShuttleVan fontSize="4rem"/>,
                title:'Free shuttle',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaBeer fontSize="4rem"/>,
                title:'Strongest Beer',
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
