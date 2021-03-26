
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    text: '',
    list: [],
    disabled: true,
  }

  onAddText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onAddToList = () => {
    if (this.state.text) {
      this.setState(prevState => ({
        list: prevState.list.concat(prevState.text),
        text:''
      }));
    }
  }

  onDelete = (index) => {
    this.state.list.splice(index, 1);
    this.setState(prevState => ({
      list: prevState.list
    }));
  }


  render(){
    return(
      <div className="todo">
        <h1>To Do List</h1>
        <div className="input-wrapper">
        <input type="text" value={this.state.text} onChange={this.onAddText} disabled={!this.state.disabled} placeholder="Add a text"/>
        <button onClick={this.onAddToList}>Add</button>
        </div>
        
        <ul>
          {
            this.state.list.filter(item => item.includes(this.state.text)).map((item,index)=>{
              return (
                <li key={index}>
                  <span>{item}</span>
                  <button onClick={()=>this.onDelete(index)}> Delete</button>

                </li>
              )
            })
          }
          </ul>

      </div>
    )
  }
}

export default App;





