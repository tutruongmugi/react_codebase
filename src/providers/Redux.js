import { Provider } from "react-redux";
import { store } from "../lib/redux";
import { Routers } from "./Routers";

export function Redux() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
