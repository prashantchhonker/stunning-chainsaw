import {configureStore, createEntityAdapter, createSlice, current} from "@reduxjs/toolkit"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {setupListeners} from "@reduxjs/toolkit/query"

//--------------

const gallery_slice = createSlice({
    name: 'gallery',
    initialState: {
        images: [
            "000274220009.jpg",
            "000384750005.jpg",
            "000400280012.jpg",
            "IMG_0488.JPG",
            "IMG_0499.JPG",
            "IMG_0500.JPG",
            "31C07884-4475-4AEB-818C-381EE0DF05A5.jpg",
            "IMG_0535.JPG",
            "IMG_1229.JPG",
            "IMG_1810.JPG",
            "IMG_1812.JPG",
            "IMG_1818.JPG",
            "IMG_2056.JPG",
            "IMG_2647.JPG",
            "IMG_3210.JPG",
            "IMG_3222.JPG",
            "IMG_3235.JPG",
            "IMG_3265.JPG",
            "IMG_3283.JPG",
            "IMG_3724.JPG",
            "IMG_3840.JPG",
            "IMG_3851.JPG",
            "IMG_3857.JPG",
            "IMG_4332.PNG",
            "IMG_4380.JPG",
            "IMG_4388.JPG",
            "IMG_4424.JPG",
            "IMG_4427.JPG",
            "IMG_4429.JPG",
            "IMG_4453.JPG",
            "IMG_4457.JPG",
            "IMG_4458.JPG",
            "IMG_4461.JPG",
            "IMG_4466.JPG",
            "IMG_4477.JPG",
            "IMG_4493.JPG",
            "IMG_4494.JPG",
            "IMG_4504.JPG",
            "IMG_4571.JPG",
            "IMG_6641.PNG",
            "IMG_6642.PNG",
            "IMG_6670.JPG",
            "IMG_6685.JPG",
            "IMG_6703.JPG",
            "IMG_7403.JPG",
            "IMG_7719.JPG",
            "IMG_7896.JPG",
            "IMG_7915.JPG",
            "IMG_7963.JPG",
            "IMG_8716.JPG",
            "IMG_8724.JPG",
            "IMG_9257.JPG",
            "IMG_9261.JPG",
            "IMG_9264.JPG",
            "IMG_9266.JPG",
            "IMG_9277.JPG",
            "IMG_9289.JPG",
            "IMG_9293.JPG",
            "IMG_9299.JPG",
            "IMG_9300.JPG",
            "IMG_9924.PNG",
        ]
    },
    reducers: {
        // set_current_branch: (state, action) => {
        //     state.current_branch = action.payload
        // },
    }
})

export const all_images_selector = (state) => state.gallery.images

//--------------

export const store = configureStore({
    reducer: {
        gallery: gallery_slice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})
setupListeners(store.dispatch)

// transformResponse: (response, meta, arg) => {
//     console.log(response)
//     return response
// },
