import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/home/profile/Profile";

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
