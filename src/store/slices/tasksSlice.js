import { createSlice } from "@reduxjs/toolkit";
import { dummyTasks } from "../../../data.json"

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: dummyTasks,
        filters: {
            searchQuery: '',
            statusFilter: 'All',
            priorityFilter: "All",
            tagsFilter: []
        }
    },
    reducers: {    
        updateStatusFilter: (state, action) => {
            state.filters.statusFilter = action.payload;
        },
        updateSearchQuery: (state, action) => {
            state.filters.searchQuery = action.payload;
        },
    }

})



export const selectAllTasks = (state) => state.tasks.data;
export const selectFilters = (state) => state.tasks.filters;


export const selectFilteredTasks = (state) => {
    const { data, filters } = state.tasks;
    const { searchQuery, statusFilter, priorityFilter, tagsFilter } = filters;

    return data.filter(task => {
        const matchesSearch = searchQuery === '' ||
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
        const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
        const matchesTags = tagsFilter.length === 0 ||
            task.tags.some(tag => tagsFilter.includes(tag));

        return matchesSearch && matchesStatus && matchesPriority && matchesTags;
    });
};

export const taskAction = tasksSlice.actions
export default tasksSlice;