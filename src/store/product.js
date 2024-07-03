import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//createSlice = reducer + actions 둘을 그룹화 시키는 역할
//reducer :  상태관리를 위해 사용라는 함수,특정한 action이 발생했을때 상태(state)를 어떠헥 변화시킬지를 정의 하는 역할을함
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    category: "all",
  },
  reducers: {
    initProducts(state, action) {
      state.products = action.payload;
    },
    onChangeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { initProducts, onChangeCategory } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("./assets/data/product.json");
    console.log(response);
    dispatch(initProducts(response.data));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default productSlice.reducer;
