import Image from "next/image";

const Header: React.FC = () => (
  <header className="w-full h-52 py-4 bg-black text-center">
    <Image
      className="m-auto mt-14"
      width={226}
      height={48}
      priority
      src={"/Logo.svg"}
      alt="Logo"
    />
  </header>
);

export default Header;
