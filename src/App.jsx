import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Header from "./component/Header";

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
        </>
      )}
    </>
  );
}

export default App;
