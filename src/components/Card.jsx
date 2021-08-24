import React from "react";

export default function Card(props) {
  const { name, description, htmlUrl } = props;

  return (
    <>
      <div className="course">
        <div className="course-preview">
          <h6>Repo name</h6>
          <h5>{name}</h5>
        </div>
        <div className="course-info">
          <h6>Description</h6>
          <i>{description ?? "no description given"}</i>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 10,
            }}
          >
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn">See repo</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
