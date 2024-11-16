import React,{Component} from 'react'
import '../MovieStyles.css'

class StarWars extends Component{

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
            <h3>Star Wars</h3>
           {this.state.isActive ? <h4>Debuted in 1977 by George Lucas</h4> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default StarWars;