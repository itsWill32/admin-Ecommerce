
import { userRequest, publicRequest } from "../requestMethods";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./productRedux";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data)); 
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logoutUser = (dispatch, navigate) => {
    try {
        dispatch(logout());

        localStorage.removeItem("persist:root");

        navigate('/Login');
    } catch (err) {
        console.log('Error en el cierre de sesión:', err);
    }
};


export { userRequest };


export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products/allProducts");
      console.log("Productos obtenidos:", res.data);
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
      console.error("Error obteniendo productos:", err); 
    }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/createProduct`, product);
    console.log("Respuesta del servidor al añadir producto:", res.data);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
    console.log("Error añadiendo producto:", err.response ? err.response.data : err.message);
  }
};



export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/update/${id}`, product);
    console.log("Producto actualizado:", res.data);
    dispatch(updateProductSuccess({ id, product: res.data }));
  } catch (err) {
    dispatch(updateProductFailure());
    console.error("Error actualizando producto:", err.response ? err.response.data : err.message);
  }
};


  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/delete/${id}`);
      console.log("Producto eliminado:", res.data);
      dispatch(deleteProductSuccess(id)); 
    } catch (err) {
      dispatch(deleteProductFailure());
      console.error("Error eliminando producto:", err); 
    }
  };