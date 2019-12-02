//irrelevant 

import React from 'react';
import Title from './Components/Title';
import UserForm from '/Components/UserForm';

class App extends React.Component {
    state = {
        user: []
    }
}

render() {
    return (
        <div>
            <Title />
            <UserForm />
        </div>
    );
}

export default App