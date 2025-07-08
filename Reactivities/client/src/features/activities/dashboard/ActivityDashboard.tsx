import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityDashboard() {
   

  return (
    <Grid2 container spacing ={2} sx={{marginTop: 2}}>
        <Grid2 size={7}>
          <ActivityList />
        </Grid2>  
        <Grid2 size={5} sx={{display: {xs: 'none', md: 'block'}}}>
          Activity filter goes here 
        </Grid2> 
    </Grid2>
  )
}