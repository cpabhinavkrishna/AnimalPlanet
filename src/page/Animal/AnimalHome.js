import React, { useRef, useState } from "react";
import "./AnimalHome.css";
import { useParams } from "react-router-dom";
import Data from "../../context/Data.js";
import Promotion from "../../context/Promotion.js";
import ReactPlayer from "react-player";
export default function AnimalHome() {
  let { animalId } = useParams("animalId");
  let animal = Data.find((e) => e.id == animalId);
  let playerRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState(animal.url);
  const [promoPlaying, setPromoPlaying] = useState(false);
  const [mainVideoPlayedTime, setMainVideoPlayedTime] = useState(0);

  //handle video progress
  function handleVideoProgress(state) {
    if (!promoPlaying) {
      setMainVideoPlayedTime(state.playedSeconds);
    }
    if (state.playedSeconds >= 10 && state.playedSeconds < 11) {
      let promo = getAds();
      setCurrentUrl(() => promo.url);
      setPromoPlaying(true);
    }
  }

  //handle promo
  function endPromo() {
    setPromoPlaying(false);
    setCurrentUrl(animal.url);
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.seekTo(mainVideoPlayedTime+1, "seconds");
      }
    }, 500);
  }
  //returns random ad link
  function getAds() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return Promotion.find((e) => e.id == randomNumber);
  }
  return (
    <div className="animal-home">
      <ReactPlayer
        width="100%"
        playing={true}
        onProgress={handleVideoProgress}
        onEnded={promoPlaying ? endPromo : null}
        progressInterval={1000}
        controls={true}
        url={currentUrl}
        ref={playerRef}
      ></ReactPlayer>
    </div>
  );
}
