import axios from "axios";

function getCharacters(){
  return axios 
  .get("https://www.breakingbadapi.com/api/characters")
  .then(response =>{
    return response.data;
  });
}

function getCharacterById(id){
  return axios 
  .get("https://www.breakingbadapi.com/api/characters" + id)
  .then(response =>{
    return response.data;
  })
}
export {getCharacters, getCharacterById};