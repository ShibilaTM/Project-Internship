import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const Cringe = ({ children }) => {
    const location = useLocation();
    const [mystate, setmystate] = useState(false)
    // let temp = false;
    // const fetchData = async () => {
    //     try {
    //         const responseofuserisloggedin = await axios.get('http://127.0.0.1:4000/protection/theuserlogindata');

    //         console.log("dataoftheaxiosget", responseofuserisloggedin.data.saveduserlogindata[0].isloggedin);
    //         // console.log("responsefromuser", user.idoftheloginpost);
    //         if (responseofuserisloggedin.data.saveduserlogindata[0].isloggedin === true) {
    //             temp = true
    //             console.log("temp", temp)
    //         } else {
    //             temp = false
    //             console.log("temp", temp)
    //             setmystate(false);

    //         }


    //     } catch (error) {
    //         console.error("Error fetching user login data", error);
    //         setmystate(false);
    //     }
    // };
    // fetchData()


    setmystate(true)

    if (mystate === false) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}

export default Cringe
