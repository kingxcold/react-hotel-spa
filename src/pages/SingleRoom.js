import React,{useContext,useState} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

const SingleRoom = (props) => {
    let {getRoom} = useContext(RoomContext);
    const[data,setData] = useState({
        slug:props.match.params.slug,
        defaultBcg
    });
    const room = getRoom(data.slug);
    if(!room){
        return (
        <div className="error">
            <h3>no such room could be found</h3>
            <Link to ='/' className="btn-primary" >Return Home</Link>
        </div>
        )
    }
    const{name,description,capacity,size,price,extras,breakfast,pets,images} = room;
    const [mainImg,...secondaryImgs] = images;
    return (
        <>
        <StyledHero img={mainImg || defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className='btn-primary'>Back to Rooms</Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {secondaryImgs.map((image,index)=>(
                    <img key={index} src={image} alt={name}/>
                ))}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>max capacity : {capacity > 1 ? `${capacity} people`  : `${capacity} person`}</h6>
                    <h6>{pets ? "pets allowed" : "not pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((extra,index)=>(
                    <li key={index}>{extra}</li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default SingleRoom
