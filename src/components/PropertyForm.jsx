import { useState } from 'react'
import propertyService from '../services/properties'

const PropertyForm = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [size, setSize] = useState('')
    const [status, setStatus] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [rooms, setRooms] = useState('')
    const [images, setImages] = useState([])
  
    const handleImageChange = (e) => {
      setImages(e.target.files)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const property = {
        name,
        type,
        size,
        status,
        price,
        location,
        rooms
      };
  
      const formData = new FormData();
      formData.append('property', JSON.stringify(property));
      for (let i = 0; i < images.length; i++) {
        formData.append('files', images[i]);
      }
  
      try {
        const response = await propertyService.create(formData)
        console.log('Response:', response.data)
      } catch (error) {
        console.error('Error uploading data:', error)
      }
    }
  
    return (
      <div>
        <h2>Property Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <input
              type="number"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rooms">Rooms</label>
            <input
              type="number"
              id="rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default PropertyForm;