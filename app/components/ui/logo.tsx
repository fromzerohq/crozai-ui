import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={64} height={64} />
      {/* <h1 className="text-white text-[1.5rem] font-nacelle font-semibold ml-2 mt-1"  >Crozai</h1> */}
    </Link>
  );
}
