import React from "react";
import logo from "../Assests/read logo.png";
import filterIcon from "../Assests/faders-horizontal.svg";
import shopingCart from "../Assests/shopping-cart.svg";
import karanImg from "../Assests/karan edit.jpg";
import searchIcon from "../Assests/searchIcon.svg";

export default function NavBar() {
  return (
    <>
      <nav className="p-4 bg-customGray w-full fixed  h-20  z-10">
        <ul className="flex justify-between items-center">
          <span className="flex gap-2.5  items-center justify-center">
            <li>
              <img src={logo} className="h-12" />
            </li>
            <li className="flex">
              <h3 className="font-bold text-white">Book</h3>
              <h1 className="bg-textbg font-jua text-white ">Market</h1>
            </li>
          </span>
          <li className="flex items-center">
            <div className="h-10 bg-white rounded-l-2xl flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 -15 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <div>
              <input
                type=""
                className="h-10 w-96  focus:outline-none rounded-r-2xl"
                placeholder="Search for book"
              ></input>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img src={filterIcon} />
              </div>
              <div>
                <h3 className="text-white">Filter</h3>
              </div>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div>
              <img src={shopingCart} />
            </div>
            <div>
              <svg height="50" width="10">
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="50"
                  className="stroke-white stroke-2"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <img src={karanImg} className="h-12 w-12 rounded-full " />
              </div>
              <div>
                <h3 className="text-white">Sign In</h3>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
