import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">

      <Link href="/signup" className="bg-blue-700 rounded-lg p-3 font-bold">SignUp</Link>
      <Link href="/login" className="bg-blue-700 rounded-lg p-3 font-bold">Login</Link>
    </div>
  );
}