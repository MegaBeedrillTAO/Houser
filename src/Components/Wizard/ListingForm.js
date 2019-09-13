import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import store, {STEP_ONE} from '../../store';

class ListingForm extends Component{

    constructor(){
        super()
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            city: reduxState.city,
            address: reduxState.address,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                city: reduxState.city,
                address: reduxState.address,
                state: reduxState.state,
                zip: reduxState.zip
            });
        })
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
    updateStore = () =>{
        store.dispatch({
            type: STEP_ONE,
            payload: {...this.state}
        })
        
    }
    render(){
        return(
            <div>
                <section>
                    <h5>Property Name</h5>
                    <input onChange={this.handleName} value={this.state.name}/>
                </section>
                <section>
                    <h5>Address</h5>
                    <input onChange={this.handleAddress} value={this.state.address}/>
                </section>
                <section>
                    <main>
                        <h5>City</h5>
                        <input onChange={this.handleCity} value={this.state.city}/>
                    </main>
                    <main>
                        <h5>State</h5>
                        <input onChange={this.handleState} value={this.state.state}/>
                    </main>
                    <main>
                        <h5>Zipcode</h5>
                        <input type='number' onChange={this.handleZip} value={this.state.zip}/>
                    </main>
                </section>

                <section className='buttons'>
                   
                   <Link to='/wizard/step2'><button>Next</button></Link> 
                </section>
            </div>
        )
    }
}

export default ListingForm;