import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
// import ActivityDetailsChat from "./activityDetailsChat";
// import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetailsPage() {


  const {id} = useParams();
  const { activity, IsLoadingActivity } = useActivities(id);

  if(IsLoadingActivity) return <Typography>Loading...</Typography>;
  if(!activity) return <Typography>Activity Not found</Typography>; // Return null if activity not found
  return (
   <Grid2 container spacing={2}>
        <Grid2 size={8}>
            <ActivityDetailsHeader activity={activity}/>
            <ActivityDetailsInfo activity={activity}/>
            {/* <ActivityDetailsChat activity={activity}/> */}
        </Grid2>
        <Grid2 size={4}>
          {/* <ActivityDetailsSidebar activity={activity}/> */}

        </Grid2>
    </Grid2>
  )
}