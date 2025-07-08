import { Box, Container, CssBaseline } from "@mui/material";

import NavBar from "./NavBar";
import { Outlet } from "react-router";


function App() {

    return (
        <Box sx={{ bgColor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 2 }}>
               <Outlet />
            </Container>
        </Box>
    );
}
export default App;
