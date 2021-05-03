import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


const PrivateRoute = (props) => {
    const [auth, setAuth] = useState(false);


    React.useEffect(() => {
        if (localStorage.auth) {
            setAuth(true)

        } else props.history.push("/login")
        
    }, [props.auth]);

    return (
        <>
            { auth &&
                <Route
                    {...props}
                    component={props.component} />}
        </>
    );
}

export default withRouter((PrivateRoute));
