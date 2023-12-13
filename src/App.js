import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Header />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
