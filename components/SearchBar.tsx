import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ShopperState, setFilteredProducts, setSearchQuery } from "@/redux/shopperSlice";
import { Item } from "@/type";

const SearchBar = ({productData}:any) => {
    const dispatch = useDispatch();
    const shopperState = useSelector((state: { shopper: ShopperState }) => state.shopper);
    const { searchQuery } = shopperState;

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
    const filteredProducts = productData.filter((product: Item) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setFilteredProducts(filteredProducts));
  }

  return (
    <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search items"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
              <IoSearchOutline />
            </span>
          </div>
  )
}

export default SearchBar;