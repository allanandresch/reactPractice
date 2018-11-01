import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Create a header with a link inside and
// render it to the page

const header = (
  <h1>
    <a href="#react">Header</a>
  </h1>
);

const Practice2 = () => {
  /*
    1. Create post object with an id and title
  */
  const post = {
    id: 1,
    title: "React"
  };
  return (
    <div className="practice">
      {/* 
        2. Call the Post component below
        3. Pass in the post object as a prop
      */}
      <Post post={post} />
    </div>
  );
};

/*
  4. Make the Post component accept props
  5. Have Post component rendr the post title and ID to the page
*/
const Post = ({ post: { id, title } }) => {
  return (
    <p>
      Render post {title} and {id} here
    </p>
  );
};

/*
  1. Create a functional component called Header
  2. Return an <h2> with the value of text from props.text
*/

const Header = props => <h2>{props.text}</h2>;

/*
  3. Create a functional component called Button
  4. Return an <button> with the value for onCLick set 
      to props.onClick and the value of the Button text
      set to props.text      
*/

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

class Practice4 extends React.Component {
  /*
    5. Setup state with a count property set to 0
  */
  state = {
    count: 0
  };

  /*
    6. Create an incremenent function that adds one to the value of count in state
    7. Create a decremenent function that subtracts one from the value of count in state
    8. Create a reset function that sets the value of count in state back to 0
  */
  increment = event => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = event => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = event => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        {/*
          9. Call Header and pass in the counter state as the text prop
          10. Call Button with onClick set to decrement and text "-"
          11. Call Button with onClick set to increment and text "+"
          12. Call Button with onClick set to reset and text "Reset"
        */}
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="0" />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Practice4 />, rootElement);
