import Navbar from "./navbar";
import Footer from "./footer";
import { Box } from "@chakra-ui/layout";

function Layout({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Box pt={{ base: "100px", md: "120px" }} bgColor="white" minH="100vh">
        {children}
      </Box>
      <Footer />
    </div>
  );
}

export default Layout;
