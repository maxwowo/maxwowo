import {
  AppComponent,
  AppProps,
} from 'next/dist/next-server/lib/router/router';
import "tailwindcss/tailwind.css";

const App: AppComponent = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
