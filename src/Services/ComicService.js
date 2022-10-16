import axios from "axios";

const CREDENTIALS = '?ts=1&apikey=15c6de32e84b808e3431f6be93256369&hash=ab402b98b5a49b0900f5cb56a3954c40';
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics';

export const getComics = async (user) => {
    let response = null;
    // if list of user comics not exist this are create from te API
   // if (localStorage.getItem(user+"_list")){
        response = await axios.get(API_URL+CREDENTIALS);
      //  localStorage.setItem(user+"_list");
    //}

    return response.data.data.results;
}


export const getComic = async (id) =>{
    const response = await axios.get(API_URL+"/"+id+CREDENTIALS);
    return response.data.data.results[0];
}