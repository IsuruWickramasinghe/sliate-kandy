import React, { createContext, useContext, useState, useEffect } from "react";
import client from "../config/sanity_config";

const Context = createContext();

export const StateContext = ({children}) => {

  const [isLoading,setIsLoading] = useState(true)

  const [heroBanners,setHeroBanners] = useState([])

  // home page
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const queryBanners = '*[_type == "hero_banner"]'
        const docBanners = await client.fetch(queryBanners)
        setHeroBanners(docBanners)

        setIsLoading(false)
      }
      catch(err){
        setIsLoading(true)
        console.error(err.message);
      }
    }
    fetchData()
  },[])

  return (
    <Context.Provider 
    value={{
      isLoading,
      heroBanners,
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)