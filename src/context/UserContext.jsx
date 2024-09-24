import PropTypes from 'prop-types'

import { createContext, useState } from "react";

export const  UserContext = createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({
        state: false,
        name: 'Gabriel'
    }); // conectado
    return (
        <>
            <UserContext.Provider value={ { user , setUser } }>
                { children }
            </UserContext.Provider>
        </>
    );
}

UserProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export default UserProvider;