import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Testimonials from '../Testimonials/Testimonials'
import Location from '../Location/Location'
import Footer from '../Footer/Footer'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Login = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    navigate(`/profile`)
  }

  return (
    <div style={{width: '100%'}}>
         <div>
            <Navbar />
            <Hero />
            <About />
            <Testimonials />
            <Location />
            <Footer />
          </div>
    </div>
  );
};

export default Login;