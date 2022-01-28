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

    const onGenderless = () =>{
        fetchApi("https://rickandmortyapi.com/api/character/?gender=GENDERLESS");
    }  

    const onUnknow = () =>{
        fetchApi("https://rickandmortyapi.com/api/character/?gender=UNKNOW");
    } 

    useEffect(() =>{
      fetchApi(url)
    }, [])
  
    return(
        <>
        <div className='button'>
        <Button name="Filter Male" onChange={onMale} page={true}/>
        <Button name="Filter Female" onChange={onFemale} page={true}/>
        <Button name="Filter Genderless" onChange={onGenderless} page={true}/>
        <Button name="Filter Unknow" onChange={onUnknow} page={true}/>
        <Button name="Refresh" onChange={onFilter} page={true}/>
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
         <div className='button'>
        <Button name="Prev" onChange={onPrev} page={info.prev}/>
        <Button name="Next" onChange={onNext} page={info.next}/>
        </div>
         </>
         );
  }
  




