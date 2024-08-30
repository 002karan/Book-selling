import logo from './logo.svg';
// import "NavBar" from './Frontend/NavBar.js';
import './App.css';
import { useEffect, useState } from "react";

import NavBar from './Frontend/navBar';

import ImageSlider from './Frontend/ImageSlider';
// import BookCard from './Frontend/bookCard';
import DataForBook from './Frontend/dataForBook';




function App() {
// console.log(useEffect)
  // console.log("useState",useState(2))
  return (
    <>
      
     <NavBar></NavBar>
     <ImageSlider></ImageSlider>
     {/* <BookCard></BookCard> */}
     <DataForBook></DataForBook>
    
    </>
  );
}

export default App;
