import { useEffect, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { checkLogin } from "../services/authService";

export default function Guest() {
   const navigate = useNavigate();
   const outlet = useOutlet();
   const [isGuest, setIsGuest] = useState(false);

   useEffect(() => {
      async function check() {
         const { data, error } = await checkLogin();
         if (data) {
            if (data.data) {
               return navigate("/admin/project");
            }
            setIsGuest(true);
         }

         if (error) setIsGuest(true);
      }

      check();
   }, [navigate]);
   return <>{isGuest && outlet}</>;
}
