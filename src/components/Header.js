import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const photoURL = user?.photoURL;
    console.log(photoURL,"p")
    const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error);
        navigate("/error");
      });
    };

    useEffect(() =>{
      onAuthStateChanged(auth,(user) => {
        if (user){
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      })
    }, []);
    
  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black'>
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"/>
        {user && (<div className='flex p-2'>
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