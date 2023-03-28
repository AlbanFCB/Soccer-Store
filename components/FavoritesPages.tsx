import {
  removeFavoritesInPage,
  removeFromFavorites,
} from "@/redux/shopperSlice";
import { FavoriteProduct } from "@/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoritesPages = () => {
  const dispatch = useDispatch();
  const favoriteProduct = useSelector((state: any) =>
    state.shopper.favoriteProducts.filter(
      (product: any) => product._id !== null
    )
  );

  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-12">
        My Favorites Products 💛
      </h1>
      {favoriteProduct?.map((favoris: FavoriteProduct, index: number) => (
        <div
          className="block lg:flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 p-4 my-8"
          key={favoris._id ?? index}
        >
          <img className="w-32 mx-auto" src={favoris.image} alt="" />
          <h1 className="font-semibold text-center my-6">{favoris.title}</h1>
          <p className="text-center lg:text-left mb-6">{favoris.description}</p>
          <button
            className="block mx-auto lg:mx-0 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
            onClick={() =>
              dispatch(removeFavoritesInPage({ _id: favoris._id }))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPages;
