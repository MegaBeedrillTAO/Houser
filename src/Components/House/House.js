import React, {Component} from 'react';

class House extends Component{

    render(){
        const {name, address, city, state, zipcode} = this.props;
        return(
            <div className = 'house-div'>
                <section>
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zipcode: {zipcode}</p>
                </section>
                <button>X</button>
            </div> 
        )
    }
}

export default House;