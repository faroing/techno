
export const getMiComics = () => {
    
    const lista = JSON.parse(localStorage.getItem("list"));
    if (lista) {
        return lista;
    }
    else {
        return null;
    }

}

export const addMiComic = (data) => {

    if (localStorage.getItem("list") === null) {
        localStorage.setItem("list", []);
    }

    let list = localStorage.getItem("list");
    let flagAdd = true;

    if (list.length > 0) {
        list = JSON.parse(list);
        for (const key in list) {
            if (list[key].id === data.id) {
                flagAdd = false;
            }
        }
        if (flagAdd)
            localStorage.setItem("list", JSON.stringify([...list, { id: data.id, title: data.title, description: data.description, thumb: data.thumb, url: data.url }]));
        console.log("JSONLIST", list);
    } else {
        localStorage.setItem("list", JSON.stringify([...list, { id: data.id, title: data.title, description: data.description, thumb: data.thumb, url: data.url }]));
    }
    //localStorage.setItem("list", JSON.stringify([...list, {id:data.id,title:data.title,description:data.description,thumb:data.thumb,url:data.url}]));
}

export const checkMiComic = (id) =>{
    let list = localStorage.getItem("list");
    let isInList =  false;

    //console.log(list);
    if (list!= null && list.length > 0){
        list =  JSON.parse(list);
        for(const key in list){
            if (id === list[key].id){
                isInList = true
            }
        }
    }

    return isInList;

} 

export const removeMiComics = (id) => {

    // const list = JSON.parse(localStorage.getItem("list"));
    // let flagRemove = false;
    // let newList = null;
    // if (list && list.length > 0){
    //     for (const key in list) {
    //         if (list[key].id !== id) {
    //             newList = {}
    //             const element = object[item];
    //         }
    //     }
    // }



}