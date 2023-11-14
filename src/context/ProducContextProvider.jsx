import React, { useReducer, useState } from 'react';
import ProducContext from './produc-context';

const initialProducValue = {
  totalPrice: 0,
  items: [],
};

const reducerProducts = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { payload: product } = action;
      const newItem = [...state.items];
      const findItem = newItem.find((item) => item.id === product.id);
      if(findItem){
        findItem.count += 1;
      } else {
        newItem.unshift({
          ...product,
          count: 1,
        })
      };
      return {
        ...state,
        items: newItem,
      }; 
    };
    case "INC_DEC": {
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === action.payload.id);
      action.payload.toggle === 'inc' ? findItem.count++ : findItem.count--;
      console.log(findItem);
      const totalPrice = newItems.reduce((acc, item) => acc + item.price * item.count, 0);
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      }
    };
  };
};
const ProducContextProvider = ({children}) => {
  const [products, dispatch] = useReducer(reducerProducts, initialProducValue);
  const [route, setRoute] = useState('home');
  const onToggleRoute = (path) => setRoute(path);
  const onAddItem = (produc) => dispatch({type: "ADD", payload: produc});
  const incdecHendler = (id, toggle) => dispatch({ type: "INC_DEC", payload: { id, toggle } });
  const contxtData = {
    ...products,
    route,
    onToggleRoute,
    incdecHendler,
    onAddItem,
  };
  return (
    <ProducContext.Provider value={contxtData}>
      {children}
    </ProducContext.Provider>
  );
};

export default ProducContextProvider;