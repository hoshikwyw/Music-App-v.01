import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import axios from "axios";

const Artists = () => {
  const [artistSongs, setArtistSongs] = useState([]);
  const apiKey = '569e84436amshf9e2b2888bc499ep10c414jsne17550357488';
  const apiUrl = "https://genius-song-lyrics1.p.rapidapi.com/chart/artists/";

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

    console.log(artistSongs);

  return (
    <div className=" p-3 overflow-hidden">
      <h2 className=" text-[#ffffff] font-semibold font-mono text-lg ">
        Following Artists
      </h2>
      <div className=" mt-1 p-3 flex gap-5  main ">
        {/* <ArtistCard/> */}
        {artistSongs?.map((song, i) => (
          <ArtistCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
