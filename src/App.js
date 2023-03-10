import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";

function App() {

  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />
    </div>
  );
}

export default App;
