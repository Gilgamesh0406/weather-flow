import { createContext, useState } from "react";

export const WeatherInformation = createContext();

export default function WeatherInformationProvider({ children }) {
  const [data, setData] = useState([])
  return (
    <WeatherInformation.Provider value={{data,setData}}>
      {children}
    </WeatherInformation.Provider>
  );
}
