export const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
};

//  here there are two vars newbasket and newBasket beware!!!

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newbasket = [...state.basket, action.item];
      localStorage.setItem("basket", JSON.stringify(newbasket));
      return { ...state, basket: newbasket };

    case "REMOVE_FROM_BASKET":
      console.log("inseide remove");
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(newBasket));
      } else {
        console.warn(
          `Can't remove product(id:${action.id})from basket as it is not present`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
