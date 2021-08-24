import React from "react";
import loadingGif from "../assets/loading-buffering.gif";

export default function Loading() {
  return (
    <>
      <div id="loading">
        <img src={loadingGif} style={{ width: 300 }} />
      </div>
    </>
  );
}
