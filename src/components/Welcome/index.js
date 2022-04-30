import { Component } from "react";  

class Welcome  extends Component {
    render() {
        return(
            <h1> {this.props.greeting}, {this.props.user}</h1>
        )
    }
}

Welcome.defaultProps = {
    user: "Sivaram",
    greeting: "Hello"
}

export default Welcome;