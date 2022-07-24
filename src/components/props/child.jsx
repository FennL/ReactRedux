import React, { Component } from "react";

class Child extends React.Component {
    clickHandler = () => { 
        this.props.onEvent("我是父亲");
    }
    render() { 
        return (
    <div>
      Child:{this.props.title} <button onClick={this.clickHandler}>点击我，更新父元素信息</button>
    </div>
  );
    }
    
};

export default Child;
