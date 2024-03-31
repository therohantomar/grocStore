import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInBasket {
    _id: string;
    p_id: string;
    p_name: string;
    p_category: string;
    p_description: {
      short: string;
      health_benefits: string;
      storage_tips: string;
    };
    p_image: string;
    p_price: number;
    quantity: number;
}

export interface BasketState {
  baskets: ProductInBasket[];
}

const initialState: BasketState = {
  baskets: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<{ payload: ProductInBasket }>) => {
      const {payload} = action;
    
      const productIndex = state.baskets.findIndex(
        (product: ProductInBasket) => product.p_id === payload.payload.p_id
      );

      if (productIndex === -1) {
        const newProduct = { ...payload.payload, quantity: 1 };
        state.baskets=[...state.baskets,newProduct]
      } else {
        state.baskets[productIndex].quantity += 1;
      }
    },
    removeProductFromBasket: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const productIndex = state.baskets.findIndex(
        (product: ProductInBasket) => product.p_id === productId
      );

      if (productIndex !== -1) {
        state.baskets.splice(productIndex, 1);
      }
    },
  },
});

export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
