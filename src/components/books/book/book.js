import React, {Component} from 'react'
class Books extends Component{

    state={
        edit:false
    }
    changeValue = (event) => {
        console.log(event.key);
        
        if(event.key === 'Enter'){
        this.setState({
            edit:false
        })
      }
    }  

    render(){
        let output =this.state.edit? (
            <input type="text" placeholder="enter name" 
             value={this.props.book.name} 
             onChange={e => this.props.changeHandler(e.target.value,this.props.book.id)}
             onKeyPress = {this.changeValue}/>
        ):
        (
            <p>{this.props.book.name}</p>
        );
        
        
        
        return(
            <li className='list-group-item d-flex'>
            {output}
            <span className='ml-auto'>{this.props.book.price}</span>
            <div className='mx-4'>
               
                <span className='mx-2' style={{cursor:'pointer'}}
                onClick={ () => this.props.deleteHandler(this.props.book.id)}>
                delete
                </span>
                <span className='mx-2' style={{cursor:'pointer'}}
                onClick={ () => this.setState({ edit:true})}>
                edit
                </span>
            </div>
            </li>
        )
    }


}

export default Books