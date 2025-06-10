import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Open Sans, sans-serif",
      }}
      defaultColorScheme="light"
    >
      <Home />
    </MantineProvider>
  );
};

export default App;



