import { createContext, useContext, useState } from "react"

const solarContext = createContext()

export default function SolarProvider({ children }) {
  const [pi, setPi] = useState(0)

  return <solarContext.Provider value={{ pi, setPi }}>{children}</solarContext.Provider>;
}

export function useSolarContext() {
  return useContext(solarContext)
}