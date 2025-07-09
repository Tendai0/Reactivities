import { FilterList,Event } from "@mui/icons-material";
import { ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

export default function ActivityFilters() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 2 }}>
      <Paper>
        <Box sx={{ padding: 2  }}>
         <Typography variant="h6" sx={{display: 'flex',color: 'text.primary', alignItems: 'center', mb: 1}}>
           <FilterList sx={{}}/>
           Activity Filters
         </Typography>
         <MenuList>
           <MenuItem>
               <ListItemText primary="All Events" />
           </MenuItem>
           <MenuItem>
               <ListItemText primary="I'm Going" />
           </MenuItem>
            <MenuItem>
               <ListItemText primary="I'm Hosting" />
           </MenuItem>
         </MenuList>
        </Box>
      </Paper>
      <Box component={Paper} sx={{ padding: 2, borderRadius: 2 }}>
           <Typography variant ="h6" sx={{display: 'flex', alignItems: 'center', mb: 1 }}>
               <Event sx={{mr:1}}/>
              Select Date
           </Typography>
           <Calendar />
      </Box>
    </Box>
  )
}