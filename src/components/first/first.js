import React, {Component} from 'react'

class First extends Component{


    render(){
        
        
        return(
            <div>
            <h1>{this.props.name}</h1>
            <p>Web dev at {this.props.email}</p>
            </div>
        )
    }


}

export default First