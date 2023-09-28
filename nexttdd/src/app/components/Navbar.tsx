import Link from "next/link";
import { NavbarConstant } from "../constants/NavbarConstant";

export const Navbar = () => {
    return (
        <div className="row">    
          <Link  href="/create">
            {NavbarConstant.createUser}
          </Link>
        </div>
      );
}
