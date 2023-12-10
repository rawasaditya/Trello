import Image from "next/Image";
const Logo = () => {
  return (
    <a href="/">
      <div className="hover:opacity-70 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1">Taskify</p>
      </div>
    </a>
  );
};

export default Logo;
