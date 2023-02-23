import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import { useEffect, useRef, useState } from 'react';
const SwitchTheme = () => {

    const [darkMode,setDarkMode] = useState('light');
    const  btnDarkMod =  useRef(null);
    useEffect(()=>{
        if(darkMode === 'dark'){

            document.body.classList.add('dark')
            btnDarkMod.current.classList.add('dark-mode-btn--active')

        }else{
            document.body.classList.remove('dark');
            btnDarkMod.current.classList.remove('dark-mode-btn--active')
        }

    },[darkMode]);
    const toggleTheme = ()=> {

        setDarkMode((curent)=>{

            return curent === 'light' ? 'dark' : 'light';
        });
    }
    return ( 
         
        <button 
            ref={btnDarkMod}
            onClick={toggleTheme}
            className="dark-mode-btn">
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
         </button>
        
         
     );
}
 
export default SwitchTheme;