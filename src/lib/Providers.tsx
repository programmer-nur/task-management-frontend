'use client'

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type PropsType = {
  children:ReactNode
}

const Providers = ({children}:PropsType) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Providers;
