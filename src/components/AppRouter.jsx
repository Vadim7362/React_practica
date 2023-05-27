import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/App.css";
import {routes} from "../router"

const AppRouter = () => {
    <Routes>
            {routes.map((route, index) => {
                  <Route key = {index} path = {route.path} element={<route.Element />}/>
            })
            }
            <Route path = "/*" element = {<Navigate to = "/posts" replace/>}/>
        </Routes>
        
}

export default AppRouter