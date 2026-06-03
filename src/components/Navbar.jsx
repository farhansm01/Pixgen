"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className=" px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link href="/" className="hover:text-purple-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-photos"
              className="hover:text-purple-500 transition-colors"
            >
              All Photos
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-purple-500 transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:text-purple-500 transition-colors"
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        {!user ? (
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/signin"
              className="text-sm px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <Avatar>
              <Avatar.Image
                alt="NO IMAGE"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user?.name?.[0]?.toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <Button
              onClick={handleSignOut}
              className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Sign Out
            </Button>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden pb-4 px-2 flex flex-col gap-3 text-sm">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/all-photos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-500 transition-colors"
          >
            All Photos
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/profile"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-500 transition-colors"
          >
            Profile
          </Link>
          {!user ? (
            <div className="flex items-center gap-2 mt-2">
              <Link
                href="/signin"
                className="text-sm px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2 mt-2">
              <Avatar>
                <Avatar.Image
                  alt="NO IMAGE"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.[0]?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleSignOut}
                className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
