import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
} from "@/redux/shopperSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  }, []);

  const _id = Number(product._id);

  return (
    <div className="w-full bg-white">
      <div className=" block max-w-contentContainer mx-auto lg:flex items-center py-4">
        <div className="w-full lg:w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={product.image}
            alt=""
            className="w-[80%] transform-origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-full lg:w-1/3 h-full flex flex-col gap-2">
          <p className="m-4 lg:m-0 p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 ounrded-md">
            500+ bought since yesterday
          </p>
          <div className="m-4 lg:m-0 px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm">
                  Best seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty
                className={`text-6xl cursor-pointer ${
                  !product.isFavorite ? "text-red-500" : ""
                }`}
                onClick={() => {
                  if (!product.isFavorite) {
                    dispatch(
                      addToFavorites({
                        _id: _id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        brand: product.brand,
                        category: product.category,
                        image: product.image,
                        isFavorite: true, // Set isFavorite to true when adding to favorites
                      })
                    );
                    toast.success(
                      `${product.title.substring(0, 20)} is added to favorite!`
                    );
                  } else {
                    dispatch(removeFromFavorites(_id));
                    toast.success(
                      `${product.title.substring(
                        0,
                        20
                      )} is removed from favorite!`
                    );
                  }
                }}
              />
            </div>
            {/* Product Info */}
            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">
                {product.brand}
              </p>
              <p className="text-xl font-semibold text-black">
                {product.title}
              </p>
              <p className="text-base text-zinc-500">{product.description}</p>
              <div className="flex gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>25</p>
            </div>
            {/* Online Info */}
            <div className="text-sm text-black flex flex-col gap-1">
              <p>
                <span className="font-semibold">$18/mo</span>{" "}
                <span className="font-bold">withAffirm</span>{" "}
                <span className="underline underline-offset-2">Learn how</span>{" "}
              </p>
            </div>
            <div className="flex items-end gap-2">
              <p className="font-semibold text-2xl text-[#2a8703]">
                Now ${product.price}
              </p>
              <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                ${product.oldPrice}{" "}
                <span>
                  <BsInfoCircle />
                </span>
              </p>
            </div>
            {/* Add To Cart */}
            <div className="border-b-[1px] border-b-zinc-300 pb-4">
              <button
                className="w-32 h-10 bg-blue text-white rounded-gull hover:bg-[#004f9a] duration-300"
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      brand: product.brand,
                      category: product.category,
                      image: product.image,
                      quantity: 1,
                    })
                  ) &&
                  toast.success(
                    `${product.title.substring(0, 20)} is added to cart!`
                  )
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ProductDetails;
