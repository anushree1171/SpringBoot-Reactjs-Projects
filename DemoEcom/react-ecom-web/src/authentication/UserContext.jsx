
import React, { createContext, useContext, useReducer } from 'react';

const initialUserState = {
  users: []
};

// Actions
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.username !== action.payload.username)
      };

    case AUTHENTICATE_USER:
      const { username, password } = action.payload;
      const user = state.users.find(
        user => user.username === username && user.password === password
      );
      return user ? { ...state, authenticatedUser: user } : state;

    default:
      return state;
  }
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const addUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };

  const removeUser = (username) => {
    dispatch({ type: REMOVE_USER, payload: { username } });
  };

  const authenticateUser = (username, password) => {
    dispatch({ type: AUTHENTICATE_USER, payload: { username, password } });
    return state.users.find(
      user => user.username === username && user.password === password
    );
  };

  return (
    <UserContext.Provider value={{ state, addUser, removeUser, authenticateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
