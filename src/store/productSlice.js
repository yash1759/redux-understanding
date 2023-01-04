import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    SUCCESS: 'success',
    ERROR: "error",
    LOADING: "loading"
})

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: STATUS.SUCCESS
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.SUCCESS
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR
            })
    }

})

export const { setProducts, setStatus } = ProductSlice.actions
export default ProductSlice.reducer
export const fetchProducts = createAsyncThunk('product/listing', async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})


// export function fetchProducts() {
//     return async function fetchProductViaThunk(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await fetch("https://fakestoreapi.com/products")
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUS.SUCCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUS.ERROR))

//         }
//     }
// }