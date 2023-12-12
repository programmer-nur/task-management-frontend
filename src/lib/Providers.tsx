'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import StyledComponentsRegistry from './AntdRegistry';

type PropsType = {
  children: ReactNode;
};

function Providers({ children }: PropsType) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
}
export default Providers;
