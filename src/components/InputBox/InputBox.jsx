import React, { Component } from 'react';

class InputBox extends Component {
    state = {
        enteredvalue:""
    }

    handleOnChange=(e)=>{
        let val=e.target.value;
        this.setState({enteredvalue:val});
    }
    
    handleClick=(e)=>{
        this.props.addtodos(this.state.enteredvalue);
        this.setState({
            enteredvalue:""
        })
    };
    render() {
        return (
            <div className="d-flex container">
                <input className="form-control" type="text" onChange={this.handleOnChange} value={this.state.enteredvalue}></input>
                <button className="btn btn-success" onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default InputBox;