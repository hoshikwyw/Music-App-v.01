import React, { useEffect, useState } from "react";
import "./recommend.css";
import axios from "axios";
import RecomSong from "./RecomSong";

const Recommend = () => {
  const [songs, setSongs] = useState([]);
  const apiKey = "569e84436amshf9e2b2888bc499ep10c414jsne17550357488";
  const apiUrl = "https://genius-song-lyrics1.p.rapidapi.com/chart/songs/";

  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
      })
      .then((response) => {
        setSongs(response.data.chart_items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(songs);

  return (
    <div className=" p-3">
      <h2 className=" text-[#fffffff1] font-semibold font-mono text-lg">
        Top Recommendation
      </h2>
      <div className=" bg-white/25 rounded-2xl mt-1 p-3 main">
        <div className="">
        {songs?.map((song, i) => (
          <RecomSong key={song.key} song={song} i={i} />
        ))}
        </div>
      </div>
      
    </div>
  );
};
export default Recommend;
