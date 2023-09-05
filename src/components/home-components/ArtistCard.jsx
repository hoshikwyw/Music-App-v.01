import React from 'react'
import weeknd from "../../assets/theWeekend.jpg"
import {FaHeadphones} from "react-icons/fa"
import {SiYoutubemusic} from "react-icons/si"

const ArtistCard = ({song}) => {
  return (
    <div>
      <div className=' flex flex-col items-center justify-center relative group inner'>
            <img src={song.item.image_url} alt="" className=' w-16 h-16 rounded-full' />
            <button className=' absolute text-[#e4e0e0] text-2xl top-2 bg-[#a8a7a79f] px-3 py-3 rounded-full invisible group-hover:visible'><SiYoutubemusic /></button>
            <h2 className=" text-sm text-[#4e4e4e] font-semibold text-center">{song.item.name.substring(0, 10)}...</h2>
            <div className=' flex items-center justify-center w-full gap-2'>
                <h2 className=" text-xs text-[#ffffff] font-semibold"><FaHeadphones /></h2>
                <h2 className=" text-xs text-[#4e4e4e] font-semibold">112 songs</h2>
            </div>
        </div>
    </div>
  )
}

export default ArtistCard
