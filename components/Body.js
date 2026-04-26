import RestaurantCard, {withisOpen} from "./RestaurantCard";
import {useEffect, useState, useContext} from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UserContext from "../utils/Hooks/UserContext"; 

const Body = () => {
    //ListofRestaurants intialy maintains the default data which we pass. then as per function we use and update that setListofRestaurants, the react re-renders setListofRestaurants to the UI
    const [ListofRestaurants, setListofRestaurants]= useState([]);
    const [searchText, setsearchText]= useState("");
    const [filteredRestaurants, setfilteredRestaurants]= useState([]);
    const RestaurantCardwithisOpen = withisOpen(RestaurantCard);

    console.log(ListofRestaurants);
    // Whenever state variables update , react trigggers a resoncilation cycle(re-renders the howl component)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            API_URL
        );

    const json = await data.json();
    // WE can by pass the cors plugin by adding https://corsproxy.io/? before the swiggy API 
    /* 
    Remove the comment to see the json data what we fetched from API 
    console.log(json);
    console.log ( json?.data?.cards?.find(
        (card) => card?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants);  

    */
    //OPtional Chaining 
    setListofRestaurants(json?.data?.cards?.find(
        (card) => card?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    setfilteredRestaurants(json?.data?.cards?.find(
        (card) => card?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    };
    
    const { loggedInUser, setUserName } = useContext(UserContext);
 
    return ListofRestaurants.length ===0 ? (<Shimmer/>) : (
        <div className="mt-24 px-4 sm:px-10 lg:px-20 flex flex-col items-center">{/*body*/}
            <div className="w-full max-w-[1500px] px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">{/*filter*/}
                <button 
                className="py-2 px-4 text-white bg-orange-500 rounded-md hover:bg-green-700 transition-all text-sm whitespace-nowrap"
                onClick={() => {
                    const filteredlist = ListofRestaurants.filter((res) => res.info.avgRating > 4);
                    {/*If you want to show the rating above 4 only from filtered restaurants after search just replace ListofRestaurants to filteredRestaurants */}
                    setfilteredRestaurants(filteredlist);
                }}
                >
                {/*In the above functions we are using ListofRestaurants just to take the intial 
                data and we are using setfilteredRestaurants to show cases the filtered restaurants
                 throght state varaiable filteredRestaurants below in the className="restaurant-container*/}
                Top Rated Restaurants
                </button>
                
                <div className="flex flex-grow w-full max-w-md">{/*search*/}
                    <input className="flex-grow py-2 px-4 text-base text-gray-800 bg-white border border-gray-400 rounded-l-md outline-none focus:border-orange-500 transition-all"
                    type="text" value={searchText} onChange={(e => {setsearchText(e.target.value);})}/>{/*search-box*/}
                    {/* we have written onChange because whatever we change the value in the search box that should be taken by setsearchtext and after clicking the button the searchTExt need to be updated*/}
                    <button 
                    className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-green-700 text-sm"
                    onClick={()=> {
                        const f_Restaurants= ListofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurants(f_Restaurants);
                    }}>Search</button>
                </div>
                

                <div className="flex items-center gap-2">
                    <label className="text-lg font-medium">UserName : </label>
                    <input className="border border-gray-500 p-2 rounded-md"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                />
             </div>
        </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-[1500px] mx-auto">
{/*restaurant-container*/}
                {   
                    /* using map to get all the restaruant data from the restaurantList, But using index as the key was not the best practice according to react official page 
                    restaurantList.map((restaurant, index) => 
                        (<RestaurantCard key={index}resData={restaurant}/>))
                    */
                    filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>

                        {restaurant.info.isOpen ? 
                            (<div className="transform transition duration-300 hover:scale-105">
                            <RestaurantCardwithisOpen resData={restaurant.info} />
                            </div>): 
                        (<div className="transform transition duration-300 hover:scale-105">
                            <RestaurantCard resData={restaurant.info}/>
                        </div>)}
                    </Link>
                    /* Here we passed only "info" data in each restaurant not the entire data present in restaurant*/
                ))}
            </div>
        </div>
    );
};

export default Body;


