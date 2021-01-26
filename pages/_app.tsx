import {
  AppComponent,
  AppProps,
} from 'next/dist/next-server/lib/router/router';

const App: AppComponent = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
