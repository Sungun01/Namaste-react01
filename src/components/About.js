import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props) {
        super(props);

        // console.log("Parent constructor");
    }
    
    componentDidMount (){
        // console.log("Parent component did mount")
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About Us</h1>
                <div>
                   <span>Logged In User: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => 
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        }</UserContext.Consumer></span>
                </div>
            <h2>Trying to clone the UI of Swiggy.com</h2>

            <UserClass name ={"Gurunath Madiwalar (classbased)"} location ={"karnataka class"}/>
        </div>
    )
}
}


export default About;