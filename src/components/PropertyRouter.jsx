import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from 'react-router-dom'
import App from '../App'
import PropertyForm from './PropertyForm'
  
  const PropertyRouter = () => {
    const padding = {
      padding: 10,
      margin: 10
    }
  
    return (
      <div>
        <div>
          <Link style={padding} to="/">Properties</Link>
          <Link style={padding} to="/properties/add">Add property</Link>
        </div>
  
        <Routes>
          <Route path="/propperties/add" element={<PropertyForm />} />
        </Routes>
      </div>
    )
  }



export default PropertyRouter