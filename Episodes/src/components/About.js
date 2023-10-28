import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h3>This is Namaste React web series.</h3>
        {/* <User
        name={"Aman Relan(Functional Component)"}
        location={"Sonipat, Haryana Functional"}
      /> */}
        <UserClass
          name={"Aman Relan(Class Component)"}
          location={"Sonipat, Haryana Class"}
        />
      </div>
    );
  }
}

export default About;
