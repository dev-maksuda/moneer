import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/Home"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </>
    )
  )

  return (
    <>
      <h1 className="text-red-600 text-5xl">Hello</h1>
    </>
  )
}

export default App

