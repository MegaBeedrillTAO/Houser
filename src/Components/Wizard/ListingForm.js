import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ListingForm extends Component{

    constructor(){
        super()
        this.state = {
            name: '',
            city: '',
            address: '',
            state: '',
            zip: 0
        }
    }
    handleName = (e) =>{
        this.setState({name: e.target.value});    
    }
    handleAddress = (e) =>{
        this.setState({address: e.target.value});
    }
    handleCity = (e) =>{
        this.setState({city: e.target.value});    
    }
    handleState = (e) =>{
        this.setState({state: e.target.value});    
    }
    handleZip = (e) =>{
        this.setState({zip: e.target.value});    
    }
    addHouse = () =>{
        const {name, address, city, state, zip} = this.state;
        Axios.post('/api/houses', {
            name,
            address,
            city,
            state,
            zip
        })
    }
    render(){
        return(
            <div>
                <section>
                    <h5>Property Name</h5>
                    <input onChange={this.handleName}/>
                </section>
                <section>
                    <h5>Address</h5>
                    <input onChange={this.handleAddress}/>
                </section>
                <section>
                    <main>
                        <h5>City</h5>
                        <input onChange={this.handleCity}/>
                    </main>
                    <main>
                        <h5>State</h5>
                        <input onChange={this.handleState}/>
                    </main>
                    <main>
                        <h5>Zipcode</h5>
                        <input type='number' onChange={this.handleZip}/>
                    </main>
                </section>

                <Link to ='/'><button onClick={this.addHouse}>Complete</button></Link>
            </div>
        )
    }
}

export default ListingForm;