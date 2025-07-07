import { Box } from "@mui/material";
import ActivityCard from "./Activitycard";
type Props={
    activities: Activity[];  
    SelectActivity: (id: string) => void;
  
}
export default function ActivityList({activities, SelectActivity, }: Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, gap: 2}}>
         {activities.map((activity) => (
            <ActivityCard 
            key={activity.id} 
            activity={activity} 
            SelectActivity={SelectActivity} 
           />
         ))}
    </Box>
  )
}
