import Link from "next/Link";
import Image from "next/Image";
const Logo = () => {
  return (
    <Link href="/">
      <div class="hover:opacity-70 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p class="text-lg text-neutral-700 pb-1">Taskify</p>
      </div>
    </Link>
  );
};

export default Logo;
