import React from 'react';

class ListingImage extends React.Component{
    constructor(){
        super();
        this.state = {
            img: ''
        }
    }
    render(){
        return(
            <div>
                <h5>Image Url</h5>
                <input/>
            </div>
        )
    }
}
export default ListingImage;