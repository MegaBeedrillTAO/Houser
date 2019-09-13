import React from 'react';
import {Link} from 'react-router-dom';
import store, {STEP_THREE} from '../../store';

class ListingRent extends React.Component{
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }
    render(){
        return(
            <div>
                <h5>Monthly Mortgage Amount</h5>
                <input/>
                <h5>Desired Monthly Rent</h5>
                <input/>
                <section className='buttons'>
                   <Link to='/wizard/step2'><button>Previous</button></Link> 
                   <Link><button>Complete</button></Link> 
                </section>
            </div>
        )
    }
}
export default ListingRent;