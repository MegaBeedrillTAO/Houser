import React from 'react';

class ListingRent extends React.Component{
    constructor(){
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    render(){
        return(
            <div>
                <h5>Monthly Mortgage Amount</h5>
                <input/>
                <h5>Desired Monthly Rent</h5>
                <input/>
            </div>
        )
    }
}
export default ListingRent;