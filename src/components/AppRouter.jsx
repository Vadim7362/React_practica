import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/App.css";
import { privatRoutes, publicRoutes } from "../router"

const AppRouter = () => {
  const isAuth = true;
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