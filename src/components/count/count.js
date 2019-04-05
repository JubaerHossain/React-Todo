import React, {Component} from 'react'

class Count extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : 10,
            color :'black'
        }

    }
    decrease = () => {
        this.setState({
            name : this.state.name - 1
        })
        if (this.state.name <= 5) {
            this.setState({
                color : 'red'
            })
            
        } else if(this.state.name >= 15) {
            this.setState({
                color : 'green'
            })
        }
        else
        this.setState({
            color : 'black'

        })
    }
    increase = () => {
        this.setState({
            name : this.state.name + 1
        })
        if (this.state.name < 5) {
            this.setState({
                color : 'red'
            })
            
        } else if(this.state.name > 15) {
            this.setState({
                color : 'green'
            })
        }
        else
        this.setState({
            color : 'black'

        })
    }



    render(){
               
        return(
            <div>
            <h1 style={{color:this.state.color}}>
                <button onClick={this.decrease}> - </button>
                {this.state.name}
                <button onClick={this.increase}> + </button></h1>
            </div>
        )
    }


}

export default Count