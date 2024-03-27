import UserNavbar from "@/components/UserNavbar";
import { NavigationMenuDemo } from "@/components/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <NavigationMenuDemo/> */}
      {/* <UserNavbar /> */}
      <div>
        <Link
          className="bg-slate-400 p-3 inline-block m-2 rounded-lg "
          href={"/user"}
        >
          User Route
        </Link>
      </div>

      <div>
        <Link
          className="bg-slate-400 p-3 inline-block m-2 rounded-lg"
          href={"/admin"}
        >
          Admin Route
        </Link>
      </div>
    </main>
  );
}
