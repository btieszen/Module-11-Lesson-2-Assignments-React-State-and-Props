import React,{Component} from 'react'
import '../MovieStyles.css'

class Forest extends Component{

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
            <h3>Forest Gump</h3>
           {this.state.isActive ? <h4>Debuted in 1984 by Robert Zemeckis</h4> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default Forest;