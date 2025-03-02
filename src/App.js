import "./App.css";

import Header from "./components/Header/component";
import Footer from "./components/Footer/component";
import UserListContainer from "./components/UserList/index";

function App() {
  return (
    <div className="App">
      <UserListContainer />
    </div>
  );
}

export default App;
