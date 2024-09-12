import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Toplist = () => {
  const [toplist, setToplist] = useState([]);
  const headers = {
    Authorization: "Bearer hkew57zhne345hb3kw-zh65u",
  };
  let resData = "";

  useEffect(() => {
    /* const fetchData = async () => {
      axios
        .get({
          url: "https://eomxihgqom5ex61.m.pipedream.net/high-scores",
          headers: headers,
        })
        .then((response) => console.log(response));
      //.then((response) => console.log(response));
    };

    fetchData(); */
    const fetchData = async () => {
      fetch("https://eomxihgqom5ex61.m.pipedream.net/high-scores", {
        headers: {
          Authorization: "Bearer hkew57zhne345hb3kw-zh65u",
        },
      })
        .then((response) => {
          //console.log(response.json());
          console.log(response);
          resData = response;
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /* fetch("https://eomxihgqom5ex61.m.pipedream.net/high-scores")
        .then((serverPromise) =>
          serverPromise
            .json()
            .then((j) => console.log(j))
            .catch((e) => console.log(e))
        )
        .catch((e) => console.log(e)); */
    /* }; */

    fetchData();
    console.log(resData);
  });

  return (
    <div className="mainArea">
      <Navbar />
      <>
        <h1 style={{ fontFamily: "Title", fontSize: "50px", color: "white" }}>
          TOPLISTA
        </h1>
      </>
    </div>
  );
};

export default Toplist;
