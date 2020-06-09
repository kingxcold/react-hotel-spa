import React,{useState,useEffect} from 'react';
/* import items from './data'; */
import Client from './Contentful';




const RoomContext = React.createContext();


const RoomProvider = (props) => {
    const[data,setData] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize: 0,
        maxSize: 0,
        breakFast: false,
        pets: false,
        counter:0
    });
    const {counter} = data;
    //getData

useEffect(()=>{
    if(counter>0){
        filterRooms();
        return;
    }

    async function getData(){
        try {
            let {items} = await Client.getEntries({content_type:'resort',order:"sys.createdAt"});
            let rooms = formatData(items);
            let featuredRooms = rooms.filter(room=>room.featured === true);
            let maxPrice = Math.max(...rooms.map(item=>item.price));
            let maxSize = Math.max(...rooms.map(item=>item.size));
            setData({...data, rooms, featuredRooms, sortedRooms:rooms, loading:false, price:maxPrice, maxPrice, maxSize});
            
        } catch (err) {
            console.log(err);
        }
    }

    getData();

},[counter]);





const formatData = (items) =>{
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>image.fields.file.url);
            let room = {id,...item.fields,images};
            return room;
        });
        return tempItems;
}

const getRoom = slug =>{
    const tempRooms = [...data.rooms];
    const room = tempRooms.find(room=>{
            return room.slug === slug
    });
    return room;
};


const handleChange = (e) =>{
    const target = e.target;
    const name = e.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value ;

    setData({
    ...data,
    counter:counter + 1,
    [name]:value,
    });
}


const filterRooms = () =>{
    let{rooms, type, capacity, price, minSize, maxSize, breakFast, pets} = data ;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);

    //FILTER BY TYPE
    if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
    }

    //FILTER BY CAPACITY
    if(capacity !== 1) {
        tempRooms = tempRooms.filter(room =>room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter(room => room.price <= price);                              //FILTER BY PRICE
    tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize);       //FILTER BY SIZE

    //FILTER BY BREAKFAST
    if(breakFast){
        tempRooms = tempRooms.filter(room=>room.breakfast === true)   
    }

    //FILTER BY PETS
    if(pets){
        tempRooms = tempRooms.filter(room=>room.pets === true)   
    }
    setData({...data,sortedRooms:tempRooms});
}

    return (
        <RoomContext.Provider value={{...data,getRoom,handleChange}}>
            {props.children}
        </RoomContext.Provider>
    )
};

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext};
