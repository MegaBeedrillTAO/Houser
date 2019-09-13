import React, {Component} from 'react';
import Dashtop from './Dashtop';
import House from '../House/House';
import Axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }
    updateState = (value) => {
        this.setState({houses: value})
    }
    componentDidMount(){
        Axios.get('/api/houses') 
        .then(response => {
           this.updateState(response.data);
            console.log(this.state.houses);
        })
        .catch(err => console.log(err));
    }
    render(){
        let houses = this.state.houses.map((el) =>(
            <House
            key = {el.id}
            name = {el.name}
            address  ={el.address}
            city = {el.city}
            state = {el.state}
            zip = {el.zip}
            id = {el.id}
            updateState = {this.updateState}
            />
        ))
        return(
            <div className='wiz-dash'>
                <Dashtop/>
                {houses}
            </div>
        )
    }
}

export default Dashboard;