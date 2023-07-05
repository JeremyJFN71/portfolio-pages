import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useOutlet } from "react-router-dom";

export default function Authenticated() {
    const navigate = useNavigate();
    const outlet = useOutlet();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
        async function check(){
            await axios.get('/api/admin/loggedIn')
                .then(res=>{
                    if(!res.data){
                        return navigate('/admin/login');
                    }
                    setIsAuth(true);
                })
                .catch(err=>{
                    console.log(err.response);
                    navigate('/admin/login');
                });
        }

        check();
    }, [navigate])
    return (
        <>
        {isAuth && outlet}
        </>
    )
}