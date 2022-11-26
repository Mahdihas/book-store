import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { AuthToken } from '../../Router/auth';


import toast, { Toaster } from 'react-hot-toast';




const Social = () => {

    const { GooogleSign,signInWithGithub, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () => {
        GooogleSign()
            .then(result => {


                const user = result.user;
                console.log(user);

                AuthToken(user)
                toast.success('successfully login.')
                navigate('/')

                setLoading(false)

        
            
    
            })
                    
                   

            
            .catch(error => console.log(error));
        
        

  }
 
  








    const handleGithub = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);
                AuthToken(user)

                navigate('/')

                setLoading(false)
            })
            .catch(error => console.log(error));
        
        

    }


  return (
      <div className='text-center flex justify-center my-2 px-4'>
          <button onClick={handleGoogle} className='btn border-[tomato] text-[tomato] bg-white'>Google</button>
          {/* <button onClick={handleGithub} className='btn border-[tomato] text-[tomato] bg-[skyblue]'>GitHub</button> */}
        <Toaster></Toaster>
    </div>
  )
}

export default Social