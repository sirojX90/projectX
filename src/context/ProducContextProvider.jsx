import React, { useReducer, useState } from 'react';
import ProducContext from './produc-context';

const initialProducValue = {
  items: [],
  likes: [],
  totalPrice: 0,
};

const reducerProducts = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { payload: product } = action;
      const newItem = [...state.items];
      const findItem = newItem.find((item) => item.id === product.id);
      findItem ? findItem.count += 1 : newItem.unshift({...product, count: 1,});
      const totalPrice = newItem.reduce((acc, item) => acc + item.price * item.count, 0);
      return {
        ...state,
        items: newItem,
        likes: [],
        totalPrice: totalPrice,
      }; 
    };
    case "INC_DEC": {
      const { payload: product } = action;
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === product.id);
      product.toggle === 'inc' ? findItem.count++ : findItem.count--;
      const totalPrice = newItems.reduce((acc, item) => acc + item.price * item.count, 0);
      return {
        ...state,
        items: newItems,
        likes: [],
        totalPrice: totalPrice,
      }
    };
    case "DELITE": {
      const { payload: product } = action;
      const newItem = [...state.items];
      const deleteItem = newItem.filter((item) => item.id !== product.id);
      const totalPrice = deleteItem.reduce((acc, item) => acc + item.price * item.count, 0);
      return {
        ...state,
        items: deleteItem,
        likes: [],
        totalPrice: totalPrice,
      }
    };
    case "LIKE": {
      const { payload: product } = action;
      const newItem = [...state.likes];
      const findItem = newItem.find((item) => item.id === product.id);
      if (findItem) {
        const deletLike = newItem.filter((item) => item.id !== product.id);
        return {
          ...state,
          items: [],
          likes: deletLike,
          totalPrice: 0,
        }; 
      } else {
        newItem.unshift({...product, like: 1,});
        return {
          ...state,
          items: [],
          likes: newItem,
          totalPrice: 0,
        }; 
      };
    };
    case "DELLIK": {
      const { payload: product } = action;
      const newItem = [...state.likes];
      const deletLike = newItem.filter((item) => item.id !== product.id);
      return {
        ...state,
        items: [],
        likes: deletLike,
        totalPrice: 0,
      }; 
    };
  };
};
  const ProducContextProvider = ({children}) => {
  const [products, dispatch] = useReducer(reducerProducts, initialProducValue);
  const [route, setRoute] = useState('home');
  const onToggleRoute = (path) => setRoute(path);
  const onAddItem = (produc) => dispatch({type: "ADD", payload: produc});
  const onAddLike = (produc) => dispatch({type: "LIKE", payload: produc});
  const incdecHendler = (id, toggle) => dispatch({type: "INC_DEC", payload: { id, toggle }});
  const deleteItem = (produc) => dispatch({type: "DELITE", payload: produc});
  const deleteLike = (produc) => dispatch({type: "DELLIK", payload: produc});
  const contxtData = {
    ...products,
    route,
    onToggleRoute,
    onAddItem,
    onAddLike,
    incdecHendler,
    deleteItem,
    deleteLike,
  };
  return (
    <ProducContext.Provider value={contxtData}>
      {children}
    </ProducContext.Provider>
  );
};

export default ProducContextProvider;