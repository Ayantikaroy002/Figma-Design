import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Body from "./Body";
import Content from "./Content";

const page = () => {
  return (
    <>
      <Navbar/>
      <Search/>
      <div className="display flex md:flex-row">
        <Body/>
        <Content />
      </div>
    </>
  );
};

export default page;
