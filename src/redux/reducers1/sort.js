const initialState = {
  price: 0,
};

export function sorting(state = initialState, action) {
  //console.log("action.payload.price");
  switch (action.type) {
    case "sort":
      console.log(action.payload);
      return {
        ...state,
        price: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
