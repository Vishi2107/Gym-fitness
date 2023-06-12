import { useEffect , useState } from 'react';
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import { SelectedPage } from '@/shared/types';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex justify-between items-center";

  return (
    <nav>
      <div 
        className = {`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="logo" />
            {/* Right side */}
            <div className={`${flexBetween} w-full`}>
               {/* Inner left side */}
              <div className={`${flexBetween} text-sm gap-8`}>
                <Link 
                  page ="Home" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link 
                  page="Our classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link 
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <button>Become a member</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;

