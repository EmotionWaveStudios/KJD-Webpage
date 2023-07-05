import Brands from "./Components/Brands";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import APISection from "./Components/APISection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <APISection />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
