import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import Coleccion from "./pages/ColeccionPage";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/coleccion",
    element: <Coleccion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/coleccion" element={<Coleccion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
