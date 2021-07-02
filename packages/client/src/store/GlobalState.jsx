import React, { createContext, useReducer } from "react"
import reducers from "./Reducer"

export const DataContext = createContext({
  state: {},
  dispatch: () => null
})

export const DataProvider = ({ children }) => {
  const initialState = {
    auth: {},
    logged:true
  }
  const [state, dispatch] = useReducer(reducers, initialState)

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
