import React from "react";

export default function Card() {
  return (
    <>
      <div className="course">
        <div className="course-preview">
          <h6>Repo name</h6>
          <h5>JavaScript Fundamentals</h5>
        </div>
        <div className="course-info">
          <h6>Description</h6>
          <i>
            a collaborative platform for bedroom musician. built using react,
          </i>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 10,
            }}
          >
            <button className="btn">See repo</button>
          </div>
        </div>
      </div>
    </>
  );
}
