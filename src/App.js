import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/index";
import Header from "./Components/Header";
import "./App.css";
import WhyChooseUs from "./Components/WhyChooseUs";
import WhatYouLearn from "./Components/WhatYouLearn";
import PlacementAssistance from "./Components/PlacementAssistance";
import KickOff from "./Components/KickOff";
import Details from "./Components/Details";
function App() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <WhyChooseUs />
      <Details />
      <WhatYouLearn />
      <PlacementAssistance />
      <KickOff />
    </div>
  );
}

export default App;
