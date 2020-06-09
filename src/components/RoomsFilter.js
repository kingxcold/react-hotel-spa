import React,{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';


const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakFast,pets} = context;

    const getUnique = (items,value) =>{
        return [...new Set(items.map(item=>item[value]))];
    }
    
    let types = getUnique(rooms,'type');
    types = ['all',...types];
    types = types.map((item,index)=>(
        <option value={item} key={index}>{item}</option>
    ));

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>(
        <option value={item} key={index}>{item}</option>
    ))

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>

                <div className="form-group">

                    <div className="single-extra">
                        <input type="checkbox" name="breakFast" id="label" checked={breakFast} onChange={handleChange}/>
                        <label htmlFor="breakFast">breakFast</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="label" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>

                </div>

                    

            </form>
        </section>
    )
}

export default RoomsFilter
