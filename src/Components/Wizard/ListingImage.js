import React from 'react';
import {Link} from 'react-router-dom';
import store, {STEP_TWO} from '../../store';

class ListingImage extends React.Component{
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            img: reduxState.img
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({img: reduxState.img})
        })
    }
    render(){
        return(
            <div>
                <h5>Image Url</h5>
                <input/>
                <section className='buttons'>
                   <Link to='/wizard/step1'><button>Previous</button></Link> 
                   <Link to='/wizard/step3'><button>Next</button></Link> 
                </section>
            </div>
        )
    }
}
export default ListingImage;