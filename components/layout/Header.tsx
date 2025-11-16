import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderFilter from "../common/HeaderFilter";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import InputField from "../common/InputField";
import { Search } from "lucide-react";
import Ads from "../common/Ads";

const Header: React.FC = () => {
  const [location, setLocation] = useState("");
  return (
    <header className="flex flex-col w-full">
      <Ads />
      <div className="flex items-center justify-between w-full gap-2 px-4 py-3 bg-white border-b border-gray-200 lg:px-6">
        <div className="hidden lg:w-1/4 md:flex">
          <Link href="/" className="text-2xl text-white hover:scale-105">
            <Image
              src="/assets/images/icons/alxLogo.png"
              alt="ALX Logo"
              width={58.73}
              height={30.6}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <HeaderFilter />
        </div>
        <div className="flex items-center justify-between gap-2 py-1 pl-6 pr-2 border border-gray-200 rounded-full sm:hidden">
          <InputField
            label="Where to?"
            placeholder="Location . Date . Add guest"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="people"
            type="text"
            className="max-w-md"
          />

          <Button
            size="none"
            onClick={() => console.log("Searching...")}
            iconLeft={<Search />}
            ariaLabel="Search for properties"
            className="flex items-center justify-center p-2 bg-[#FFA800] rounded-full"
          />
        </div>
        <div className="items-center hidden gap-4 lg:flex">
          <Button
            label="Sign In"
            className="hidden md:block bg-[#36927A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#36927A]/80 "
            onClick={() => console.log("Sign In Clicked")}
          />
          <Button
            label="Sign Up"
            variant="outline"
            className="hidden md:block"
            onClick={() => console.log("Sign Up Clicked")}
          />
        </div>
        <div className="block lg:hidden">
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;

// import Image from "next/image";
// import Navbar from "../common/Navbar";

// const Header = () => {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="bg-[#36927A] w-full py-3 mx-auto flex flex-wrap items-center justify-center gap-4 text-white px-4">
//         <Image
//           src="/assets/images/icons/message.png"
//           alt="Message Icon"
//           width={20}
//           height={20}
//         />

//         <p className="text-sm text-center">
//           Overseas trip? Get the latest information on travel guides
//         </p>

//         <button className="bg-black text-white px-4 py-1 rounded-full text-sm shrink-0">
//           More Info
//         </button>
//       </div>

//       <Navbar />
//     </div>
//   );
// };

// export default Header;
