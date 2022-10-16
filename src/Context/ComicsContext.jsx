import React from "react";
import { useState, useEffect } from "react";
import { getComics } from "../Services/ComicService";


// if i initialize the values con Context
export const ComicContext = React.createContext(
    {
        comics: [],
        user: []
    });

const CREDENTIALS = '?ts=1&apikey=15c6de32e84b808e3431f6be93256369&hash=ab402b98b5a49b0900f5cb56a3954c40';
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics'

export default props => {

    const [comicsList, setComicsList] = useState([]);
    const [coms, setComs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    // load data of Marvel API

    useEffect(() => {

        async function fetchData() {

            const response = await getComics();

            setLoading(false);
            setComicsList(response);
        }

        fetchData();

    }, [])

    // get Persist Data user

    useEffect(() => {
        if (!loading) {

            if (localStorage.getItem("user") !== null) {

                setUser(JSON.parse(localStorage.getItem("user")));
                setIsLogin(true);
                console.log("load data user");
            } else {
                console.log("user is not login");
            }


        }
    }, [loading])


    useEffect(() => {

        if (user) {

            console.log("Entro get user data");
            let comics = [];


            // eval if existe list comics user
            if (localStorage.getItem(user.userName + "list") !== null) {
                comics = JSON.parse(localStorage.getItem(user.userName + "list"));
            } else {
                comicsList.map(item => {
                    comics.push(
                        { id: item.id, title: item.title, description: item.description, thumb: item?.thumbnail?.path + "/portrait_xlarge." + item?.thumbnail?.extension, url: item.urls[0].url, isFavorite: false }
                    )
                })
                localStorage.setItem(user.userName + "list", JSON.stringify(comics));
            }

            console.log(comics);
            setComs(comics);

        }

        console.log("load data user comics list");

    }, [user])


    return (
        <ComicContext.Provider value={{ coms: coms, setComs:setComs, comics: comicsList, loading: loading, user: user, isLogin: isLogin, updateLogin: setIsLogin, updateUser: setUser }}>
            {props.children}
        </ComicContext.Provider>
    )
}