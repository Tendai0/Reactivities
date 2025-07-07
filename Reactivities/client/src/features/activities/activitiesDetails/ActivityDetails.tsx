import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props={
    SelectedActivity:Activity;
    cancelSelectActivity?: () => void; 
    openForm: (id?: string) => void; // Optional prop for cancel action
  // Define any props if needed
}
export default function ActivityDetails({SelectedActivity, cancelSelectActivity, openForm}: Props) {
   const {activities } = useActivities();

  const activity = activities?.find(a => a.id === SelectedActivity.id);

  if(!activity) return <Typography>Loading...</Typography>; // Return null if activity not found
  return (
   <Card sx={{borderRadius: 3, padding: 2, marginBottom: 2 }}>
     <CardMedia
       component="img"
       src={`/images/categoryImages/${activity.category}.jpg`}
       alt={activity.title}
       sx={{ borderRadius: 2, marginBottom: 2 }}
     />
     <CardContent>
       <Typography variant="h5">{activity.title}</Typography>
       <Typography variant="subtitle1" fontWeight="light">
         {activity.date}
       </Typography>
         <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            {activity.description}
        </Typography>
     </CardContent>
     <CardActions>
        <Button variant="contained" color="primary" onClick={() => openForm(activity.id)}>
         Edit
        </Button>
        <Button onClick={cancelSelectActivity} variant="contained" color="primary">
         Cancel
        </Button>
     </CardActions>
   </Card>
  )
}