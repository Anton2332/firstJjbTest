import React from 'react';
import './App.css';
import Header from "./pages/header/Header";
import Footer from "./pages/Footer/Footer";
import AppRoutes from "./router/AppRoutes"

function App() {
  return (
    <div className={"App"}>
        <Header/>
        <div className={"container wrapper"}>
            <AppRoutes/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
