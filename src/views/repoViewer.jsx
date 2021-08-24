import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function RepoViewer() {
  const username = useSelector((state) => state.username);
  const history = useHistory();

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(({ data }) => {
        setRepos(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Something wrong",
          text: `${err}`,
        });
        history.push("/");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (username.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please input your username`,
      });
      history.push("/");
    } else {
      fetchRepos();
    }
  }, []);

  const repoDisplay = repos.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      htmlUrl={item.html_url}
    />
  ));

  if (loading) return <Loading />;
  return (
    <>
      <Navbar username={username} />
      <div className="cards-container">{repoDisplay}</div>
    </>
  );
}
