import React, {Component} from 'react'
const initialState = {
    name:"",
    email:"",
    password:"",
    bio:""
}

class Post extends Component{

    constructor(){
           super()
           this.myForm = React.createRef()
    };
    state = {
        ...initialState
    };
    changeHandler=(event) => {
    this.setState({
        [event.target.name]:event.target.value
    })

    };
    submitHandler= (event) => {
        event.preventDefault()

        console.log(this.state);        
        this.setState({
            ...initialState
        })
        
        
    }


    render(){
        return(
            <div className='container'>
            <div className='row'> 
            <div className='col-md-6 offset-sm-2'>       
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={this.changeHandler} type='text' name='name' id='name' className='form-control' placeholder='Enter name' value={this.state.name}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input onChange={this.changeHandler} type='email' name='email' id='email' className='form-control' placeholder='Enter email' value={this.state.email}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input onChange={this.changeHandler} type='password' name='password' id='password' className='form-control' placeholder='Enter password' value={this.state.password}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='bio'>Bio</label>
                    <textarea onChange={this.changeHandler} type='text' name='bio' id='bio' className='form-control' placeholder='Enter bio' value={this.state.bio}/>

                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
            </div>
            </div>
            </div>
        )
    }


}

export default Post