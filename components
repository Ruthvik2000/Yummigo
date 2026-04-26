import UserClass from "./UserClass";
import UserContext from "../utils/Hooks/UserContext";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedIn User:
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>This is About Page</h2>
      <UserClass name={"Ruthvik"} location={"Hyderabad"} />
    </div>
  );
};

export default About;
