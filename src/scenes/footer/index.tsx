import Logo from "@/assets/Logo.png";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    const inputStyles= "mb-5 w-5 h-5 border-radius-5 flex items-center justify-center cursor-pointer transition-all duration-300 ease-linear hover:bg-primary-500 hover:text-white hover:rounded-full"
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            It's very nice gym with top class of equipments of Life fitness and Hammer strength and people surrounding is also good, and staff of this branch is very kind and helpful.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">About us</p>
          <p className="my-5">Benefits</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Agrawal Dharamshala Marg, Model Town Phase 2, New Delhi</p>
          <p>(333)425-6825</p>
          <div className="flex items-center mt-5 gap-10">
                    <span className={inputStyles}>
                        <FaFacebookF />
                    </span>
                    <span className={inputStyles}>
                        <FaInstagram />
                    </span>
                    <span className={inputStyles}>
                        <FaTwitter />
                    </span>
                    <span className={inputStyles}>
                        <FaLinkedin />
                    </span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;