import React,{Component} from 'react'
import '../MovieStyles.css'

class Ryan extends Component{

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <div>
            <h3>Saving Private Ryan</h3>
           {this.state.isActive ? <h4>Debuted in 1988 by Steven Speiburg</h4> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default Ryan;