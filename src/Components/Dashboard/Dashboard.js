import React, {Component} from 'react';
import Dashtop from './Dashtop';
import House from '../House/House';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }
    render(){
        let houses = this.state.houses.map((el) =>(
            <House
            key = {el.id}
            name = {el.name}
            address  ={el.address}
            city = {el.city}
            state = {el.state}
            zipcode = {el.zipcode}
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