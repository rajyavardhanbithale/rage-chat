import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import { langMain } from './data/lang'

import { setLangMain } from './data/translator'

import './App.css';

import homeImage from './homeImage.svg'



function App() {
    const { user } = useAuth();


 
    return (
        <>


            <div className="container">
                <h1>{langMain[0].main[setLangMain()*2].content}</h1>
                {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </div>

        </>
    );
}

export default App;
