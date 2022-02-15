import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    fetch("https://react-http-f7845-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify({
        items: cart.items,
        totalQuantities: cart.totalQuantities,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Error Occured!");
        }
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent Cart Data successfully.",
          })
        );
        return response.json();
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending Cart Data failed.",
          })
        );
      });
  };
};

export const fetchCartData = () => {
  return (dispatch) => {
    fetch("https://react-http-f7845-default-rtdb.firebaseio.com/cart.json")
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(cartActions.replaceCart(data));
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending Cart Data failed.",
          })
        );
      });
  };
};
