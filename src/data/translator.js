//  hindi       -   hi      -       0 | 1
//  english     -   en      -       2 | 3      
//  marathi     -   mh      -       4 | 5  
//  tamil       -   tm      -       6 | 7    
//  telugu      -   tl      -       8 | 9  
//  punjabi     -   pn      -       10 | 11  
//  assamese    -   as      -       12 | 13  




export const setLangMain = () => {
    const getLangCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='));
    const langValue = getLangCookie ? getLangCookie.split('=')[1] : null;
    
    switch (langValue) {
        case 'hi':
            return 0;
            break;

        case 'en':
            return 1;
            break;

        case 'mh':
            return 2;
            break;

        case 'tm':
            return 3;
            break;  

        case 'tl':
            return 4;
            break;  

        case 'pn':
            return 5;
            break; 
            
        case 'as':
            return 6;
            break;  

        default:
            return 1;
            break;
    }

};
