import React,{Component} from 'react'
import '../MovieStyles.css'

class DisplayAll extends Component{

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
            <p>Display All Movies</p>
           {this.state.isActive ? <p>Star Wars,Saving Private Ryan,Forest Gump</p> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default DisplayAll;