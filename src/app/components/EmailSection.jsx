"use client";
import React, { useState } from "react";
import LinkedinIcon from "../../../public/linkedin.svg";
import GithubIcon from "../../../public/github.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

export default function EmailSection() {

  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      from_mail: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      to_name: "Vamshi Sasupalli",
    };
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID

    try {
      setEmailSubmitting(true)
      const response = await emailjs.send(
        serviceId,
        templateId,
        data,
        publicId
      )
      if (response?.text == 'OK') {
        setResponseMessage({ success: "Email sent successfully." })
        setEmailSubmitting(false)
      }
    } catch (error) {
      setResponseMessage({ error: "Unable to send email at the moment 😕." })
      setEmailSubmitting(false)
    }


  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          I&apos;m currently looking for new oppurtunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href={"https://www.linkedin.com/in/vamshi-sasupilli"}>
            <Image src={LinkedinIcon} alt="LinkedIn" />
          </Link>
          <Link target="_blank" href={"https://github.com/sp-vamshi/"}>
            <Image src={GithubIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div>
        <form id="contactForm" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              name="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="just saying Hi👋"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              name="message"
              id="message"
              required
              placeholder="we want to hire you..."
            />
          </div>
          <button
            type="submit"
            id="submitBtn"
            disabled={emailSubmitting}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div>

            {responseMessage.success &&
              <p className="text-green-500 text-sm mt-2">{responseMessage?.success}</p>
            }

            {
              responseMessage.error &&
              <p className="text-red-500 text-sm mt-2">{responseMessage?.error}</p>
            }
          </div>
          {/* <div className="border-t-[#bec4e4] border-b-2 mt-4 text-white"></div> */}
          <p className="text-white text-sm font-medium mt-4">Send me a direct email at  {" "} <a href="mailto:spvamshi22@gmail.com" className="font-bold text-primary-500 text-sm mb-2">spvamshi22@gmail.com</a></p>
        </form>
      </div>
    </section>
  );
}
