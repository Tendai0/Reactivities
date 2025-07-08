
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useActivities } from "../../../lib/hooks/useActivities";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";



export default function ActivityForm() {
    const {id}=useParams();
    const { updateActivity , createActivity, activity ,IsLoadingActivity} = useActivities(id);
    const navigate = useNavigate();

    const handleSubmit =async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const activityData: { [key: string]: FormDataEntryValue } = {};

        formData.forEach((value, key) => {
            activityData[key] = value;
        });

       if (activity) {
    activityData.id = activity.id; // Preserve the ID
    // Merge the non-form fields from existing activity
    const completeActivity: Activity = {
        ...activity,
        ...activityData,
        latitude: activity.latitude,
        longitude: activity.longitude,
        isCancelled: activity.isCancelled ?? false
    };
        await updateActivity.mutateAsync(completeActivity as unknown as Activity);
        navigate(`/activities/${activity.id}`); // Navigate to the updated activity details
    } else {
       const newActivity: Omit<Activity, "id"> = {
    title: activityData.title as string,
    description: activityData.description as string,
    category: activityData.category as string,
    date: activityData.date as string,
    city: activityData.city as string,
    venue: activityData.venue as string,
    latitude: 0, // default or real geolocation
    longitude: 0,
    isCancelled: false,
};
        // Handle creation logic here if needed
       createActivity.mutate(newActivity as Activity, {
    onSuccess: (createdActivity) => {
        navigate(`/activities/${createdActivity.id}`);
    },
    onError: (error) => {
        console.error("Error creating activity:", error);
    },
});
    }
    };
     if(IsLoadingActivity) return <Typography>Loading...</Typography>;

    return (
        <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
                {activity ? "Edit Activity" : "Create Activity"}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <TextField
                    name="title"
                    label="Title"
                    defaultValue={activity?.title || ""}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="description"
                    label="Description"
                    defaultValue={activity?.description || ""}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="category"
                    label="Category"
                    defaultValue={activity?.category || ""}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="date"
                    label="Date"
                    defaultValue={activity?.date ? new Date(activity.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]}
                    type="date"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                  
                />
                <TextField
                    name="city"
                    label="City"
                    defaultValue={activity?.city || ""}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="venue"
                    label="Venue"
                    defaultValue={activity?.venue || ""}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginBottom: 2 }}
                />
                <Box display="flex" justifyContent="flex-end" gap={2}>
                    <Button color="secondary">
                        Cancel
                    </Button>
                    <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    disabled={updateActivity.isPending || createActivity.isPending}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}
