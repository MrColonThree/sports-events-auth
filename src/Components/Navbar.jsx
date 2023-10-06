import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const profileMenuItems = (
    <ul className="space-y-2 font-semibold p-2">
      <li>
        <NavLink className="flex gap-1">
          <UserCircleIcon className="w-5"></UserCircleIcon> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <Cog6ToothIcon className="w-5"></Cog6ToothIcon> Edit Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <InboxArrowDownIcon className="w-5"></InboxArrowDownIcon>Inbox
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <LifebuoyIcon className="w-5"></LifebuoyIcon> Help
        </NavLink>
      </li>
      <li>
        <NavLink onClick={logOut} className="flex gap-1 text-red-500">
          <PowerIcon className="w-5"></PowerIcon>Sign Out
        </NavLink>
      </li>
    </ul>
  );
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        {user && (
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-blue-600">{user.displayName}</p>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <img
                className="rounded-full w-12"
                src={
                  user.photoURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                }
                alt=""
              />

              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform text-black ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        )}
      </MenuHandler>
      <MenuList className="p-1">{profileMenuItems}</MenuList>
    </Menu>
  );
}

export function CustomizeNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  const navLinks = (
    <ul className="mb-4 text-lg mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 font-semibold list-none">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-2 pl-3 pr-4 md:bg-transparent hover:text-gray-500 text-black md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Contact
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " block py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
                : " block py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
            }
            aria-current="page"
            variant="small"
          >
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 max-w-screen-xl">
        <NavLink
          to="/"
          className="mr-4 ml-2  text-2xl font-bold cursor-pointer text-black"
        >
          SPORTACULAR360
        </NavLink>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:block">{navLinks}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <AiOutlineClose className="text-xl" />
            ) : (
              <AiOutlineBars className="text-xl" />
            )}
          </IconButton>
          {user && <ProfileMenu />}
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-hidden">
        {navLinks}
      </Collapse>
    </Navbar>
  );
}
