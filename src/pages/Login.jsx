import { useState } from "react";
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (

    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9  font-bold mb-10">Hello <span className="text-primaryColor">
          Welcome</span>Back</h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
          </div>
          <div className="mb-5">
            <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
          </div>
          <div className="flex justify-center mt-7">
        <button type="submit" className="w-full max-w-[350px] text-white bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3">Submit</button>
      </div>

      <p className="mt-5 text-center text-textColor">
        Don&apos; t have an account <Link to="/register" className="ml-1 font-medium text-primaryColor">Register</Link>
      </p>
        </form>
      </div>
     

    </section>
  );
};

export default Login;
