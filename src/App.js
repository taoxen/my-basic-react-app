// import logo from './logo.svg';
import React from "react";
import PropTypes from "prop-types";
import "./App.css";
// import { render } from "@testing-library/react";

const TypesOfFruit = () => {
  return (
    <div>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Change code below this line */}
      <h2>Fruits:</h2>
      <TypesOfFruit />
      {/* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is: {props.date}</p>
      {/* Change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={new Date("2022-10-01").toString()} />
        {/* Change code above this line */}
      </div>
    );
  }
}

// The following code does not work. At run time it errors
// out saying props undefined. Use this.props
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    );
  }
}

// Stateless functional component
// const ToDoList = (props) => {
//   return (
//         <ul>
//           {
//             props.tasks.map(task => ( <li key={task}>{task}</li> ) )
//           }
//         </ul>
//         )
// }

// Class component (can have state by default)
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <ToDoList tasks={["Walk the dog", "Workout"]} />
        <h2>Tomorrow</h2>
        <ToDoList tasks={["Water plants", "Study React"]} />
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          {" "}
          Hello <strong>{this.props.name}</strong>{" "}
        </p>
      </div>
    );
  }
}

Welcome.defaultProps = { name: "React!" };

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "false",
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    // console.log(this.state.toggle)
    // const bState = this.state.toggle ? 'false' : 'true'
    // console.log(this.state.toggle)
    const msg = this.state.toggle ? "React Rocks!" : "Initial State";
    // console.log(msg)
    this.setState({
      // name: toggle ? 'React Rocks!':'Initial State',
      // toggle: toggle ? false : true
      toggle: !this.state.toggle,
      name: msg,
    });
    // console.log(this.state.toggle)
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  toggle: PropTypes.bool,
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // const counter = 0;
    this.state = {
      // counter: 0,
      setCounter: 0,
    };
    this.incrCount = this.incrCount.bind(this);
    this.decrCount = this.decrCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  incrCount() {
    console.log("Counter " + this.state.setCounter);
    this.setState((state, props) => ({
      // counter: this.state.counter + 1,
      setCounter: state.setCounter + props.step,
    }));
  }

  decrCount() {
    console.log("Counter " + this.state.setCounter);
    this.setState((state, props) => ({
      // counter: this.state.counter - 1,
      setCounter: state.setCounter - props.step,
    }));

    console.log("Counter " + this.state.setCounter);
  }

  resetCount() {
    this.setState((state) => ({
      setCounter: 0
    }))
  }
  render() {
    return (
      <div className="flex">
        <button onClick={this.decrCount}>Decr Count</button>
        <h3>Current Count: {this.state.setCounter}</h3>
        <button onClick={this.incrCount}>Incr Count</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

class MyToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // const txtElem = document.createElement("H1");
    // txtElem.setAttribute("id", "myTxt");
    // Change code above this line
  }

  // Change code below this line
  toggleVisibility() {
    const x = document.getElementById("myTxt");
    const b = document.getElementById("myBtn")
    this.setState({
      visibility: !this.state.visibility
    })
    if (this.state.visibility) {
      x.innerHTML = "Now you see me!"
      b.innerHTML = "Hide"
    } else {
      x.innerHTML = ""
      b.innerHTML = "Show"
    }
  }
  render() {
    return (
      <div>
        <button id="myBtn" onClick={this.toggleVisibility}>Show</button>
        <div id="myDiv">
          <h1 id="myTxt"></h1>
        </div>
      </div>
    );
  }

  // if (this.state.visibility) {
  //   return (
  //     <div>
  //       <button onClick={this.toggleVisibility}>Click Me</button>
  //       <h1>Now you see me!</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <button onClick={this.toggleVisibility}>Click Me</button>
  //     </div>
  //   );
  // }
}

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    const val = event.target.value
    this.setState((state) => ({
      input: val
    }))
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        {/* <input type={"text"} onChange={this.handleChange} value={this.state.input} /> */}
        <label htmlFor="testarea">Provide your inputs here:</label> <br />
        <textarea name="testarea" wrap="hard" id="" cols="30" rows="10" onChange={this.handleChange} ></textarea>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    this.setState((state) => ({
      submit: state.input
    }))
    event.preventDefault() // Prevent refresh of page after submit.
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <label htmlFor="testarea">Provide your inputs here:</label> <br />
          <textarea id="testarea" onChange={this.handleChange}></textarea>
          {/* Change code above this line */}
          <p><button type='submit'>Submit!</button></p>
        </form>
        {/* Change code below this line */}
        <h3>Your Input:</h3>
        <pre>{this.state.submit}</pre>
        {/* Change code above this line */}
      </div>
    );
  }
}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput input={this.state.inputValue}  handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue} />
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

// class MyKeyCapture extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ""
//     };
//     this.handleEnter = this.handleEnter.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }
//   // change code below this line
//   componentDidMount() {
//     document.addEventListener("keydown", this.handleKeyPress);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyPress);
//   }
//   // change code above this line
//   handleEnter() {
//     this.setState((state) => ({
//       message: state.message + 'You pressed the enter key! '
//     }));
//   }
//   handleKeyPress(event) {
//     if (event.keyCode === 13) {
//       this.handleEnter();
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//       </div>
//     );
//   }
// }

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if (nextProps.value % 2 == 0) 
      return true
    else
      return false;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Learn React!</h3>
      </header>
      <div></div>
      <div>
        {/* <TypesOfFood />
        <Calendar />
        <ToDo />
        <Welcome />
        <MyComponent />
        <Counter step={4} />
        <MyToggleButton /> 
        <MyKeyCapture />*/}
        <ControlledInput/>
        <MyForm />
        <MyApp />
        <Controller />
      </div>
    </div>
  );
}

export default App;
