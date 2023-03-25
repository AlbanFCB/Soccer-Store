import { FavoriteProduct, StoreProduct, UserInfo } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

export interface ShopperState {
  productData: StoreProduct[];
  userInfo: null | UserInfo;
  filteredProducts: StoreProduct[];
  searchQuery: string;
  favoriteProducts: FavoriteProduct[];
}

const initialState: ShopperState = {
  productData: [],
  userInfo: null,
  filteredProducts: [],
  searchQuery: "",
  favoriteProducts: [],
};

export const shopperslice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item) {
        item!.quantity++;
      }
    },

    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addToFavorites: (state, action) => {
      const itemIndex = state.favoriteProducts.findIndex(
        (item: FavoriteProduct) => item._id === action.payload._id
      );
    
      if (itemIndex !== -1) {
        const item = state.favoriteProducts[itemIndex];
        item.isFavorite = !item.isFavorite;
    
        // If the item is no longer a favorite, remove it from the list
        if (!item.isFavorite) {
          state.favoriteProducts.splice(itemIndex, 1);
        }
      } else {
        // Add the item to the favorites list with the updated isFavorite value
        const updatedItem = {
          ...action.payload,
          isFavorite: true,
        };
        state.favoriteProducts.push(updatedItem);
      }
    },
    removeFromFavorites: (state, action) => {
      console.log("removeFromFavorites reducer called");
      const item = state.favoriteProducts.find(
        (item: FavoriteProduct) => item._id === action.payload._id
      );

      if (item) {
        item.isFavorite = false;
      }
    },
    removeFavoritesInPage: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (item: FavoriteProduct) => item._id !== action.payload._id
      );
    },
  },
});

export const {
  addToCart,
  minusQuantity,
  plusQuantity,
  deleteItem,
  resetCart,
  addUser,
  removeUser,
  setFilteredProducts,
  setSearchQuery,
  addToFavorites,
  removeFromFavorites,
  removeFavoritesInPage
} = shopperslice.actions;
export default shopperslice.reducer;
