import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {

  const navigate = useNavigate();
  const {id} = useParams();
  const { activity, IsLoadingActivity } = useActivities(id);

  if(IsLoadingActivity) return <Typography>Loading...</Typography>;
  if(!activity) return <Typography>Activity Not found</Typography>; // Return null if activity not found
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
        <Button onClick={() => navigate(`/manage/${activity.id}`)} color="primary">
         Edit
        </Button>
        <Button onClick={() => navigate('/activities')} variant="contained" color="primary">
         Cancel
        </Button>
     </CardActions>
   </Card>
  )
}