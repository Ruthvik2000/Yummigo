import {MENU_API_URL} from "../constants";
import {useState, useEffect } from "react";


const useRestaurantMenu = (resId) =>{
    const [resdata, setrresdata] = useState(null);
    //fetch data
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(
            MENU_API_URL + resId 
        );
        
        const json = await data.json();
        console.log(json);
        setrresdata(json);
    };
    return resdata;
}

export default useRestaurantMenu;

