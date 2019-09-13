import React, {Component} from 'react';

class ListingForm extends Component{

    constructor(){
        super()
        this.state = {
            name: '',
            city: '',
            address: '',
            state: '',
            zipcode: 0
        }
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
    handleZipcode = (e) =>{
        this.setState({zipcode: e.target.value});    
    }
    render(){
        return(
            <div>
                <section>
                    <h5>Property Name</h5>
                    <input onChange={this.handleName}/>
                </section>
                <section>
                    <h5>Address</h5>
                    <input onChange={this.handleAddress}/>
                </section>
                <section>
                    <main>
                        <h5>City</h5>
                        <input onChange={this.handleCity}/>
                    </main>
                    <main>
                        <h5>State</h5>
                        <input onChange={this.handleState}/>
                    </main>
                    <main>
                        <h5>Zipcode</h5>
                        <input type='number' onChange={this.handleZipcode}/>
                    </main>
                </section>

                <button>Complete</button>
            </div>
        )
    }
}

export default ListingForm;