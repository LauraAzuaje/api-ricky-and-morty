import React from 'react';
import { useEffect, useState } from 'react';
import { Character } from './Character/Character';
import './Characters.css'
import { Button } from './Button/Button';


export function Characters() {
    const [characters, setCharacters ] = useState([]);
    const [info, setInfo] = useState([]);
    const url = "https://rickandmortyapi.com/api/character"
  
    const fetchApi = async (url) =>{
      const res = await fetch(url);
      const characterJSON = await res.json();
      const { results, info } = await characterJSON
      setCharacters(results)
      setInfo(info)
    }
  
    const onNext = () =>{
      fetchApi(info.next);
    }
  
    const onPrev = () =>{
      fetchApi(info.prev);
    }

    const onMale = () =>{
        fetchApi("https://rickandmortyapi.com/api/character/?gender=male");
    }  
      
    const onFemale = () =>{
        fetchApi("https://rickandmortyapi.com/api/character/?gender=FEMALE");
    }  

    const onFilter = () =>{
        fetchApi("https://rickandmortyapi.com/api/character/");
    }   


    useEffect(() =>{
      fetchApi(url)
    }, [])
  
    return(
        <>
        <div>
        <Button name="Filter Male" onChange={onMale} page={true}/>
        <Button name="No Filter" onChange={onFilter} page={true}/>
        <Button name="Filter Female" onChange={onFemale} page={true}/>
        </div>
         <div className='container_cards'>
             {characters.map(
               (character) => (
                  <Character
                  key={character.id}
                  name={character.name}
                  avatar={character.image}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                />)
                )}
         </div>
         <div>
        <Button name="Prev" onChange={onPrev} page={info.prev}/>
        <Button name="Next" onChange={onNext} page={info.next}/>
        </div>
         </>
         );
  }
  




