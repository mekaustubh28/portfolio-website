import React from "react";

class Application extends React.Component{
  constructor(props){
    super(props)
    this.state = {x:"0%", y:"0%"}
  }
  
  _onMouseMove(e){
    this.setState({ x:"" + e.clientX * 100 / window.innerWidth + "%", y:"" + e.clientY * 100 / window.innerHeight + "%" });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div onMouseMove={this._onMouseMove.bind(this)} style={{position:"fixed",width:"100%",height:"100%",zIndex:-9}}>
        <div className="eye">
          <div className="ball" style={{left:x,top:y,transform: "translate(-" + x + ",-" + y + ")" }}>
          </div>
        </div>
      </div>
    )
  }
}

export default Application;