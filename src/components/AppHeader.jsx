import { NavLink } from "react-router-dom";
 function AppHeader() {
    const nav = [
    {
        path: "/",
        title: "Home Page"
    },
    {
        path: "/posts",
        title: "Posts Page"
    }
 ];
 return (

 <ul>
    {nav.map((curItem) => (
        <li key={curItem.title}>
            <NavLink to = {curItem.path}> {curItem.title}</NavLink> 
        </li>
    ))}
 </ul>

)}
 export default AppHeader;