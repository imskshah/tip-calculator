//import React, {useState} from 'react'
//import { render } from '@testing-library/react'
import React from 'react'
import Output from './Output'

export default class Input extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state = {
        bill: "",
        service: "",
        name: "",
        customerlist: [],
        userlength: "",
        totaltip: ""
    }
}  
   addUser = (event) =>
   {
      this.setState({name:event.target.value})
   }
    
   addService = (event) =>
   {
    this.setState({service:event.target.value})
   }

   addBill = (event) =>
   {
    this.setState({bill:event.target.value})
   }
   
   
  addData=() => {

    this.setState({ customerlist: [...this.state.customerlist, { name: this.state.name, tip: (this.state.service) * (this.state.bill) }] })
    console.log(this.state.customerlist);
  }

  tiptable = () => {
    this.setState({ userlength: this.state.customerlist.length })
    let mytotal = this.state.customerlist.map(item => item.tip).reduce((a, b) => a + b, 0)
    this.setState({ totaltip: mytotal })
  }

  
   render()
   {
    return(
        <>
        <div className="para1">
         <p>Enter your bill amount : </p>

         <div>
            <input type="number" className="inputbill" value={this.state.bill} onChange={this.addBill}></input>
            </div>
            <div className="inputsection">
                <p>Tell us how was the service : </p>
                <select className ="dropdown" id='service' onChange={this.addService}>
                    <option disabled selected value="0">Choose..</option>
                    <option value="0.2">Excellent</option>
                    <option value="0.1">Good</option>
                    <option value="0.05">Bad</option>
                </select>
            </div>

         
            <div>
            <p>Customer Name: </p>
            <input type="text" className="inputbill" placeholder="Write a name.." value ={this.state.name} onChange={this.addUser} ></input>
            </div>
            <div>
            <button className="mybutton" onClick={()=>{this.addData()}}>Add</button>
            </div>
            </div>
            
            <h5>Customer List</h5>
       
            <div className="customerdetails">
           <ul>
              {this.state.customerlist.map(item =>
                 <li>{item.name} offering a tip of {item.tip} rupees.</li>
              
              )}
          </ul>
            
        </div>
        <Output  mytabletip = {this.tiptable}  mylength = {this.state.userlength} mytip = {this.state.totaltip}/>
        
        </>
    )
}

}




       