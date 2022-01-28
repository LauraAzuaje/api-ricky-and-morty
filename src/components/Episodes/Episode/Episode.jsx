import React, { useEffect, useState } from "react";
import {Character} from "../../Characters/Character/Character";
import './Episode.css';

export function Episode(props) {
    const { name, airDate, episode, charactersList } = props
    const [character, setCharacter] = useState([])

    const apiMap = async (url) => {
      url.map(async (items) => {
        const res = await fetch(items);
        const characterJSON = await res.json();
        setCharacter((prevState) => [...prevState, characterJSON]);
      });
    };

    useEffect(()=>{
      apiMap(charactersList)
    }, [charactersList]);

      return (
        <div className="episodeCard">
          <div className="episodeInfo">
            <h1>{name}</h1>
            <h3>{episode}</h3>
            <p>{airDate}</p>
          </div>
          <div className="episodeCharacterCards">
                {character.map((item) => (
                  <Character 
                  name={item.name}
                  key={item.id}
                  avatar={item.image}
                  origin={item.origin.name}
                  gender={item.gender}
                  status={item.status}/>
                ))}
            </div>
        </div>
      );
    }