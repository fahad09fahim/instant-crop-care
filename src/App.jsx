import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Products from "./component/Products";

function App() {
  const [isLoading, setLoading] = useState(true);
  // loading functions
  useEffect(() => {
    const fakeData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
        </>
      )}
    </>
  );
}

export default App;
