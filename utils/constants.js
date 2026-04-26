/* This file contains all the hard coded data or strings like list of array or url links of imgs and CDN etc--.*/

export const LOGO_URL= "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

export const IMG_ERROR= "https://deep-image.ai/blog/content/images/2024/04/e8b03cd2-bbf1-4153-9e33-403a2e0f8ea3-generated.png";
// Image CDN URL for Restaurant card
//export const IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4169142&lng=78.3423777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

export const MENU_API_URL= 'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.428934&lng=78.3529326&restaurantId=';                           

export const RESTAURANT_TYPE_KEY= "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
//type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget'
// menu items api card type key
export const MENU_ITEM_TYPE_KEY ="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";