import AuthenticateForm from "./components/AuthenticateForm";
import Axios from "./components/Axios";
import AxioxPost from "./components/AxioxPost";
import BgColorChange from "./components/BgColorChange";
import Counter from "./components/Counter";
import CRUD from "./components/CRUD";
import DisplayList from "./components/DisplayList";
import FetchData from "./components/FetchData";
import FileUploader from "./components/FileUploader";
import RandomQuote from "./components/RandomQuote";
import SearchItems from "./components/SearchItems";
// import Main from "./components/Routing/Main";
import Timer from "./components/Timer";
import ToggleSwitch from "./components/ToggleSwitch";
import UserInput from "./components/UserInput";
import WeatherAPI from "./components/WeatherAPI";
import "./index.css"

function App() {
const items = ['Item 1','Item 2','Item 3','Another Item','Another Item 2'];

  return (
    <div className="App">
      {/* <Axios/> */}
      {/* <AxioxPost /> */}
      {/* <CRUD /> */}
      {/* <Counter /> */}
      {/* <UserInput /> */}
      {/* <DisplayList /> */}
      {/* <ToggleSwitch /> */}
      {/* <FetchData /> */}
      {/* <Timer /> */}
      {/* <BgColorChange /> */}
      {/* <Main /> */}
      {/* <RandomQuote /> */}
      {/* <FileUploader /> */}
      {/* <AuthenticateForm /> */}
      {/* <WeatherAPI /> */}
      <SearchItems items={items}/>
    </div>
  );
}

export default App;
