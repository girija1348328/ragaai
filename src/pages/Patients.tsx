// pages/Patients.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPatients, toggleView } from "../features/patients/patientSlice";
import { mockPatients } from "../utils/mockPatients";
import type { RootState, AppDispatch } from "../app/store";
import { sendNotification } from "../utils/notification";




export default function Patients() {
  const dispatch = useDispatch<AppDispatch>();
  const { patients, view } = useSelector((state: RootState) => state.patients);

  useEffect(() => {
    dispatch(setPatients(mockPatients));
  }, [dispatch]);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Patients</h2>

        <button
          onClick={() => dispatch(toggleView())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to {view === "grid" ? "List" : "Grid"}
        </button>

        <button
          onClick={() =>
            sendNotification("New Patient Added", "John Doe added successfully")
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Patient (Demo)
        </button>
      </div>

      {/* GRID VIEW */}
      {view === "grid" && (
        <div className="grid grid-cols-3 gap-4">
          {patients.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{p.name}</h3>
              <p>Age: {p.age}</p>
              <p>Gender: {p.gender}</p>
              <p>{p.condition}</p>
            </div>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Condition</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.gender}</td>
                <td className="p-3">{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}