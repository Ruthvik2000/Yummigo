import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import {RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY} from "../utils/constants";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const json = useRestaurantMenu(resId);
    const [resInfo, setresInfo] = useState(null);
    const [categories, setCategories] = useState([]);
    const [showIndex, setShowIndex] = useState(null);

    
    useEffect(() => {
    if (!json) return;

    // Set restaurant data
    //we can get const {name, cuisines, costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info; from restaurantData
    /*const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null; */
    const restaurantData = json?.data?.cards?.find(x => x.card?.card?.["@type"] === RESTAURANT_TYPE_KEY)?.card?.card?.info;

    setresInfo(restaurantData);

    // Get each cataheories like and reperesent them in each box by passing them in RestaurantCategory
    const categoryCards =  json?.data?.cards.find(x=> x.groupedCard)?.
                        groupedCard?.cardGroupMap?.REGULAR?.
                        cards?.filter((c) =>
                            c.card?.["card"]?.["@type"] === MENU_ITEM_TYPE_KEY);
    setCategories(categoryCards  || []);

    console.log(categoryCards);

     }, [json]);

    if (!resInfo) return <Shimmer />;

    return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo.name}</h1>
      <p className="font-bold text-lg">{resInfo.cuisines.join(", ")} -- {resInfo.costForTwoMessage}</p>
       {/* categories accordions */}
       {categories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory 
          key={index} 
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          />)
        )}
</div>
);
};
export default RestaurantMenu;