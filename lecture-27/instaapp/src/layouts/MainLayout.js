import { Box } from "@material-ui/core";
import MainAppBar from "../components/MainAppBar";

export default function MainLayout({ children }) {

  return (
    <Box display="flex" width="100vw" height="100vh" flexDirection="column">
      <MainAppBar />
      {children}
    </Box>
  );
}
