import React, { Component } from 'react';
import Child from './child';
import request from '../utils/request';

class Parent extends React.Component {
    state = {
        value:""
    }
    clickHandler = (data) => { 
        this.setState({
            value:data
        })
    }
    componentDidUpdate() { 
        request({
            method: "GET",
            url: "login",
            data: {
                username: "argo",
                password:"123456"
            }
        })
    }
    render() { 
        return ( 
            <div>
                Parent:{ this.state.value}
                <Child title="我是儿子" onEvent={ this.clickHandler}/>
            </div>
         );
    }
    
}

export default Parent;