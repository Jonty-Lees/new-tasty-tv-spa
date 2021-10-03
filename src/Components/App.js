/* eslint-disable */

import React, { useState } from "react";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import SearchContainer from "./SearchContainer";

export default function App() {
  const [movie, setMovie] = useState[
    ({
      id: 213,
      name: "Rachel",
      releasedOn: "23/11/1991",
      watched: false,
      bannerUrl:
        "https://hub.dummyapis.com/Image?text=Item&height=120&width=120"
    },
    {
      id: 823,
      name: "Garrick",
      releasedOn: "04/09/2026",
      watched: false,
      bannerUrl:
        "https://hub.dummyapis.com/Image?text=Item&height=120&width=120"
    },
    {
      id: 481,
      name: "Fermin",
      releasedOn: "29/05/2011",
      watched: false,
      bannerUrl:
        "https://hub.dummyapis.com/Image?text=Item&height=120&width=120"
    })
  ];

  return (
    <div>
      <Header />
      <SearchContainer />
      <Footer />
    </div>
  );
}
