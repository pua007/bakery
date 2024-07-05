import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
    name: "members",
    initialState: {
        members: [], //[{회원 정보1},{회원 정보2},{회원 정보3},{회원 정보4}.....의 형태로 저장이 될겁니다]
        user: null,
    },
    reducers: {
        addMember(state, action) {
            state.members.push(action.payload);
        },

        userLogin(state, action) {
            const { userEmail, userPw } = action.payload;
            const findUser = state.members.find(
                (user) => user.userEmail == userEmail && user.userPw == userPw
            );
            /*             if (findUser) {
                state.user = findUser;
            } else {
                state.user = null;
            }  */
            //findUser ? (state.user = findUser) : (state.user = null);
            state.user = findUser ? findUser : null;
        },

        userLogout(state, action) {
            state.user = null;
        },
    },
});
export const { addMember, userLogin, userLogout } = memberSlice.actions;

export default memberSlice.reducer;
