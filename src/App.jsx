import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import "./Admin.css";
import "./theme.css";

import Admin from "./layouts/Admin";
import Loading from "./components/Loading";

// Middlewares
import Authenticated from "./middleware/Authenticated";
import Guest from "./middleware/Guest";
import {
   guestOnlyRoutes,
   protectedRoutes,
   publicRoutes,
} from "./configs/routes";

export default function App() {
   AOS.init({
      offset: "100",
   });

   return (
      <HashRouter>
         <Suspense fallback={<Loading />}>
            <Routes>
               {/* Public */}
               {publicRoutes.map((route) => (
                  <Route
                     key={route.key}
                     path={route.path}
                     Component={route.component}
                  />
               ))}

               {/* Guest Only */}
               <Route element={<Guest />}>
                  {guestOnlyRoutes.map((route) => (
                     <Route
                        key={route.key}
                        path={route.path}
                        Component={route.component}
                     />
                  ))}
               </Route>

               {/* Protected */}
               <Route element={<Authenticated />}>
                  {/* Admin Layout */}
                  <Route element={<Admin />}>
                     {protectedRoutes.map((route) => (
                        <Route
                           key={route.key}
                           path={route.path}
                           Component={route.component}
                        />
                     ))}
                  </Route>
               </Route>

               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         </Suspense>
      </HashRouter>
   );
}
