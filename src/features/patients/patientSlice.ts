// features/patients/patientSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ViewType = "grid" | "list";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
}

interface PatientState {
  patients: Patient[];
  view: ViewType;
}

const initialState: PatientState = {
  patients: [],
  view: "grid",
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
    toggleView: (state) => {
      state.view = state.view === "grid" ? "list" : "grid";
    },
  },
});

export const { setPatients, toggleView } = patientSlice.actions;
export default patientSlice.reducer;