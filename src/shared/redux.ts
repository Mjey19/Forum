import {
  combineReducers,
  createSelector,
  ThunkAction,
  UnknownAction,
  configureStore,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import likeReducer from "@/features/post/like-slice"; // Импортируйте редюсер, а не действие

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<
  R,
  AppState,
  unknown,
  UnknownAction
>;

// Объедините редюсеры
export const rootReducer = combineReducers({
  like: likeReducer,
});

// Создайте хранилище
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Определите тип корневого состояния
export type RootState = ReturnType<typeof rootReducer>;

// Создайте типизированные хуки
export const useAppSelector: <TSelected>(
  selector: (state: AppState) => TSelected
) => TSelected = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppStore = () => useStore<typeof store>();

// Создайте типизированный селектор
export const createAppSelector = createSelector;
