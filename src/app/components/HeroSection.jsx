"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {

  const handleHireMe = () => {
    const contactForm = document.getElementById("submitBtn")
    contactForm?.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => {
      const emailInput = document.getElementById("email")
      emailInput?.focus()
    }, 500);
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vamshi",
                1000,
                "MERN Developer",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-semibold">
            Let&apos;s Connect and Code with Purpose, Build with Passion.
          </p>
          ``
          <div>
            <button onClick={handleHireMe} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-b from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a target="_blank" href="https://drive.google.com/file/d/13xUA5NQZZ4COEWAihMIldGmZgIhIgyZq/view?usp=drivesdk" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download Resume{" "}
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/Images/ProfilePhoto.jpg"}
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Vamshi Sasupalli"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
