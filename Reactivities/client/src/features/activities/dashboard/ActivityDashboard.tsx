import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
  return (
    <Grid2 container spacing ={2} sx={{marginTop: 2}}>
        <Grid2 size={8}>
          <ActivityList />
        </Grid2>  
        <Grid2 size={4} sx={{display: {xs: 'none', md: 'block'}}}>
          <ActivityFilters />
        </Grid2> 
    </Grid2>
  )
}