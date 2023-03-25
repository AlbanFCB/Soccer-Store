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
  console.log(favoriteProduct);

  return (
    <div>
      {favoriteProduct?.map((favoris: FavoriteProduct, index: number) => (
        <div
          className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
          key={favoris._id ?? index}
        >
          <img className="w-32" src={favoris.image} alt="" />
          <h1>{favoris.title}</h1>
          <p>{favoris.description}</p>
          <button
            className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300"
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
