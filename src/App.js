// import logo from './logo.svg';
import React from "react";
import PropTypes from "prop-types";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css';
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
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click Me
        </button>
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
      setCounter: 0,
    }));
  }
  render() {
    return (
      <div className="flex">
        <button className="btn btn-primary" onClick={this.decrCount}>
          Decr Count
        </button>
        <h3>Current Count: {this.state.setCounter}</h3>
        <button className="btn btn-primary" onClick={this.incrCount}>
          Incr Count
        </button>
        <button className="btn btn-primary" onClick={this.resetCount}>
          Reset
        </button>
      </div>
    );
  }
}

class MyToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
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
    const b = document.getElementById("myBtn");
    this.setState({
      visibility: !this.state.visibility,
    });
    if (this.state.visibility) {
      x.innerHTML = "Now you see me!";
      b.innerHTML = "Hide";
    } else {
      x.innerHTML = "";
      b.innerHTML = "Show";
    }
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          id="myBtn"
          onClick={this.toggleVisibility}
        >
          Show
        </button>
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
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    const val = event.target.value;
    this.setState((state) => ({
      input: val,
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        {/* <input type={"text"} onChange={this.handleChange} value={this.state.input} /> */}
        <label htmlFor="testarea">Provide your inputs here:</label> <br />
        <textarea
          name="testarea"
          wrap="hard"
          id=""
          cols="30"
          rows="10"
          onChange={this.handleChange}
        ></textarea>
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Change code below this line
    this.setState((state) => ({
      submit: state.input,
    }));
    event.preventDefault(); // Prevent refresh of page after submit.
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
          <p>
            <button className="btn btn-primary" type="submit">
              Submit!
            </button>
          </p>
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
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

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
}

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
    console.log("Should I update?");
    // Change code below this line
    if (nextProps.value % 2 == 0) return true;
    else return false;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.addValue}>
          Add
        </button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      answer: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.giveAnswer = this.giveAnswer.bind(this);
  }
  handleChange(event) {
    console.log("Inside handleChange");
    this.setState({
      input: event.target.value,
    });
  }

  giveAnswer() {
    console.log("inside giveAnswer");
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];
    const randomIndex = Math.floor(Math.random() * 20);

    this.setState({
      answer: possibleAnswers[randomIndex],
      input: "",
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="qtn">Ask your question here:</label>
        <input
          id="qtn"
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: 6 }}
            onClick={this.giveAnswer}
          >
            Answer Please!
          </button>
        </p>
        <h4>Answer:</h4>
        <p>{this.state.answer}</p>
      </div>
    );
  }
}

const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: "",
      userAge: "",
    };
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = (
      <button className="btn btn-primary" onClick={this.submit}>
        Submit
      </button>
    );
    const buttonTwo = (
      <button className="btn btn-primary">You May Enter</button>
    );
    const buttonThree = (
      <button className="btn btn-primary">You Shall Not Pass</button>
    );
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        {!this.state.userAge
          ? buttonOne
          : this.state.userAge < 18
          ? buttonThree
          : buttonTwo}
        {/* Change code above this line */}
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* Change code below this line */
    }
    return this.props.fiftyFifty ? <h1>You Win! </h1> : <h1>You Lose!</h1>;
    {
      /* Change code above this line */
    }
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      winCount: 0,
      looseCount: 0,
      expression: ''
    };
    this.handleClick = this.handleClick.bind(this);
    // this.expression = '';
  }
  handleClick() {
    this.setState((prevState) => {
      // Complete the return statement:
      // console.log(prevState.counter);
      // console.log(this.expression)
      
      var wc = prevState.winCount;
      var lc = prevState.looseCount ;
      var expr =  Math.random() >= 0.5; 

      expr ? wc = wc + 1 : lc = lc + 1;
      return {
        counter: prevState.counter + 1,
        winCount: wc,
        looseCount: lc,
        expression: expr
      };
    });
  }

  render() {
    // this.expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        {/* {console.log(this.expression)} */}
        <Results fiftyFifty={this.state.expression} />
        {/* Change code above this line */}
        {/* {console.log(this.state.counter, this.state.winCount, this.state.looseCount)} */}
        {/* {this.state.expression ? <h1>You Win! </h1> : <h1>You Lose!</h1>} */}
        <p>{"Turn: " + this.state.counter}</p>
        <p>{"Wins: " + this.state.winCount}</p>
        <p>{"Losses: " + this.state.looseCount}</p>
      </div>
    );
  }
}

function App() {
  const navStyles = {
    backgroundColor: "#282c34",
    fontSize: "12px",
    color: "white",
    paddingLeft: 10,
  };

  return (
    <div>
      <header className="navbar bg-primary" style={navStyles}>
        <h3>Learn React!</h3>
      </header>
      <div className="container">
        <div className="row row-cols-2 p-4">
          {/* <TypesOfFood />
        <Calendar />
        <ToDo />
        <Welcome />
        <MyComponent />
        <Counter step={4} />
        <MyToggleButton /> 
        <MyKeyCapture />*/}
          <div className="col border border-primary p-4">
            <ControlledInput />
          </div>
          <div className="col border border-primary p-4">
            <MyForm />
          </div>
          <div className="col border border-primary p-4">
            <MyApp />
          </div>
          <div className="col border border-primary p-4">
            <Controller />
          </div>
          <div className="col border border-primary p-4">
            <MagicEightBall />
          </div>
          <div className="col border border-primary p-4">
            <CheckUserAge />
          </div>
          <div className="col border border-primary p-4">
            <GameOfChance />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
