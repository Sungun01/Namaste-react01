import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "default",
                
            }
        };
        // console.log("Child constructor");
    }

    async componentDidMount (){
        // console.log("Child component did mount")

        const data = await fetch ("https://api.github.com/users/Sungun01");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        // console.log(json);   
    }

    componentDidUpdate() {
        // console.log("Component did update");
    }

    componentWillUnmount() {
        // console.log("Component will unmount");
    }


    render() {
        
        const {name, location, bio, avatar_url} = this.state.userInfo;

        // const {name, location} = this.props;

        // console.log("Child render");

        return (
            <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name} </h2>
            <h3>Location: {location}</h3>
            <h4>Bio: {bio}</h4>
        </div>
        );
    };
};

export default UserClass;