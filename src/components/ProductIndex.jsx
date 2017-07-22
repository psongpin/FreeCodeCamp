<<<<<<< HEAD
import React, { Component } from "react";
import { fbDatabase } from "../fire";
import ProductItem from "./ProductItem";
import "../styles/productIndex.css";
=======

import React, { Component } from 'react'
import { fbDatabase } from '../fire'
import ProductItem from './ProductItem'
>>>>>>> react-redux-firebase configuration 2


export default class ProductIndex extends Component {
  state = {
    crops: []
  }

  componentWillMount () {
    fbDatabase.ref('crops').on('value', snap => {
      console.log(snap.val())
      this.setState({crops: snap.val()})
      return false
    })
  }

  render () {
    return (
      <div className="ProductIndex">
<<<<<<< HEAD
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                {this.state.crops.map(crop =>
                  <ProductItem key={crop.id} name={crop.name} imgURL={crop.imgURL} quantity={crop.quantity}/>
                )}
              </div>
            </div>
            <div className="col-sm-3">
              Add cart here...
            </div>
          </div>
        </div>
=======
        {this.state.crops.map(crop =>
          <ProductItem
            key={crop.id}
            name={crop.name}
            imgURL={crop.imgURL}
            quantity={crop.quantity}
          />
        )}
>>>>>>> react-redux-firebase configuration 2
      </div>
    )
  }
}
