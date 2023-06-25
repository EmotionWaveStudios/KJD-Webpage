import Brands from "./Components/Brands";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import API_section from "./Components/API_section";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <API_section />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
