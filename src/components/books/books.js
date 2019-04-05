import React, {Component} from 'react'
import Book from './book/book'

class Books extends Component{

    render(){
        return( 
            <div className='container my-3'>       
                {this.props.books.map(book => {
                return(
                    <div>
                        <Book changeHandler={this.props.changeHandler} deleteHandler={this.props.deleteHandler} book={book}/>             
                    </div>
                    )
                })}
            </div>
        )
    }


}

export default Books