/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import signupImg from '../images/signup.gif';
import avatar from '../images/doctor-img01.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [selectedFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile, // Corrected: use the selectedFile variable
    gender: '',
    role: 'patient',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);

    // Corrected: Update selectedFile and previewURL
    setSelectFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const submitHandler = async (event) => {
    console.log(formData)
    event.preventDefault();
    // Add your form submission logic here
  };

  
  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden rounded-l-lg lg:block bg-primaryColor">
            <figure className='rounded-l-lg '>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          <div className="py-10 rounded-l-lg lg:pl-16">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primaryColor '>account</span></h3>
            <form  onSubmit={submitHandler}>
              <div className="mb-5">
                <input type="text" placeholder="Enter your Full Name" name="name" value={formData.name
                } onChange={handleInputChange} className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
              </div>
              <div className="mb-5">
                <input type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleInputChange} className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
              </div>
              <div className="mb-5">
                <input type="password" placeholder="Enter passowrd" name="password" value={formData.password} onChange={handleInputChange} className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
              </div>
              <div className="flex items-center justify-between">
                <label  className='font-bold text-headingColor text-[16px] leading-7 '>
                  Are you a:
                  <select name="role" value={formData.role} onChange={handleInputChange} className="font-semibold text-textColor text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="patient">Patient</option>
                    <option value="docter">Docter</option> 
                  </select>
                </label>
                <label  className='font-bold text-headingColor text-[16px] leading-7 '>
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="font-semibold text-textColor text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="">Select</option>
                    <option value="mail">Mail</option> 
                    <option value="femail">Femail</option> 
                    <option value="other">Other</option> 
                  </select>
                </label>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <figure className='w-[60px] h-[60px] rounded-full  border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={avatar} className='w-full rounded-full' alt="" />
                </figure>
                <div className='relative  w-[130px] h-[50px]'>
                  <input type="file" name="photo" id="customFile" accept='.jpg, .png' onChange={handleFileInputChange} className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                  <label htmlFor="customFile" className='absolute top-0 flex items-center w-full h-full px-[0.75rem] py-[0.375rem]  text-[15px] leading-6 overflow-hidden  bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer '>Upload Photo</label>
                  
                </div>
                
              </div>
              <div className="flex justify-center mt-7">
        <button type="submit" className="w-full max-w-[350px] text-white bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3">Sign Up</button>
      </div>

      <p className="mt-5 text-center text-textColor">
        Already  have an account <Link to="/login" className="ml-1 font-medium text-primaryColor">Login</Link>
      </p>
            </form>
          </div>

        </div>

      </div>


    </section>
  )
}

export default Signup
