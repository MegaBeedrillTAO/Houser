import React, {Component} from 'react';

class House extends Component{

    render(){
        const {name, address, city, state, zipcode} = this.props;
        return(
            <div className = 'house-div'>

            </div>
        )
    }
}

export default House;