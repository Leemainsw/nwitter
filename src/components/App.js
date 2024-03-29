import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

import '../css/App.css'

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) setUserObj(user);
            else setUserObj(null);
            
            setInit(true);
        });
    }, []);

    return (
        <>
            {init ? (
                <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
            ) : (
                ""
            )}
        </>
    );
}

export default App;
