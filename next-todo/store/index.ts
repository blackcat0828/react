import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector as useReduxSelector,  } from "react-redux";
import todo from "./todo";

//* 타입 지원되는 커스텁 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

//리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모으게 된다.
const rootReducer = combineReducers({
    todo: todo.reducer,
});


//합쳐진 리듀서에 타입이 "__NEXT_REDUX_WRAPPER_HYDRATE__"인 리듀서를 추가하게 된다.
//Hydrate는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
const reducer = (state, action) => {
    if(action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if(state.count) nextState.count = state.count;
        return nextState;
    };
    return rootReducer(state, action);
}

//* 스토어의 타입
//스토어의 타입을 루트 리듀서로부터 얻을수 있다.
export type RootState = ReturnType<typeof rootReducer>;


//* 미들웨어 적용을 위한 스토어 enhancer
//리덕스에서 미들웨어는 액션이 디스패치 되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미한다.
//리덕스 데브툴 확장 프로그램을 사용하기 위해 미들웨어에 리덕스 데비툴을 사용하도록 하는 코드이다.
// const bindMiddleware = (middleware: any) => {
//     if (process.env.NODE_ENV !== "production"){
//         const { composeWithDevTools} = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };


//리덕스 툴킷사용시 기본적으로 devtool이 들어있기에  initstore에서 설정만 해주면 사용가능.

//리듀서와 미들웨어로 리덕스 스토어를 만들어 리턴하게 된다.
//App 컴포넌트에서 wrapper로 사용하기 위해 'next-redux-wrapper'에서 createWrapper를 import 하여 wrapper를 만들었다.
const initStore = () => {
    return configureStore({
        reducer,
        devTools: true
    });
}

export const wrapper = createWrapper(initStore);