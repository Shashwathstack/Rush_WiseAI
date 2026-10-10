import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/charts/styles.css';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  primaryColor: 'orange',
  colors: {
    orange: [
      '#FFF3E0',
      '#FFE0B2',
      '#FFCC80',
      '#FFB74D',
      '#FFA726',
      '#FF9800',
      '#FB8C00',
      '#F57C00',
      '#EF6C00',
      '#E65100',
    ],
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
