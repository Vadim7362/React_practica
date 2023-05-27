import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/App.css";
import {routes} from "../router"

const AppRouter = () => {
  return (
    <Routes>
            {routes.map((route, index) => {
                
                    <Route key = {index} path = {route.path}>
                        element={<route.element />}
                    </Route>
            })}
            <Route path = "/*" element = {<Navigate to = "/posts" replace/>}/>
        </Routes>
        )
}

export default AppRouter