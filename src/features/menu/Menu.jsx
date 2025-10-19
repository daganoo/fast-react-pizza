import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services /apiRestaurant";
import MenuItem from "./MenuItem";

// this is a Commen way to create loader in Component and connnect in app.jsx and use it by useLoaderData()
function Menu() {
    const menu = useLoaderData();
    console.log(menu)
    return <ul>{menu.map(pizza=>  <MenuItem pizza={pizza} key={pizza.id}/> )}
     </ul>;
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;
