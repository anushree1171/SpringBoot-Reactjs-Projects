import React, { createContext, useReducer, useContext } from 'react';

const initialAddressState = {
  addresses: [],
};

const addressReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload.id
        ),
      };
    case 'REMOVE_ALL_ADDRESSES':
      return {
        ...state,
        addresses: [],
      };
    default:
      return state;
  }
};

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, initialAddressState);

  return (
    <AddressContext.Provider value={ {state, dispatch} }>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
