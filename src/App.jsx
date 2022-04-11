import React from 'react';

import './styles/global.css';
import Authentication from './auth/Authentication';
import Menu from './components/Menu';

const App = () => {
    return(
        <>
            <Menu></Menu>
            <Authentication></Authentication>
        </>
        
    );
}

export default App;

