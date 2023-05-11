import { useAuth } from '../../hooks/useAuth';
import './styles.css';

import {setLangMain} from '../../data/translator'
import { langMain } from '../../data/lang'

function UnauthenticatedApp() {
    const { login } = useAuth();

    console.log("title   :"+ (setLangMain()*2));
    console.log("message :  "+ (setLangMain()*2+1));
    
    return (
        <>
        
            <h2>{langMain[0].main[setLangMain()*2+1].content}</h2>
            <div>
                <button onClick={login} className="login">
                {langMain[0].mainButton[setLangMain()].content}
                </button>
            </div>
        </>
    );
}

export { UnauthenticatedApp };
