import { useState } from "react";
import Logo from "../../images/logo/logo.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";
import { IconMenu2, IconX, IconBook } from "@tabler/icons-react";
import {BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openSidebar = () => {
    setSideBar(true);
  };

  const closeSidebar = () => {
    setSideBar(false);
  };

  window.addEventListener("scroll", handleScroll);

  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Schedule",
      link: "/schedule/monday",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Classes",
      link: "/classes",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            width={150}
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>

        <div className="flex items-center gap-10">
          <IconBook
            className={`text-white cursor-pointer  ${
              sideBar ? "hidden" : ""
            }`}
            onClick={openSidebar}
          />

          {sideBar && (
            <div className="fixed inset-0 z-50">
              <div
                className={`flex flex-col w-[40rem] min450:w-full h-screen p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] bg-white `}
              >

                <div className="flex justify-between items-center">

                  <IconX className="text-black ml-auto cursor-pointer"  onClick={closeSidebar} width={30} height={30} />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark text-[#F28C28] text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src={SideImg1}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg2}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg3}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg4}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg5}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg6}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#F28C28] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-location-dot text-[#F28C28]"></i>
                    &nbsp; 59 Street, House Newyork City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#F28C28] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-[#F28C28]"></i>&nbsp;
                    +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#F28C28] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-[#F28C28]"></i>
                    &nbsp; fitness@fitness.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>


              <div className="flex gap-7 text-[18px] text-white min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-[#F28C28] rounded-full py-[14px] px-[14px] cursor-pointer"
                ><BsFacebook/></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-[#F28C28] rounded-full py-[14px] px-[14px] cursor-pointer"
                ><BsTwitter/></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-[#F28C28] rounded-full py-[14px] px-[14px] cursor-pointer"
                ><AiFillInstagram/></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-[#F28C28] rounded-full py-[14px] px-[14px] cursor-pointer"
                ><BsYoutube/></i>
              </div>
                </div>
              </div>
              </div>
          )}

          <IconMenu2
            className={`nav-hamburger text-white cursor-pointer ${hamburger ? "hidden" : ""}`}
            onClick={hamburgerMenu}
          />

          {hamburger && (
            <div className="fixed inset-0 bg-white z-50">
              <span
                className="absolute top-4 right-4 cursor-pointer"
                onClick={hamburgerMenu}
              >
                <IconX className="text-black cursor-pointer" width={30} height={30} />
              </span>
              <div className="h-full flex flex-col justify-center items-center">
                <ul className="flex flex-col items-center gap-10">
                  {navlinks.map((item) => (
                    <li key={item.name} onClick={hamburgerMenu}>
                      <a href={item.link} className="text-4xl font-medium text-black py-2 hover:text-[#F28C28] ease-in duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2 p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to="/contact"
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center"
            >
              <i
                className={`fa-solid fa-plus bg-[#F28C28] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


