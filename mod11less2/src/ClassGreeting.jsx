import{ Component } from "react";
import './styles.css';
class ClassGreeting extends Component{
    constructor(){
        super()
        this.state={
            name: "Alex"
        }
        this.changeName=this.changeName.bind(this)
    }
        changeName(){
            this.setState({name: "Charlie"})
        }
    
        render(){
            const name=this.state.name;

            return(
                <div>
                <p className='greeting'>Name Change: {name}</p>
            <button onClick = {this.changeName}>ChangeName</button>
                </div>
            )
        }
    }
    export default ClassGreeting;
