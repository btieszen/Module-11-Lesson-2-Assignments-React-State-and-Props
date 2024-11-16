import React,{Component} from 'react'
import '../MovieStyles.css'

class RomanticComedy extends Component{

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
            <p>Romantic ComedyMovies</p>
           {this.state.isActive ? <p>Forest Gump</p> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default RomanticComedy;