import React, {Component} from "react"

class CounterClass extends Component{
   constructor(){
    super();
    this.state={count:0
  
    }
   }

increment = () =>{
   this.setState({count:this.state.count+1})
};
 decrement = () => {
    // Only decrement if count is greater than 0
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };


reset = () =>{
   this.setState({count:this.state.count=0})
};


render (){
   return (
      <div className="Card">
        <h2>Class Component </h2>
        <h3>{this.state.count}</h3>

        <div>
         <button  className="btn1" onClick={this.increment}>+</button>
         <button  className="btn2" onClick={this.reset}>Reset</button>
         <button  className="btn3" onClick={this.decrement}>-</button>
        
       
        </div>
      </div>
   );
}
}
export default CounterClass;