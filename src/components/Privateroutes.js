
import {useAuthState} from "react-firebase-hooks/auth";  //This is the hook from react-firebase npm
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

function Privateroutes() {

  let [user,loading,error]=useAuthState(auth);  //Without this react-hook also we can know in what state the Authentication is in.
                                                    //This hook will make it easy to get those values in a single line.
   
    if(loading)
   {
    return (<div>Loading...</div>)
   }
   else if(error || !user)
   {
        toast.error("Please Login/Signup");
        console.log(user,loading,error,"checking")
     
    return <Navigate to="/signup" replace/>  //In the Navigate component "replace" attribute is used
    //to not log the previous page into the browser history.Because in this condition without login or with some error
    //if user tries to come to this private page(Profile page etc.) It will redirect to signup page.
    //And then if user press the Back button in the browser,It will not take to the Profile page because
    //It is not logged into the browser history because of "replace" attribute
                                            
   }
  return (
   <Outlet/>
  )
}

export default Privateroutes
