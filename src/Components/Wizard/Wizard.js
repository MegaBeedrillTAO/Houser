import React, {Component} from 'react';
import AddNewListing from './AddNewListing';
import ListingForm from './ListingForm';

class Wizard extends Component{

    render(){
        return(
            <div className='wiz-dash'>
                <AddNewListing/>
                <ListingForm/>
            </div>
        )
    }
}

export default Wizard;