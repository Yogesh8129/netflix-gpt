import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);
    const photoURL = user?.photoURL;
    
    const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => { 
        console.log(error);
        navigate("/error");
      });
    };

    const handleGptSearchClick = () => {
      // Toggle Gpt Search Bar
      dispatch(toggleGptSearchView());
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth,(user) => {
        if (user){
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      })
      // Unsubscribe when the component unmounts
      return () => unsubscribe();
    }, []);
    
  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 z-[1000] bg-gradient-to-b from-black'>
        <img className="w-44" src={LOGO}
        alt="logo"/>
        {user && (
        <div className='flex p-2'>
          <select className='p-2 m-2 bg-gray-900 text-white'>
            {SUPPORTED_LANGUAGES.map(lang =>
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>
          <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>GPT Search</button>
          <img className='w-12 h-12'
            alt="usericon"
            src={photoURL}
          />
          <button onClick={handleSignOut} className='px-4 font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  );
};

export default Header;