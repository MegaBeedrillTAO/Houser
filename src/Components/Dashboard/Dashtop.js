import React from 'react';
import {Link} from 'react-router-dom';
function Dashtop(){
    return(
        <div className='dash_top'>
            <h2>Dashboard</h2>
            <Link to='/wizard'><button>Add New Property</button></Link>
        </div>
    )
}
export default Dashtop;