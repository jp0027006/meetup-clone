import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home_Into from "./Home_Intro/Home_Intro";
import Events_Near from "./Events_Near/Events_Near";
import UpcomingOnlineEvents from "./UpcomingEvents/UpcomingOnlineEvents"
import JoinMeetUp_Signup from "./JoinMeetUp_Signup/JoinMeetUp_Signup"
import Categories from "./Events_categories/Categories";
import Cities from "./Cities/Cities";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="parent_component">
        <Home_Into />
        <Events_Near />
        <UpcomingOnlineEvents/>
        <JoinMeetUp_Signup/>
        <Categories />
        <Cities />
      </div>
    </div>
  );
}

export default App;