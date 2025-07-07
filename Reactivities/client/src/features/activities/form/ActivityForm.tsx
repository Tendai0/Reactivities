
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useActivities } from "../../../lib/hooks/useActivities";
import type { FormEvent } from "react";

type Props = {
    activity?: Activity;
    closeForm?: () => void;
  
};

export default function ActivityForm({ activity, closeForm }: Props) {
    const { updateActivity , createActivity } = useActivities();

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

    await updateActivity.mutateAsync(completeActivity);
    closeForm?.();
}
else {
            // Handle creation logic here if needed
            await createActivity.mutateAsync(activityData as unknown as Activity);
            closeForm?.();          
        }
    };

    return (
        <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
                Activity Form
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
                    <Button onClick={closeForm} color="secondary">
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
