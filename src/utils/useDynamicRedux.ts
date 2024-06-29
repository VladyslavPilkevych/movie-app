// import { useEffect, useSelector } from 'react';
// import { useDispatch } from 'react-redux';
// import { Reducer } from 'redux';
// import store, { RootState, AppDispatch } from '../store';

// export const useDynamicReducer = (key: string, reducer: Reducer) => {
//   useEffect(() => {
//     store.injectReducer(key, reducer);
//   }, [key, reducer]);
// };

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector = <TSelected>(selector: (state: RootState) => TSelected): TSelected => {
//   return useSelector<RootState, TSelected>(selector);
// };

export const test = "test";