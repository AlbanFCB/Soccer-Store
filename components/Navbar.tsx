import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/assets/images/logoSoccer.jpg";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser, removeUser } from "@/redux/shopperSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const productData = useSelector((state: any) => state.shopper.productData);
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      );
    } else {
      dispatch(removeUser());
    }
  }, [session, dispatch]);

  useEffect(() => {
    let price = 0;
    productData.map((item: any) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <div className="w-full bg-blue text-white sticky top-0 z-50">
      <div className="w-full h-full border-b-[1px] border-b-white">
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/">
            <div className="pr-5">
              <Image src={logo} alt="logo" className="w-44" />
            </div>
          </Link>

          <div className="hidden lg:flex">
            <div className="navBarHover">
              <div className="w-4 grid grid-cols-2 gap-[2px]">
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
              </div>
              <p className="text-base font-semibold">My Orders</p>
            </div>
          </div>

          <Link href="/favorites">
            <div className="hidden navBarHover lg:flex">
              <AiOutlineHeart />
              <div>
                <p className="text-xs">Recorder</p>
                <h2 className="text-base font-semibold mt-1">My Items</h2>
              </div>
            </div>
          </Link>

          {userInfo ? (
            <div
              className="hidden lg:flex navBarHover"
              onClick={() => signOut()}
            >
              <Image
                className="w-10 rounded-full object-cover"
                width={500}
                height={500}
                src={userInfo.image}
                alt=""
              />
              <div>
                <p className="text-xs">Sign Out</p>
                <h2 className="text-base font-semibold mt-1">
                  {userInfo.name}
                </h2>
              </div>
            </div>
          ) : (
            <div
              className="hidden lg:flex navBarHover"
              onClick={() => signIn()}
            >
              <AiOutlineUser className="text-lg" />
              <div>
                <p className="text-xs">Sign In</p>
                <h2 className="text-base font-semibold mt-1">Account</h2>
              </div>
            </div>
          )}

          <Link href="/cart">
            <div className="hidden lg:flex">
              <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative">
                <BsCart2 className="text-2xl" />
                <p className="text-sm -mt-2 font-semibold">${totalAmt}</p>
                <span className="absolute w-4 h-4 font-semibold bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">
                  {productData.length > 0 ? productData.length : 0}
                </span>
              </div>
            </div>
          </Link>

          <div className="lg:hidden">
            <button
              className="block text-3xl text-white hover:text-yellow focus:outline-none pr-6"
              onClick={handleToggleMenu}
            >
              {toggleMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          {toggleMenu && (
            <div className="absolute left-0 top-20 w-full bg-blue py-4">
              <div className="navBarHover mb-2 flex items-center justify-center hover:font-bold">
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                </div>
                <p className="text-base font-semibold">My Orders</p>
              </div>
              <Link href="/favorites">
                <div className="navBarHover mb-2 flex items-center justify-center hover:font-bold">
                  <AiOutlineHeart className="text-2xl" />
                  <div>
                    <p className="text-xs">Recorder</p>
                    <h2 className="text-base font-semibold mt-1">My Items</h2>
                  </div>
                </div>
              </Link>
              {userInfo ? (
                <div
                  className="navBarHover mb-2 flex items-center justify-center hover:font-bold"
                  onClick={() => signOut()}
                >
                  <Image
                    className="w-10 rounded-full object-cover"
                    width={500}
                    height={500}
                    src={userInfo.image}
                    alt=""
                  />
                  <div>
                    <p className="text-xs">Sign Out</p>
                    <h2 className="text-base font-semibold mt-1">
                      {userInfo.name}
                    </h2>
                  </div>
                </div>
              ) : (
                <div
                  className="navBarHover mb-2 flex items-center justify-center hover:font-bold"
                  onClick={() => signIn()}
                >
                  <AiOutlineUser className="text-2xl" />
                  <div>
                    <p className="text-xs">Sign In</p>
                    <h2 className="text-base font-semibold mt-1">Account</h2>
                  </div>
                </div>
              )}
              <Link href="/cart">
                <div className="flex items-center justify-center navBarHover duration-300 hover:font-bold">
                  <div className="flex justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent relative">
                    <BsCart2 className="text-2xl" />

                    <span className="absolute w-4 h-4 bg-yellow text-black top-1 left-8 rounded-full flex items-center justify-center font-bodyFont text-xs">
                      {productData.length > 0 ? productData.length : 0}
                    </span>
                    <p className="">My Cart</p>
                    <p className="text-sm font-semibold">${totalAmt}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <NavbarBottom />
    </div>
  );
};

export default Navbar;
