import { Box, Container, CssBaseline } from "@mui/material";

import NavBar from "./NavBar";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";


function App() {
const location = useLocation();
    return (
        <Box sx={{ bgColor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            {location.pathname === '/' ? <HomePage/>: (
              <>
                   <NavBar />
            <Container maxWidth="xl" sx={{ mt: 2 }}>
               <Outlet />
            </Container>
              </>

            )}
           
        </Box>
    );
}
export default App;
