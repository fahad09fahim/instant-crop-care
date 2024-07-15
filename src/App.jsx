import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Products from "./component/Products";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";

function App() {
  const [isLoading, setLoading] = useState(true);
  // loading functions
  useEffect(() => {
    const fakeData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fakeData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner/>
          <Products/>
          <Gallery/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
