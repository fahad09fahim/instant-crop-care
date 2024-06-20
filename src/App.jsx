import { useEffect, useState } from "react"
import Loader from "./component/Loader";



function App() {


  const [isLoading,setLoading]= useState(true)
  // loading functions
useEffect(()=>{
const fakeData=()=>{
  setTimeout(() => {
    setLoading(false)
  },4000);
}
fakeData()
},[])
  return (
    <>
     {
      isLoading? <Loader/> : <>
      
      <h1>hi</h1>
      </>
     }
    </>
  )
}

export default App
