import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

import { useAppDispatch } from '../app/hook'
import URL_CONST from '../constants/URL_const'
import { logout } from '../features/auth/authSlice'


export const useLogout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate(URL_CONST.SIGIN)
    toast.success("Logout successfully!", { theme: "colored" });
  }
  return logoutHandler
}
