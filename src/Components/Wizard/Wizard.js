import React, {Component} from 'react';
import AddNewListing from './AddNewListing';
import ListingForm from './ListingForm';
import ListingImage from './ListingImage';
import ListingRent from './ListingRent';
import {Route} from 'react-router-dom';

class Wizard extends Component{

    render(){
        return(
            <div className='wiz-dash'>
                <AddNewListing/>
                <Route path ='/wizard/step1' component={ListingForm}/>
                <Route path ='/wizard/step2'component={ListingImage}/>
                <Route path ='/wizard/step3' component={ListingRent}/>
            </div>
        )
    }
}

export default Wizard;