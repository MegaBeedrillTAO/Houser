import React, {Component} from 'react';
import Axios from 'axios';

class House extends Component{
    
    deleteHouse = () =>{
        const {id} = this.props;
        Axios.delete(`/api/houses/${id}`)
        .then(response => {
            this.props.updateState(response.data);
        })
    }

    render(){
        const {name, address, city, state, zip} = this.props;
        return(
            <div className = 'house-div'>
                <section>
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zipcode: {zip}</p>
                </section>
                <button onClick={this.deleteHouse}>X</button>
            </div> 
        )
    }
}

export default House;