import "./App.css";

import Search from "./components/SearchBar/component";
import UserListContainer from "./components/UserList/index";

function App() {
  return (
    <div className="App">
      <Search />
      <UserListContainer />
    </div>
  );
}

export default App;
