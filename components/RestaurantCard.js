// RestaurantList is JSON Data for displaying cards
import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/Hooks/UserContext"; 


const RestaurantCard = (props) => {
    const {resData} = props;
    const { loggedInUser } = useContext(UserContext);


    const {cloudinaryImageId, name, cuisines, avgRating ,costForTwo, sla } = resData;

    const imageUrl = cloudinaryImageId?.startsWith("http")
    ? cloudinaryImageId
    : `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"> {/*res-card*/}
            <img 
            className="rounded-lg"
            alt="res-logo" 
            src={imageUrl}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
};

//Higher order componenet 

// input - RestaurantCard =>> RestaurantCardPromoted


export const withisOpen = (RestaurantCard) =>{
    // here higher order componenet returns a compoenent means a function which had some jsx init
    return (props)=>{
        //we will get the restaurant.info from the body.js to the above props and now to pass it down
        return(
            <div>
                <label className="absolute bg-green-300 text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;