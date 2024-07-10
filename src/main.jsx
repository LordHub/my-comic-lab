import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import Coleccion from "./pages/ColeccionPage";
import Contact from "./components/Contact";

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
  {
    path: "/contacto",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Flex direction="column" minH="100vh">
          <Box as="header">
            <Navbar />
          </Box>
          <Box as="main" flex="1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/form" element={<Form />} />
              <Route path="/coleccion" element={<Coleccion />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Box>
          <Box as="footer">
            <Footer />
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
