import React, { useState, useEffect } from 'react';
import Carouselimg1 from "../photos/cat-images/test.jpeg";
import Footer from '../components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('http://localhost:4001/users')
      .then((res) => res.json())
      .then((responseData) => setData(responseData))
      .catch((err) => console.log(err));
  }, []);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedData = data.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className='page'>
      <div className='gridBox'>
      <img src={Carouselimg1} alt="Description of your image" />
      <h2>Ready to adopt? Pick your new feline friend below!</h2>
      <div className="filter-options">
        <select onChange={handleSortChange}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      </div>
      <div className='gridBox'>
<div className='productsContainer'>
   
        {sortedData.map((d, i) => (
         
          <div key={i} className='catItem'>
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    {<img className='productImage' src={d.image_url} alt={`Image for ${d.cat_id}`} />}
                  </td>
                </tr>
                <tr>
                  <td><strong>Name:</strong></td>
                </tr>
                <tr>
                  <td>{d.name}</td>
                </tr>
                <tr>
                  <td><strong>Description:</strong></td>
                </tr>
                <tr>
                  <td>{d.description}</td>
                </tr>
                <tr>
                  <td><strong>Price:</strong></td>
                </tr>
                <tr>
                  <td>{d.price}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          
        ))}
      </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default App;
