import React,{Component} from 'react'
import axios from 'axios'

class AddPost extends Component{
   
        state={
          title:'',
          body:'' ,
          userId:'11'           
        }
        changeHandler = event => {
            this.setState({
                [event.target.name]:event.target.value
            })

        }
        submitHandler = event => {
            event.preventDefault()
            axios.post(`${BASE_URL}/posts`,this.state)
                 .then()
                 .catch(error => console.log(error))
        }

    render(){

        return(
         
            <div className='container'>
            <div className='row'> 
            <div className='col-md-6 offset-sm-2'>       
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label htmlFor='name'>Title:</label>
                    <input onChange={this.changeHandler} type='text' name='name' id='name' className='form-control' placeholder='Enter title' value={this.state.title}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Description</label>
                    <textarea onChange={this.changeHandler} type='text' name='body' id='body' className='form-control' placeholder='Enter description' value={this.state.body}/>
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
            </div>
            </div>
            </div>

        );
    }
} 
export default AddPost