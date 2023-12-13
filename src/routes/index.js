import Home from "~/pages/Home";
import Profiles from "~/pages/Profiles"; 
import Friends from "~/pages/Friends";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
const publicRoutes = [
    {path:"/",component:Home},
    {path:"/profile",component:Profiles,layout:HeaderOnly},
    {path:"/friend",component:Friends,layout:HeaderOnly},
    {path:"/upload",component:Upload,layout:HeaderOnly}

]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}