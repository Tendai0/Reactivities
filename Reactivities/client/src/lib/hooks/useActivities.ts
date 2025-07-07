import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";
import axios from "axios";

export const useActivities = () => {
    const queryClient = useQueryClient();
    const {data:activities,isPending} =useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        },
    });
    const updateActivity = useMutation({
       mutationFn: async (activity: Activity) => {
    try {
        await agent.put('/activities', activity);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data);
        } else {
            console.error('Unexpected Error:', error);
        }
        throw error; // rethrow to keep the mutation in error state
    }
},
        onSuccess: async () => {
            // Invalidate the activities query to refetch the updated data
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.post('/activities', activity);
        },
        onSuccess: async () => {
            // Invalidate the activities query to refetch the updated data
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });
     const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}`);
        },
        onSuccess: async () => {
            // Invalidate the activities query to refetch the updated data
            await queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });

    return { activities, isPending, updateActivity, createActivity , deleteActivity };
}