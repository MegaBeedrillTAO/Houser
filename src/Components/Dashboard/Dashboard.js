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
    updateState = () => {
        Axios.get('/api/houses') 
        .then(response => {
            this.setState({houses: response.data})
        })
        .catch(err => console.log(err));
    }
    componentDidMount(){
        this.updateState();
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