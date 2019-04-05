import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddPost from './form/addPost'
class App extends Component {
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({
        posts:response.data
      })
    })
    .catch(error => console.log(error))
  }
 
  
  render() {

        return(
          <div className='App'>
          <AddPost/>
         
          </div>
        );
      }
  
}

export default App;
