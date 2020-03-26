import React from "react";
import { getUserData } from "../../api/DataService";

export class HelloClass extends React.Component {
  state = { userName: null };
  
  componentDidMount() {
    getUserData().then(userName => {
      this.setState({ userName });
    });
  }

  render() {
    const { userName } = this.state;
    if (userName != null) {
      return <span>Cześć {userName}</span>;
    }

    return <span>Cześć</span>;
  }
}
