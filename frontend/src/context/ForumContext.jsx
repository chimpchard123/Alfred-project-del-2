import { createContext, useContext, useState } from 'react'

const ForumContext = createContext()

export function ForumProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null) // för framtida auth

  return (
    <ForumContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </ForumContext.Provider>
  )
}

export function useForum() {
  return useContext(ForumContext)
}
