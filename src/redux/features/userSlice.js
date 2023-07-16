import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const userSilce = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload
            const exitingUser = state.find((user) => user.id === id)
            if (exitingUser) {
                exitingUser.name = name;
                exitingUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const exitingUser = state.find((user) => user.id === id)
            if(exitingUser){
                return state.filter(user => user.id !== id)
            }
        }
    }

})

export const { addUser, editUser,deleteUser } = userSilce.actions
export default userSilce.reducer