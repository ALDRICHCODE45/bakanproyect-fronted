import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkingCredentials, logOut, login } from "../store/Auth/AuthSlice";
import { loadProducts, removeProductsLogOut } from "../store";
import { products } from "../store/Proyect/products";

export const useAuthStore = () => {
  const dispatch = useDispatch();

  const { status, user } = useSelector((state) => state.auth);

  const startLoginUser = useCallback(({ userName, password, rol }) => {
    dispatch(checkingCredentials());
    setTimeout(() => {
      try {
        const user = { userName, password, rol };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(login(user));
        dispatch(loadProducts(products));
      } catch (e) {
        /* handle error */
        dispatch(logOut("no se pudo iniciar sesion"));
      }
    }, 500);
  }, []);

  const startLogOutUser = useCallback(() => {
    dispatch(checkingCredentials());
    localStorage.removeItem("user");
    setTimeout(() => {
      try {
        dispatch(logOut());
        dispatch(removeProductsLogOut());
      } catch (e) {
        /* handle error */
        console.log(e);
      }
    }, 2000);
  }, []);

  const checkinAuthentication = useCallback(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return dispatch(logOut());
    } else {
      dispatch(loadProducts(products));
      dispatch(login(JSON.parse(user)));
    }
  }, []);

  return {
    //methods
    startLoginUser,
    startLogOutUser,
    checkinAuthentication,
    //values
    status,
    user,
  };
};
