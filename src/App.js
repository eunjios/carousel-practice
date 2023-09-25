import Backdrop from "./UI/Backdrop";
import Carousel from "./components/Carousel";
import ContentsList from "./components/ContentsList";
import Header from "./components/Header";
import { imgData } from "./store/data";

function App() {
  return (
    <Backdrop>
      <Header />
      <ContentsList />
      <Carousel data={imgData} />
    </Backdrop>
  );
}

export default App;
