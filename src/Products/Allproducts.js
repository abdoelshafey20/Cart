import React, { Component } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
class Allproducts extends Component {
  state = { products: [] }
  componentDidMount(){
    axios.get('/js/api.json')
      .then((result)=>{
        this.setState(
          { products: result.data.products }
        )
      }
      )
  }


  render() {

    return (
      <div>
        <Navbar />
        <div className='container mt-5 pt-5'>
          <div className='row'>
            {this.state.products.map((item)=>
              <div className='col-md-4 text-center mb-3'>
                <img src={item.images[0]} className='img-fluid' style={{ height: "350px" }}></img>
                <h2> {item.title}</h2>
                <h5> {item.description}</h5>
                <h5> {item.price}$</h5>
                
              </div>)};

          </div>
        </div>
      </div>
    )
  }
}



export default Allproducts