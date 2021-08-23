import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUsername } from "../store/actionCreator";
import Swal from "sweetalert2";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleUsernameInput = (e) => {
    e.preventDefault();
    if (username.length == 0)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please input your username`,
      });
    else {
      dispatch(editUsername(username));
      history.push("/repoviewer");
    }
  };

  useEffect(() => {
    dispatch(editUsername(""));
  }, []);

  return (
    <>
      <div id="home">
        <div className="wrapper fadeInDown" style={{ height: "80vh" }}>
          <div id="formContent">
            <form
              style={{ paddingTop: 30, height: "initial" }}
              onSubmit={(e) => handleUsernameInput(e)}
            >
              <input
                type="text"
                id="username"
                className="fadeIn second"
                name="username"
                placeholder="Github username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="View repo"
              />
            </form>
            <div id="formFooter">
              <a className="underlineHover" style={{ cursor: "pointer" }}>
                Input your github username to see your repos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
