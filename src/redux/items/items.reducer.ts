import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DATA } from "../../utils/constants";

type DataType = {
    id: number;
    order: number;
    type: string;
    category: string;
    description: string;
}

interface InitialProps {
    data: Array<DataType> | null
}

const initialState: InitialProps = {
    data: null,
} as InitialProps

const itemSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<Array<DataType> | null>) => {            
            state.data = action.payload
        },
        search: (state, action: PayloadAction<string | number>) => {
            let payloadType: DataType
            const payload = action.payload as keyof typeof payloadType
            if (state.data !== null) {
                state.data = DATA.filter(item => 
                    item.order.toString().includes(payload.toString().toLowerCase()) || 
                    item.type.toLowerCase().includes(payload.toString().toLowerCase()) || 
                    item.category.toLowerCase().includes(payload.toString().toLowerCase())
                )
            }
        }
    }
})

export const { addItems, search } = itemSlice.actions;
export default itemSlice.reducer