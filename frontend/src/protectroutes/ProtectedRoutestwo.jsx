import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProtectedRoutestwo = () => {
    const [myState, setMyState] = useState(false); const user = useSelector((state) => state.userid.value);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseofuserisloggedin = await axios.get('http://127.0.0.1:4000/protection/theuserlogindata', { params: { _id: user.idoftheloginpost } });

                if (user.idoftheloginpost === responseofuserisloggedin.data.saveduserlogindata[0]._id) {
                    setMyState(true);
                    console.log("auth", myState)

                } else {
                    setMyState(false);
                }
            } catch (error) {
                console.error("Error fetching user login data", error);
                setMyState(false);
            }
        };

        fetchData();
    }, [user.idoftheloginpost]);


    return myState ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutestwo;


