import Background from "./UI/Background";
import Carousel from "./components/Carousel";
import data from "./store/data";

function App() {
  return (
    <Background>
      <Carousel data={data} />
    </Background>
  );
}

export default App;
