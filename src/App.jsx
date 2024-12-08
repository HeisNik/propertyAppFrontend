import { useState, useEffect } from 'react'
import './App.css'
import propertyService from './services/properties'
import styled from 'styled-components';
import LoginForm from './components/loginForm';
//import PropertyRouter from './components/PropertyRouter';
import PropertyForm from './components/PropertyForm';

const Image = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  margin: 10px;
`;

const PropertyContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  width: 80%; 
  max-width: 1200px; 
  margin: 0 auto 50px;
`;


const App = () => {
  const [properties, setProperties] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    propertyService
      .getAll()
      .then(initialProperties => {
        setProperties(initialProperties)
      })
  }, [])

  console.log('user', user)

  return (
    <div>
      <h1>Prime Properties</h1>
      {user ?
      <div>
       <h2>Welcome! Now you can add properties.</h2>
       <PropertyForm/>
       </div> 
       : 
       <LoginForm user={user} setUser={setUser}/>
       }
        {properties.map(property =>
          <PropertyContainer key={property.id}>
            <h2>{property.name}</h2>
            <div>Location: {property.location}</div>
            <div>Type of property: {property.type}</div>
            <div>Size: {property.size} m2</div>
            <div>Rooms: {property.rooms}</div>
            <div>Status: {property.status}</div>
            <div>Price: {property.price} €</div>
            {property.images.map(image => 
            <Image key={image.id} src={image.imagePath} alt="property" />
            )}
          </PropertyContainer>
        )}
     
    </div>   
  )
}

export default App
