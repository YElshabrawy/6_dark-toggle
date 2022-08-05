import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
    const [darkM, setDarkM] = React.useState(false);
    return (
        <div className="container">
            <Navbar
                darkMode={darkM}
                toggleDarkMode={() => {
                    setDarkM((prev) => !prev);
                    // console.log(darkM);
                }}
            />
            <Main darkMode={darkM} />
        </div>
    );
}

export default App;
