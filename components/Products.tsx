import { Item } from "@/type";
import React, { useState } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ShopperState, addToCart } from "@/redux/shopperSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import SearchBar from "./SearchBar";

const Products = ({ productData }: any) => {
  const { filteredProducts } = useSelector((state: { shopper: ShopperState }) => state.shopper);
  const dispatch = useDispatch();

  const productsToDisplay = filteredProducts.length === 0 ? productData : filteredProducts;

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(productsToDisplay.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayProducts = productsToDisplay.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

  return (
    <div>
      <SearchBar productData={productData}/>
      <div className="py-6 px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayProducts?.map((item: Item) => (
          <div
            key={item._id}
            className="border-[1px] border-gray-200 mb-6 group"
          >
            <div className="w-full h-[350px] overflow-hidden p-1">
              <Image
                className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
                src={item.image}
                alt=""
                width={300}
                height={250}
              />
            </div>
            {/* Description */}
            <div className="px-2 py-4 flex flex-col justify-center">
              <div className="flex justify-between py-2">
                <button
                  className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300"
                  onClick={() =>
                    dispatch(
                      addToCart({
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
                    ) &&
                    toast.success(
                      `${item.title.substring(0, 20)} is added to cart!`
                    )
                  }
                >
                  <span>
                    <GoPlus />
                  </span>{" "}
                  Add
                </button>
                <Link
                  href={{
                    pathname: `product/${item._id}`,
                    query: {
                      _id: item._id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      oldPrice: item.oldPrice,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      isNew: item.isNew,
                    },
                  }}
                  as={`product/${item._id}`}
                >
                  <button className="w-24 h-9 bg-white border-[1px] border-black text-black rounded-full flex items-center justify-center gap-1 hover:bg-black hover:text-white duration-300">
                    <span>
                      <GoPlus />
                    </span>{" "}
                    Detail
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-titleFont text-lg text-green-700 font-semibold">
                  Now ${item.price}
                </p>
                <p className="text-gray-500 line-through decoration-[1px]">
                  ${item.oldPrice}
                </p>
              </div>
              <p className="text-lg font-semibold py-2">
                {item.title.substring(0, 25)}
              </p>
              <p className="text-base text-zinc-500">
                {item.description.substring(0, 80)}...
              </p>
              <div className="flex gap-2 items-center text-sm mt-2">
                <div className="flex text-sm gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
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
      <ReactPaginate
        className="flex justify-center pb-4"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link mr-3 hover:font-semibold"}
        nextLinkClassName={"pagination__link ml-3 hover:underline"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageClassName="mx-3 hover:font-semibold"
      />
    </div>
  );
};

export default Products;
