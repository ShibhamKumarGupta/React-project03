import Details from "./components/Details";
import ImageBox from "./components/ImageBox";
import Footer from "./components/Footer";
import ColorOptions from "./components/ColorOptions.jsx";
import Pricing from "./components/Pricing.jsx";
import "./App.css";
import "./script.js";


function App() {
  const ColorData = [
    {colorName: "black active", primaryColor: "#000", secColor: "#212121", dataPic: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"},
    {colorName: "red", primaryColor: "#7E021C", secColor: "#bd072d", dataPic: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"},
    {colorName: "orange", primaryColor: "#CE5B39", secColor: "#F18557", dataPic: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"}
  ]

  return (
    <>
      <div className="container">
        <ImageBox />
        <div className="details">
          <div className="content">
            <Details />
            <ColorOptions colorProps={ColorData}/>
            <Pricing/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
