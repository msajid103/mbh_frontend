import { createSelector, createSlice } from "@reduxjs/toolkit";
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
        deleteTask:(state,action) => {
            state.data =  state.data.filter(t => t.id !== action.payload)
        },  
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
export const selectFilteredTasks = createSelector(
    [selectAllTasks, selectFilters],
    (tasks, filters) => {
        const { searchQuery, statusFilter, priorityFilter, tagsFilter } = filters;

        return tasks.filter(task => {
            const matchesSearch = searchQuery === '' || 
                                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
            
            const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
            
            const matchesTags = tagsFilter.length === 0 || 
                              task.tags.some(tag => tagsFilter.includes(tag));

            return matchesSearch && matchesStatus && matchesPriority && matchesTags;
        });
    }
);
export const selectStatusCounts = createSelector(
    [selectAllTasks],
    (tasks) => ({
        'Total Tasks': tasks.length,
        'In Progress': tasks.filter(t => t.status === 'In Progress').length,
        'Pending': tasks.filter(t => t.status === 'Pending').length,
        'Completed': tasks.filter(t => t.status === 'Completed').length
    })
);

// Memoized selector for specific task properties
export const selectTasksByStatus = createSelector(
    [selectAllTasks, (state, status) => status],
    (tasks, status) => tasks.filter(task => task.status === status)
);

export const taskAction = tasksSlice.actions
export default tasksSlice;