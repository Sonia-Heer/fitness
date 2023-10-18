import { useState } from "react";
import Logo from "../../images/logo/logo.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
// import SideImg1 from "../../images/sidebar/1.jpg";
// import SideImg2 from "../../images/sidebar/2.jpg";
// import SideImg3 from "../../images/sidebar/3.jpg";
// import SideImg4 from "../../images/sidebar/4.jpg";
// import SideImg5 from "../../images/sidebar/5.jpg";
// import SideImg6 from "../../images/sidebar/6.jpg";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  // const [sidebar, setSideBar] = useState(false);
  // const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // // sidebar
  // const sideBar = () => {
  //   setSideBar(!sidebar);
  // };

  // // hamburger menu
  // const hamburgerMenu = () => {
  //   setHamburger(!hamburger);
  // };

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
          
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
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