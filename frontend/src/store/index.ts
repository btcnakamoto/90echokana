import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

// 创建临时reducer
const tempReducer = (state = {}, action: any) => {
  return state;
};

// 导入未来会创建的reducer
// import userReducer from '../features/user/userSlice';
// import learningReducer from '../features/learning/learningSlice';

export const store = configureStore({
  reducer: {
    // 添加临时reducer避免错误
    temp: tempReducer,
    // 未来会添加的reducer
    // user: userReducer,
    // learning: learningReducer,
  },
});

// Redux类型定义
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 自定义钩子
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 