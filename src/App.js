import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/slice/userSlice";
function App() {
  let dispatch = useDispatch();
  const isUser = localStorage.getItem("user");

  if (isUser) {
    dispatch(setUser(JSON.parse(isUser)));
  }
  const user = useSelector((state) => state.user.data);

  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
