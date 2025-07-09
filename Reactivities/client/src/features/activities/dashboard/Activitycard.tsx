import { Place } from "@mui/icons-material";
import AccessTime from "@mui/icons-material/AccessTime";
import { Button, Card, CardContent, Chip, Typography,Box, CardHeader, Avatar, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { formatDate } from "../../../lib/utl/utl";

type Props ={
    activity: Activity
    };

export default function ActivityCard({activity }: Props) {
const isHost = false; // Placeholder for host logic
const isGoing = false; // Placeholder for going logic
const label = isHost ? "You are hosting" : "You are going"
const isCancelled = false; // Placeholder for cancellation logic
const color = isHost ? "secondary" : isGoing ? "warning" : "default";


  const navigate = useNavigate();
  return (
    <Card elevation={3} sx={{borderRadius: 2, padding: 2, marginBottom: 2 }}>
      <Box justifyContent="space-between" display="flex" alignItems="center" mb={1}>
       <CardHeader avatar={<Avatar sx={{ height: 60, padding: 1,  width: 80 }} />}
       title={activity.title}
        titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
       subheader={
        <>
            Hosted by {''} <Link to={"/profile/bob"}>Bob</Link>
        </>
       }
       />
        <Box display="flex" alignItems="center" gap={1}>
          {(isHost || isGoing) && <Chip sx={{ bgcolor: 'secondary.main', color: 'white' }} label="You are hosting" color="secondary" size="small" />}
          <Chip label={label} color={color} size="small" />
          {isCancelled && <Chip label="Cancelled" color="error" size="small" />}
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />
        <CardContent sx={{p:0}}>
            <Box alignItems="center" display="flex"mb={2} px={1} gap={1}>
              <Box display='flex' flexGrow={0} alignItems='center'>
                <AccessTime sx={{ mr: 1 }} />
                <Typography variant="body2" noWrap >
                 {formatDate(activity.date)}
                </Typography>
              </Box>
                <Place sx={{ color: 'text.secondary', ml: 3, mr:1 }} />
                <Typography variant="body2" color="text.secondary">
                    {activity.venue}, {activity.city}
                </Typography>
            </Box>
            <Divider/>
            <Box display="flex" alignItems="center" px={1} py={3}>
                Attendees Goes here
            </Box>
        </CardContent>
        <CardContent sx={{pb: 2 }}>  
          <Typography variant="body2">
             {activity.description}
          </Typography>         
                  <Button onClick={() => navigate(`/activities/${activity.id}`)} 
                     size="medium" 
                     variant="contained"
                     sx={{display: 'flex', justifySelf: 'self-end'
                      ,borderRadius: 2, padding: 1, marginLeft: 'auto', 
                      backgroundColor: 'primary.main'
                    }}
                     >View Details</Button>             
        </CardContent>
    </Card>
  )
}