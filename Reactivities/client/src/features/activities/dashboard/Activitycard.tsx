import { Button, Card, CardActions, CardContent, Chip, Typography,Box } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate } from "react-router";

type Props ={
    activity: Activity
    };

export default function ActivityCard({activity }: Props) {
  const { deleteActivity } = useActivities();
  const navigate = useNavigate();
  return (
    <Card sx={{borderRadius: 2, padding: 2, marginBottom: 2 }}>
        <CardContent>
                  <Typography variant="h5">{activity.title}</Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1 }}>{new Date(activity.date).toLocaleDateString()}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{activity.description}</Typography>
        <Typography variant="subtitle1">
            {activity.city}, {activity.venue}
        </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box> 
                  <Button onClick={() => deleteActivity.mutate(activity.id)}
                   size="small" 
                   variant="outlined" 
                   color="error"
                   disabled={deleteActivity.isPending}
                   >Delete</Button>
                  <Button onClick={() => navigate(`/activities/${activity.id}`)} size="medium" variant="contained">View Details</Button>
                </Box>            
        </CardActions>
    </Card>
  )
}