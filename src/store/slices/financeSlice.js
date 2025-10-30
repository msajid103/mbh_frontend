// src/store/slices/financeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budgetRows: [
    {
      id: 1,
      category: "Authorities",
      budget: 20000,
      contract: 20000,
      anticipated: 23500,
      submitted: 23500,
      approved: 5000,
      forecast: 23500,
    },
    {
      id: 2,
      category: "Consultants",
      budget: 80000,
      contract: 80000,
      anticipated: 88000,
      submitted: 88000,
      approved: 12000,
      forecast: 88000,
    },
    {
      id: 3,
      category: "Contractor",
      budget: 500000,
      contract: 500000,
      anticipated: 530000,
      submitted: 530000,
      approved: 220000,
      forecast: 530000,
    },
    {
      id: 4,
      category: "Provisional Sums",
      budget: 100000,
      contract: 100000,
      anticipated: 110000,
      submitted: 110000,
      approved: 35000,
      forecast: 110000,
    },
    {
      id: 5,
      category: "Miscellaneous",
      budget: 50000,
      contract: 50000,
      anticipated: 52000,
      submitted: 52000,
      approved: 8000,
      forecast: 52000,
    },
  ],

  // ✅ Contingency is now part of global state
  contingency: 100000,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    editBudget: (state, action) => {
      const { id, field, value } = action.payload;

      if (id === "contingency") {
        // ✅ update contingency directly
        state.contingency = Number(value) || 0;
      } else {
        const row = state.budgetRows.find((r) => r.id === id);
        if (row) {
          row[field] = value;
        }
      }
    },

    deleteBudgetRow: (state, action) => {
      state.budgetRows = state.budgetRows.filter((r) => r.id !== action.payload);
    },

    addBudgetRow: (state, action) => {
      const newId = Math.max(...state.budgetRows.map((r) => r.id)) + 1;
      state.budgetRows.push({
        id: newId,
        category: "New Category",
        budget: 0,
        contract: 0,
        anticipated: 0,
        submitted: 0,
        approved: 0,
        forecast: 0,
        ...action.payload,
      });
    },
  },
});

export const { editBudget, deleteBudgetRow, addBudgetRow } = financeSlice.actions;
export default financeSlice;
