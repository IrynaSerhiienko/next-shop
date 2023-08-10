import { createContext, useState, useContext } from 'react'

const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [formData, setFormData] = useState({});

  const setValues = (values) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      ...values
    }))
  }

  return <DataContext.Provider value={{formData, setValues}}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)