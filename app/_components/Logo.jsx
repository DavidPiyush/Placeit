import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
    >
      Logo
    </Link>
  );
}

export default Logo;
