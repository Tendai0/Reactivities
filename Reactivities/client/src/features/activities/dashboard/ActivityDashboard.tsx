import { Grid2,  } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../activitiesDetails/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
type Props ={
    activities: Activity[];
    SelectActivity: (id: string) => void;
    CancelActivity: () => void;
    selectedActivity: Activity | undefined;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;

   
}
export default function ActivityDashboard({activities, SelectActivity, 
  CancelActivity, 
  selectedActivity, 
  openForm, 
  closeForm, 
  editMode,

 
}:Props) {
  return (
    <Grid2 container spacing ={2} sx={{marginTop: 2}}>
        <Grid2 size={7}>
          <ActivityList
           activities={activities} 
           SelectActivity={SelectActivity}
  
           />
        </Grid2>  
        <Grid2 size={5} sx={{display: {xs: 'none', md: 'block'}}}>
          {selectedActivity && !editMode && <ActivityDetails SelectedActivity={selectedActivity}
            cancelSelectActivity={CancelActivity}
            openForm={openForm}
          />} 
          {editMode && <ActivityForm closeForm={closeForm}
           activity={selectedActivity} 
          />}
        </Grid2> 
    </Grid2>
  )
}