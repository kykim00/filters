import { Global } from "@emotion/react";
import { QueryClientProvider } from "react-query";
import MainPage from "./pages";
import { getClient } from "./queryClient";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
