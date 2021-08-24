import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function RepoViewer() {
  const username = useSelector((state) => state.username);
  const history = useHistory();

  useEffect(() => {
    if (username.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please input your username`,
      });
      history.push("/");
    } else {
      // fetch the repo here
    }
  }, []);

  return (
    <>
      <Navbar username={username} />
      <div className="cards-container">
        <Card />
      </div>
    </>
  );
}
