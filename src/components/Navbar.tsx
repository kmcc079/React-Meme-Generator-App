import { useState } from "react"
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from "../config/firebase";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
      location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  const clicked = () => {
    setIsVisible(false);
  };

  return (
    <nav className="flex items-center justify-between mx-auto flex-wrap bg-green-200 p-3 xl:px-8 border-4 border-teal-400">
      <div className="flex items-center flex-shrink-0 text-green-800 mr-6">
        <Link to='/' 
          onClick={ clicked }
          className="text-lg tracking-tight">
            Meme Generator
        </Link>
      </div>
      <div className="block">
        <button 
          onClick={ dropDown }
          className="flex items-center px-3 py-2 text-green-800 border rounded
        border-green-800 hover:text-teal-400 hover:border-teal-400 transition duration-200 ease-in-out">
              <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      { isVisible ? ( 
        <div className="block w-full flex-grow items-center">
          <div className="flex flex-row text-center text-sm lg:flex-grow justify-end">
            <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
            text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                    <Link to='/' 
                      onClick={ clicked }
                      className="flex place-items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                        Home
                    </Link>
                </div>
            </button>
            <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
            text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                    <Link to='/dashboard' 
                      onClick={ clicked }
                      className="flex items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                        Dashboard
                    </Link>
                </div>
            </button>
            <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
            text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                    <Link to='/about' 
                      onClick={ clicked }
                      className="flex items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                        About
                    </Link>
                </div>
            </button>
            <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
            text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                    <Link to='/contact' 
                      onClick={ clicked }
                      className="flex items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                        Contact Us
                    </Link>
                </div>
            </button>
            {
              !auth.currentUser ?

              <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
              text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                  <Link to="/" onClick={ () => { signInOnClick() } } 
                    className="flex items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                    Login
                  </Link>
                </div>
              </button>
              :
              <button className="p-3 m-5 bg-teal-400 hover:bg-teal-500 justify-center text-center rounded 
              text-green-800 hover:text-green-200 transition duration-200 ease-in-out">
                <div>
                  <Link to="/" onClick={ () => { signOutOnClick() } } 
                    className="flex items-center text-center mt-4 lg:inline-block lg:mt-0 mx-2">
                    Logout
                  </Link>
                </div>
              </button>
            }
          </div>
        </div>  
      ) : (
      <></>
      )}
    </nav>
  )
}

export default Navbar