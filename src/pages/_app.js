import '../styles/global.css';
import React from 'react';
import Menu from '../components/Menu';

export default function App({ Component, pageProps }) {
    return (
      <div style={{ background: '#141414' }}>
        <Menu/>
        <Component {...pageProps} />
      </div>
  );
}