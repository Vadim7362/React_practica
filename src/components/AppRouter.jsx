import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/App.css";
import { privatRoutes, publicRoutes } from "../router"
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if(isLoading) {
    return <Loader/>
  }
  return(
    isAuth 
      ? <Routes>
      {privatRoutes.map((route, index) => {
        return(
          <Route key = {index} path = {route.path} element={<route.element />}/>
        )
      })
      }
      <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
      : 
        <Routes>
          {publicRoutes.map((route, index) => {
          return(
            <Route key = {index} path = {route.path} element={<route.element />}/>
          )
          })
          }
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
  )
}

export default AppRouter