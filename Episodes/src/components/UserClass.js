import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Component constructor.");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Default Location",
        avatar_url: "https://picsum.photos/460/460",
      },
    };
  }
  async componentDidMount() {
    console.log("Component Did Mount");

    // console.log(this.props.name + "Child Component did Mount");
    const data = await fetch("https://api.github.com/users/AmanRelan");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Update Cycle finishes.");
  }

  componentWillUnmount() {
    console.log("UNMOUNTING");
  }
  render() {
    console.log("Component render.");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="p-4 m-4 bg-gray-50 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: linkedin.com/aman-relan</h4>
      </div>
    );
  }
}

export default UserClass;
