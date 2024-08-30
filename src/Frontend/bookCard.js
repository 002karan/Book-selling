import React from "react";
import { useState } from "react";
import bookcover from "../Assests/bookCover.jpg";

export default function BookCard({title,bookimg}) {
  console.log("title",title);
  return (
    <div className="h-60 w-44 border-2 border-indigo-600 ">
      <div className="bg-gray-500 h-32 flex items-center justify-center">
        <img src={bookimg} className="h-32 w-24 "></img>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-sm flex  justify-center relative top-2">
          <h3>{title}</h3>
        </div>
        <div className="text-lg flex justify-center">
          <h1>₹399</h1>
          <span className="text-sm">
            <s>₹599</s>
          </span>
        </div>
        <div className="flex justify-center ml-1">
          <div className=" justify-center bg-yellow-400 w-32 rounded-xl flex">
            <h3>Add to Cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
