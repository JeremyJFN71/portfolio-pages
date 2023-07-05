import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useOutlet } from "react-router-dom";

export default function Guest() {
    const navigate = useNavigate();
    const outlet = useOutlet();
    const [isGuest, setIsGuest] = useState(false);

    useEffect(()=>{
        async function check(){
            await axios.get('/api/admin/loggedIn')
                .then((res)=>{
                    if(res.data){
                        return navigate('/admin/project');
                    }
                    setIsGuest(true);
                })
                .catch((err)=>{
                    console.log(err.response);
                    setIsGuest(true);
                });
        }

        check();
    }, [navigate])
    return (
        <>
        {isGuest && outlet}
        </>
    )
}
