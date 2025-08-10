import "./App.css";

import HeaderComponent from "./Components/header";
import LeftMenuComponent from "./Components/leftMenu";
import Content from "./Components/content";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="content">
        <LeftMenuComponent />
        <Content />
      </div>
    </div>
  );
}

export default App;
