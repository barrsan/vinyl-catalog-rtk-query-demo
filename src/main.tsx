import React from 'react';
import ReactDOM from 'react-dom/client';

import { Root } from '@/ui/Root';

import '@/index.css';

import { store } from '@/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
);
