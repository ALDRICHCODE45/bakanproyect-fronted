import { useDispatch, useSelector } from "react-redux";
import { checkingCredentials, logOut, login } from "../store/Auth/AuthSlice";
import { useCallback } from "react";
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
        dispatch(login(user));
        dispatch(loadProducts(products));
      } catch (e) {
        /* handle error */
        dispatch(logOut("no se pudo iniciar sesion"));
      }
    }, 2000);
  }, []);

  const startLogOutUser = useCallback(() => {
    dispatch(checkingCredentials());
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

  return {
    status,
    user,
    startLoginUser,
    startLogOutUser,
  };
};
