import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 flex flex-wrap items-center justify-between px-4 md:px-10 gap-4 overflow-x-hidden">
      {/* LOGO */}
      <div className="shrink-0 xs:hidden lg:block">
        <Image
          src="/assets/images/icons/alxLogo.png"
          alt="ALX Logo"
          width={50}
          height={20}
        />
      </div>

      {/* SEARCH BAR — RESPONSIVE */}
      <div
        className="
          flex flex-wrap md:flex-nowrap bg-white rounded-full shadow-sm 
          px-4 py-2 gap-4 items-center w-full md:w-auto
        "
      >
        <SearchItem title="Location" subtitle="Search for destination" />

        <Divider className="hidden md:block" />

        <SearchItem title="Check in" subtitle="Add date" />

        <Divider className="hidden md:block" />

        <SearchItem title="Check out" subtitle="Add date" />

        <Divider className="hidden md:block" />

        <SearchItem title="People" subtitle="Add guest" />

        {/* SEARCH BUTTON */}
        <button
          className="
            bg-[#FFB200] w-8 h-8 flex items-center justify-center 
            rounded-full shrink-0 ml-auto
          "
        >
          <Image
            src="/assets/images/icons/search.png"
            alt="Search Icon"
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-[#36927A] text-white px-6 py-2 rounded-full text-sm">
          Sign in
        </button>

        <button className="border border-gray-300 text-black px-6 py-2 rounded-full text-sm">
          Sign up
        </button>
      </div>
    </nav>
  );
}

const SearchItem = ({ title, subtitle }: any) => (
  <div className="flex flex-col">
    <span className="text-sm font-medium">{title}</span>
    <span className="text-xs text-gray-500">{subtitle}</span>
  </div>
);

const Divider = ({ className = "" }) => (
  <div className={`h-6 w-[1px] bg-gray-300 ${className}`}></div>
);
