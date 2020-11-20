import { Component } from "react";
import axios from "axios";
export default class ToDos extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataLoading: "",
            array: []
        }
    }
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(result =>{
            this.setState({dataLoading: result.data})
        })
    }
    valueOutput = (input) =>{ 
        input.preventDefault()
        this.setState({array: []})
        if(input.target[0].value > 0){
            this.state.dataLoading.forEach((item)=>{
                if(item.userId == input.target[0].value){
                    this.setState(state =>{
                        const array = [...state.array,{userId: item.userId, id: item.id}]
                        
                            return{
                                array
                            }
                        
                    })
                }
            })
        }
        console.log(this.state.array)
    }
  
    
    render(){
        return(
            <div>
                <form onSubmit={this.valueOutput}>
                <label>
                <input></input>
                </label>
                <button>Submit</button>
                </form>
            
            {
                this.state.array.map((item)=>
                    <p>
                    userid: {item.userId}, id: {item.id}
                    </p>
                    
                )
            }
            </div>
        )
    }
  
}




  