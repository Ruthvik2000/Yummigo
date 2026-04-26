import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userinfo : {
                name: "Sunny",
                loacation: "Default ",
                avatar_utl:"https://dummy.photo.com",
            },
        };
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/Ruthvik2000");
        const json = await data.json(); 

        this.setState({
            userinfo : json,
        });
    }
    componentDidUpdate() {
        // console.log("Parent - UserClass componentDidMount() Called");

    // this.timer = setInterval(() => {
    //   console.log("setInterval Called - Namaste React OP");
    // }, 1000);

    // API Calls (Fetch Data)
    }
    componentWillUnmount() {
     // console.log("Parent - UserClass componentWillUnmount() Called");
    // clearInterval(this.timer);
    }
    render(){
        const {login, loacation, avatar_url} = this.state.userinfo;
        return(
            <div className="user-card">
            <img src={avatar_url} />
            <h1>Name:{login}</h1>
            <h2>Location:{loacation} </h2>
        </div>
        );
    }
}
export default UserClass;