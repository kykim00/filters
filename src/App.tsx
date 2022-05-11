import { QueryClientProvider } from "react-query";
import MainPage from "./pages";
import { getClient } from "./queryClient";

function App() {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
