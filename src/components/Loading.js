import React from "react";
import imageLoading from "../images/garbagePerson.gif";

const Loading = () => {
  return (
    <article className="main">
      <img src={imageLoading} alt="garbage person"></img>
    </article>
  );
};

export default Loading;
