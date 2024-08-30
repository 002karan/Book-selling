import React, { useEffect, useState } from "react";
import BookCard from "./bookCard";

export default function DataForBook() {
  const [bookdata, setBookData] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const api = await fetch("https://freetestapi.com/api/v1/books");
      // const response = await api.response();
      const responseTojson = await api.json();

      setBookData(responseTojson);
      //  console.log(responseTojson)
    };
    
    fetchBooks();
  }, [])

  return (
    <div className="grid grid-cols-4 gap-5 relative top-36 pl-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
      bookdata.map((data)=>
      {
      
return <BookCard title={data.title} key={data.id} bookimg = {data.cover_image}/>

      },[])

}
    </div>
  );
}
