"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

type PropsType = {
  children: ReactNode;
};

const Providers = ({ children }: PropsType) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};
export default Providers;
