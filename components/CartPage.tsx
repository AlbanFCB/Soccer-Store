import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProduct } from "@/type";
import Image from "next/image";
import { TbReload } from "react-icons/tb";
import { HiMinus } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import FormatePrice from "./FormatePrice";
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/redux/shopperSlice";
import warning from "../public/assets/images/warning.webp";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";

const CartPage = () => {
  const { data: session } = useSession();
  const stripePromise = loadStripe(process.env.stripe_public_key);
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shopper.productData);
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  const [warningMsg, setWarningMsg] = useState(false);
  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setWarningMsg(true);
    let oldPrice = 0;
    let savings = 0;
    let amt = 0;
    productData.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity;
      savings += item.oldPrice - item.price;
      amt += item.price * item.quantity;
    });
    setTotalOldPrice(oldPrice);
    setTotalSavings(savings);
    setTotalAmt(amt);
  }, [productData]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    //Create a checkout session
    const checkoutSession = await axios.post("api/create-checkout-session", {
      items: productData,
      email: session?.user?.email,
    });
    // Redirecting user/customer to Stripe Checkout
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) alert(result?.error.message);
  };

  return (
    <div className="w-full py-10">
      <div className="p-4 block w-full lg:p-0 lg:flex gap-10">
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black">
            Cart{" "}
            <span className="text-lightText font-normal">
              {productData.length} items
            </span>
          </h1>
          {/* Cart Product */}
          <div className="w-full p-5 border -[1px] border-zinc-400 rounded-md flex flex-col gap-4">
            <p className="font-semibold text-sm text-zinc-500">
              Sold and shipped by{" "}
              <span className="text-black font-semibold">Soccer-Store.com</span>
            </p>
            <div className="flex gap-2">
              <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm">
                Best seller
              </button>
              <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm">
                Rollback
              </button>
            </div>
            {/* Items */}
            <div>
              {productData.map((item: StoreProduct) => (
                <div
                  key={item._id}
                  className="block justify-center md:flex items-center md:justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                >
                  <div className="block mx-auto my-4 w-full md:w-3/4 md:flex md:items-center gap-2">
                    <div className="w-3/5 md:w-auto mx-auto">
                      <Image
                        className="w-full my-4"
                        width={500}
                        height={500}
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text-base text-zinc-900">{item.title}</h2>
                      <p className="text-sm text-zinc-500">
                        {item.description}
                      </p>
                      <p className="text-sm text-zinc-500">{item.price}</p>
                      <p className="text-sm text-zinc-500 flex items-center gap-1">
                        <span className="bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
                          <TbReload className="rotate-180" />
                        </span>
                        Free 30-day returns
                      </p>
                      {/* Buttons */}
                      <div className="mt-2 flex items-center gap-6">
                        <button
                          className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300"
                          onClick={() => dispatch(deleteItem(item._id))}
                        >
                          Remove
                        </button>
                        <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                          <button
                            className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            onClick={() =>
                              dispatch(
                                minusQuantity({
                                  _id: item._id,
                                  title: item.title,
                                  description: item.description,
                                  price: item.price,
                                  oldPrice: item.oldPrice,
                                  brand: item.brand,
                                  category: item.category,
                                  image: item.image,
                                  quantity: 1,
                                })
                              )
                            }
                          >
                            <HiMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            onClick={() =>
                              dispatch(
                                plusQuantity({
                                  _id: item._id,
                                  title: item.title,
                                  description: item.description,
                                  price: item.price,
                                  oldPrice: item.oldPrice,
                                  brand: item.brand,
                                  category: item.category,
                                  image: item.image,
                                  quantity: 1,
                                })
                              )
                            }
                          >
                            {" "}
                            <MdOutlineAdd />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-4 items-center md:w-1/4 text-right flex md:flex-col md:items-end gap-1">
                    <p className="font-semibold text-xl text-[#2a8703]">
                      <FormatePrice amount={item.price * item.quantity} />
                    </p>
                    <p className="text-sm line-through text-zinc-500">
                      <FormatePrice amount={item.oldPrice * item.quantity} />
                    </p>
                    <div className="flex items-center text-xs gap-2">
                      <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                        You save
                      </p>
                      <p className="text-[#2a8703] font-semibold">
                        {
                          <FormatePrice
                            amount={
                              item.oldPrice * item.quantity -
                              item.price * item.quantity
                            }
                          />
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300"
              onClick={() => dispatch(resetCart())}
            >
              Reset Cart
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 p-4 mt-16 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            {userInfo ? (
              <button
                className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded font-semibold duration-300"
                onClick={handleCheckout}
              >
                Continue to checkout
              </button>
            ) : (
              <button className="bg-blue bg-opacity-50 cursor-not-allowed w-full text-white h-10 rounded font-semibold duration-300">
                Continue to checkout
              </button>
            )}

            {!userInfo && (
              <p className="text-sm text-center text-red-500 -mt-4 font-semibold">
                Please sign in to checkout
              </p>
            )}
            {warningMsg && (
              <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                <Image className="w-8" src={warning} alt="" />
                <p className="text-sm">
                  Items in your cart have reduced prices. Check out now for
                  extra savings!
                </p>
                <IoMdClose
                  className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                  onClick={() => setWarningMsg(false)}
                />
              </div>
            )}
            <p className="text-sm text-center">
              For the best shopping experience,{" "}
              <span className="underline underline-offset-2 decoration-[1px]">
                sign in
              </span>
            </p>
          </div>
          {/* checkout price */}
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm flex justify-between">
                <p className="font-semibold">
                  Subtotal <span>({productData.length} items)</span>
                </p>
                <p className="line-through text-zinc-500 text-base">
                  <FormatePrice amount={totalOldPrice} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Savings</p>
                <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                  <FormatePrice amount={totalSavings} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Total Amount</p>
                <p className="text-zinc-800 font-normal text-base">
                  <FormatePrice amount={totalAmt} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm flex justify-between">
              <p>Shipping</p>
              <p className="text-[#2a8703]">Free</p>
            </div>
            <div className="text-sm flex justify-between">
              <p className="font-semibold">Taxes</p>
              <p className="text-zinc-800">Calculated at checkout</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Estimated total</p>
            <p className="text-zinc-800 font-bold text-lg">
              <FormatePrice amount={totalAmt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
