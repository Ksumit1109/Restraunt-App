import react, { useState } from "react";
import Layout from "./Components/Layout/Layout";
import Cart from "./Components/Cart/Cart";

function App() {
  
  const [CartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true)
  }

  const HideCartHandler = () => {
    SetCartIsShown(false)
  }

  return (
    <div>
      {CartIsShown && <Cart onClose={HideCartHandler}/>}
      <Layout  showCart={showCartHandler} />
    </div>
  );
}

export default App;
