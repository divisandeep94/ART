import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {incCounter} from './actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter: 0
    }
    // this.handleClick=this.handleClick.bind(this)
  }
  handleClick (type)  {
    if(type === 'inc') {
          this.props.incCounter(type, this.props.counter)
        }
        else if(type === 'dec') {
          this.props.incCounter(type, this.props.counter)
        }
  }
  
  render() {
    const {counter} = this.props
    return(
      <div>
        <h3>
        My Basic Redux App:
        </h3>
        <h2>It will show the counter increasing and decreasing value :</h2>
        <div>Counter : {counter}</div>
        Want to increase : <button  onClick={()=>this.handleClick('inc')}>increase</button>
        Want to decrease : <button onClick={()=>this.handleClick('dec')}>decrease</button>
      </div>
    )
  }
}


const mapStateToProps = (state) =>   
     { return {counter : state.counter }}   


const mapDispatchToProps = (dispatch) => { 
  return {
    incCounter: function (type, counter) {
      dispatch(incCounter(type, counter))
    }
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)