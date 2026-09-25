import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  // const [state, setState] = useState(initialValue)
  const [cart, setCart] = useState([])
  const [user, setUser] = useState({name: "Leo", id: 70})

  return (
    <GlobalContext.Provider value={{
      cart: cart,
      user: user
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;