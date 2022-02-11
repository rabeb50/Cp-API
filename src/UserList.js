import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'
const UserList = () => {
    const [listOfUSer,setListOfUSer]=useState([]);
    
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setListOfUSer(res.data);
    } catch (err) {
      console.log("Error", err);
    }
  };
    useEffect(() => {
        
        
            getUsers();
        
    }, [])
    return (
       <div className='row'>
           { listOfUSer.map(el=>
       <div className="col-md-4 my-3">
           <Card bg="secondary" text="white" style={{ width: '22rem',marginTop:'1.5rem' }} key={el.id}>
           <Card.Body>
             <Card.Title><h3> Name : {el.name}</h3></Card.Title>
             <Card.Title><h4>User Name : {el.username}</h4></Card.Title>
             <Card.Title><h5>E-mail : {el.email}</h5></Card.Title>
             <Card.Body>
           
              <p>{`Adresse : ${el.address.street} ${el.address.suite} ${el.address.city}`}</p>
              <p>Phone : {el.phone}</p>
              <p>website : {el.website}</p>
              <p>company : {el.company.name}</p>

             </Card.Body>
             <Button variant="danger">More Details</Button>
           </Card.Body>
         </Card>
         </div>
        )}</div>
            
           
    )
}

export default UserList
