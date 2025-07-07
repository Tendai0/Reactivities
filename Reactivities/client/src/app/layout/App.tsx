import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";


function App() {
    
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const { activities, isPending } = useActivities();

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities!.find(x => x.id === id));
    };

    const handleCancelActivity = () => {
        setSelectedActivity(undefined);
    };

    const handleFormOpen = (id?: string) => {
        if (id) handleSelectActivity(id);
        else handleCancelActivity();
        setEditMode(true);
    };

    const handleFormClose = () => {
        setEditMode(false);
    };

    return (
        <Box sx={{ bgColor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <NavBar openForm={handleFormOpen} />
            <Container maxWidth="xl" sx={{ marginTop: 4 }}>
                {!activities || isPending ?(
                    
                    <Typography>
                        Loading...
                    </Typography>
                ):(
                    <ActivityDashboard
                        activities={activities}
                        SelectActivity={handleSelectActivity}
                        CancelActivity={handleCancelActivity}
                        selectedActivity={selectedActivity}
                        editMode={editMode}
                        openForm={handleFormOpen}
                        closeForm={handleFormClose}
                        
                        
                    />
                )}
            </Container>
        </Box>
    );
}

export default App;
