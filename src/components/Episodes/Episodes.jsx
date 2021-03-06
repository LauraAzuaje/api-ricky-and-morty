import React, { useState, useEffect } from "react";
import { Episode } from "./Episode/Episode";
import {Button} from "../Characters/Button/Button";
import './Episodes.css'

export function Episodes(){

    const [episodes, setEpisodes] = useState([]); 
    const [info, setInfo] = useState([]);

    const url = "https://rickandmortyapi.com/api/episode"

    const fetchApi = async (url) =>{
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = await episodesJSON
    if(results){  setInfo(info)
        setEpisodes(results)}
    else{alert("not found")}    
   
  }

  const onPrevious = () => {
    fetchApi(info.prev);
  };

  const onNext = () => {
    fetchApi(info.next);
  };
  useEffect(() =>{
    fetchApi(url)
  }, [])

    return(
    <>
        <article
        id="articleEpisodes">
      {episodes.map((episode)=>(
            <Episode
                key={episode.id}
                name={episode.name}
                airDate={episode.air_date}
                episode={episode.episode}
                charactersList={episode.characters}
            />
        ))}
        </article>
            <div className="button">
      <Button name={"Previous Page"} page={info.prev} onChange={onPrevious} />
      <Button name={"Next Page"} page={info.next} onChange={onNext} />
            </div>
     </>         
    );
}