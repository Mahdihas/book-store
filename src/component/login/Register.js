import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';
import Button from '../shared/Button/Button';
import { BsUpload } from "react-icons/bs";
import useToken from '../../Router/useToken';
import { AuthToken } from '../../Router/auth';
import Social from './Social';




const Register = () => {
  const {createUser, updateUserProfile}=useContext(AuthContext)

  const [select, setSelect] = useState();
  const [createduserEmail,setCreateduserEmail]=useState('')
  
  const { register, handleSubmit, formState: { errors } } = useForm();

const navigate =useNavigate()
  const [signUpError, setSignUPError] = useState('')


  // const [token] = useToken(createduserEmail);
  // console.log(token);
  // if (token) {
  //     navigate('/')
  // }




  const handleSignUp = (data) => {
    const image = data.image[0];
    const Title = data.Title;

    console.log(data);
    setSignUPError('');
     
    const formData = new FormData()
    formData.append('image', image)
    console.log(formData);

  
 const url="https://api.imgbb.com/1/upload?key=75db54791513826eb71372a0758663c9"


    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => { 
        console.log(imageData.data.url);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
          toast.success('User Created Successfully.')
            const userInfo = {
              displayName: data.name,
              Title: data.Title,
              photoURL: imageData.data.display_url
            }
            updateUserProfile(userInfo)
              .then(() => {  
                  
                saveUser(data.name,data.email,data.Title)
              })
              
          AuthToken(user)
        })
        .catch(error => {
            console.log(error)
            setSignUPError(error.message)
        });

      })

   
  }
  


  const saveUser = (name,email,Title) => {
    const user = { name, email,Title };
    fetch(' https://server-side-weld.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
           console.log('saveuser', data);
          setCreateduserEmail(email)
          navigate('/')


       })



}


  return (
    <div className="hero py-12" style={{ backgroundImage: `url("https://th.bing.com/th/id/R.64772012938512627f18f875ccafabfc?rik=dZlmxYUMZgAm8w&pid=ImgRaw&r=0")` }} >

    <div className='flex justify-center items-center'>
    <div className='w-full sm:w-96 border border-white rounded-[35px] p-7'>
        <h2 className='text-3xl text-center font-bold  text-white  '>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text  text-white">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          

          <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text  text-white">Photo</span></label>
              <div className="flex">
              <label for='img' className="label input input-bordered w-full max-w-xs"> <BsUpload className='text-pink-500 font-bold text-2xl'></BsUpload></label>

                
              <input id='img'  type="file" {...register("image", {
                    required: "image is Required"
                  })} className="input hidden py-2 input-bordered w-full max-w-xs" />
                    </div>
                    {errors.image && <p className='text-red-500 '>{errors.image.message}</p>}
            </div>






           
            <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text  text-white">Chose account</span></label>
              <div className="flex">
                  
              <select {...register("Title", { required: true })}>
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
      
       </select>

            
            </div>
            </div>






            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text  text-white">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full my-2 max-w-xs">
                <label className="label"> <span className="label-text  text-white">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 characters long" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            
            <div className="flex justify-center items-center w-[100%] text-center"> <Button>Sign Up</Button></div>  
          </form>
          <div className="my-4">{signUpError && <p className='text-yellow-600'>{signUpError}</p>}</div>

        <p className=' text-white'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
          <div className="divider">OR</div>
          


     <Social></Social>
      </div>
      <Toaster></Toaster>

      </div>
      </div>
  )
}

export default Register