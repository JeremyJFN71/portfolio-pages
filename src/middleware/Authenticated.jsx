import { useEffect, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { checkLogin } from "../services/authService";

export default function Authenticated() {
   const navigate = useNavigate();
   const outlet = useOutlet();
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
      async function check() {
         const { data, error } = await checkLogin();
         if (data) {
            if (!data.data) {
               return navigate("/admin/login");
            }
            setIsAuth(true);
         }

         if (error) navigate("/admin/login");
      }

      check();
   }, [navigate]);
   return <>{isAuth && outlet}</>;
}
