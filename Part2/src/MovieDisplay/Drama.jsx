import React,{Component} from 'react'
import '../MovieStyles.css'

class Drama extends Component{

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
            <p>Drama Movies</p>
           {this.state.isActive ? <p>Saving Private Ryan</p> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
             </div>
      
       )
     
   }
}

export default Drama;