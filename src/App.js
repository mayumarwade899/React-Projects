import AuthenticateForm from "./components/AuthenticateForm";
import Axios from "./components/Axios";
import AxioxPost from "./components/AxioxPost";
import BgColorChange from "./components/BgColorChange";
import Counter from "./components/Counter";
import CRUD from "./components/CRUD";
import DisplayList from "./components/DisplayList";
import FetchData from "./components/FetchData";
import FileUploader from "./components/FileUploader";
import Pagination from "./components/Pagination";
import RandomQuote from "./components/RandomQuote";
import SearchItems from "./components/SearchItems";
import Main from "./components/Routing/Main";
import Timer from "./components/Timer";
import ToggleSwitch from "./components/ToggleSwitch";
import UserInput from "./components/UserInput";
import WeatherAPI from "./components/WeatherAPI";
import "./index.css";
import ColorPicker from "./components/ColorPicker";
import ResponsiveMenu from "./components/ResponsiveMenu";
import LightDarkTheme from "./components/LightDarkTheme/LightDarkTheme";
import ThemeComp from "./components/LightDarkTheme/ThemeComp";
import { ThemeProvider } from "./components/LightDarkTheme/Context";
import AddToCart from "./components/AddToCart/AddToCart";
import { CartProvider } from "./components/AddToCart/CartContext";
import MultipleAPIs from "./components/MultipleAPIs";

function App() {
  // const items = [
  //   "Item 1",
  //   "Item 2",
  //   "Item 3",
  //   "Another Item 1",
  //   "Another Item 2",
  //   "Another Item 2",
  // ];

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
      {/* <SearchItems items={items}/> */}
      {/* <Pagination items={items} itemsPerPage={2}/> */}
      {/* <ColorPicker /> */}
      {/* <ResponsiveMenu /> */}
      {/* <ThemeProvider>
        <div className="App">
          <LightDarkTheme />
          <ThemeComp />
        </div>
      </ThemeProvider> */}
      {/* <CartProvider>
      <AddToCart />
      </CartProvider> */}
      <MultipleAPIs />
    </div>
  );
}

export default App;
