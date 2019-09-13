import React from 'react';
import {Link} from 'react-router-dom';
function AddNewListing(){
    return(
        <div className='dash_top'>
            <h2>Add New Listing</h2>
            <Link to='/'><button>Cancel</button></Link>
        </div>
    )
}
export default AddNewListing;