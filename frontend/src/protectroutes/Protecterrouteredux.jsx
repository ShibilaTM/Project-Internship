import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Protecterrouteredux = () => {
    const [myState, setMyState] = useState(true);
    const user = useSelector((state) => state.userisloggedinstate.value);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("user.isloggedinred", user)
                if (user.isloggedinred === true) {
                    setMyState(true)
                    console.log("user.isloggedinred", user)
                }
            } catch (error) {
                console.error("Error fetching user login data", error);
                setMyState(false);
            }
        };

        fetchData();
    }, [user.isloggedinred]);

    return myState ? <Outlet /> : <Navigate to="/login" />;
}

export default Protecterrouteredux;

















// import React, { useEffect, useState } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const Protecterrouteredux = () => {
//     const [myState, setMyState] = useState(false);
//     const user = useSelector((state) => state.userisloggedinstate.value);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 console.log("user.isloggedinred", user)
//                 if (user.isloggedinred === true) {
//                     setMyState(true)
//                     console.log("user.isloggedinred", user)
//                 }
//             } catch (error) {
//                 console.error("Error fetching user login data", error);
//                 setMyState(false);
//             }
//         };

//         fetchData();
//     }, [user.isloggedinred]);


//     return (myState === 'true') ? <Outlet /> : <Navigate to="/login" />;






// }

// export default Protecterrouteredux
