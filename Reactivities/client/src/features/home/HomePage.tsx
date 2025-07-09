import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Paper  sx={{
      color:'white', 
      marginTop: 4, 
      display: 'flex',
       flexDirection: 'column', 
       alignItems: 'center', 
       justifyContent: 'center', 
       height: '100vh', 
       textAlign: 'center', 
       padding: 2,
       backgroundImage:  'linear-gradient(135deg, #182a73 0%, #2196f3 90%, #20c9f5 89%)', 
       backgroundSize: 'cover', 
       backgroundPosition: 'center'}}>
     <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', color: 'white' ,gap: 2, flexDirection: 'column'}}>
       <Group sx={{ fontSize: '4rem',height:110,width:110 }}/>
       <Typography variant="h1">Reactivities</Typography>
     </Box>
     <Typography variant ="h5" sx={{ marginTop: 2, color: 'white' }}>
      Welcome to Reactivities, your go-to app for social activities!
     </Typography>
     <Button 
     onClick={() => navigate(`/activities`)}
     size="large"
     variant="contained" 
      sx={{ height:80,borderRadius: 4,  fontSize: '1.5rem' }}
     >
       Get Started
     </Button>
    </Paper>
  )
}