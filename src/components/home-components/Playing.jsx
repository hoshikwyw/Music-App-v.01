import React, { useEffect, useState } from "react";
import RecentCard from "./RecentCard";
import axios from "axios";

const Playing = () => {
  const [artistSongs, setArtistSongs] = useState([]);
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
        setArtistSongs(response.data.chart_items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(artistSongs);

  return (
    <div className=" p-3 w-full">
      <h2 className=" text-[#fffffff1] font-semibold font-mono text-lg">
        Recent Playing
      </h2>
      <div className=" play-main pb-3 h-36 rounded-sm">
        <div>
          {artistSongs?.map((song, i) => (
            <RecentCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playing;
