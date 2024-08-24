import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { generatePath, useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useNavigateParams = () => {
  const navigate = useNavigate()

  return (url: string, params?: Record<string, string | undefined>) => {
    const path = generatePath(url, params);
    navigate(path);
  };
}
