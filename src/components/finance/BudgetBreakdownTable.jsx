// src/app/finance/BudgetBreakdownTable.jsx
import React, { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { editBudget, deleteBudgetRow } from "../../store/slices/financeSlice";

/* ------------------------ UI Helpers ------------------------ */
const PillBtn = ({ children, className = "", ...rest }) => (
  <button
    className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${className}`}
    {...rest}
  >
    {children}
  </button>
);

const Backdrop = ({ onClose, children }) => (
  <div
    className="fixed inset-0 z-40 bg-black/30 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-xl shadow-xl w-full max-w-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

/* ------------------------ Edit Modal ------------------------ */
const EditModal = ({ row, onSave, onClose }) => {
  const [form, setForm] = useState({ ...row });
  const change = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <Backdrop onClose={onClose}>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-4">Edit Budget Item</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            ["Category", "category"],
            ["Budget", "budget", "number"],
            ["Contract Value", "contract", "number"],
            ["Anticipated Variations", "anticipated", "number"],
            ["Submitted Variations", "submitted", "number"],
            ["Approved Variations", "approved", "number"],
            ["Final Forecast Cost", "forecast", "number"],
          ].map(([label, key, type = "text"]) => (
            <label
              key={key}
              className={`flex flex-col ${key === "forecast" ? "col-span-2" : ""}`}
            >
              <span className="text-gray-600 mb-1">{label}</span>
              <input
                type={type}
                className="border rounded-md px-3 py-2"
                value={form[key]}
                onChange={(e) =>
                  change(key, type === "number" ? Number(e.target.value) : e.target.value)
                }
              />
            </label>
          ))}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <PillBtn
            className="bg-gray-100 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </PillBtn>
          <PillBtn
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => onSave(form)}
          >
            Save
          </PillBtn>
        </div>
      </div>
    </Backdrop>
  );
};

/* ------------------------ View Modal (new) ------------------------ */
const ViewModal = ({ row, onClose }) => (
  <Backdrop onClose={onClose}>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        View Details: {row.category}
      </h3>
      <table className="min-w-full border-collapse text-sm">
        <tbody>
          {Object.entries(row).map(([key, value]) => (
            <tr key={key} className="border-t">
              <td className="py-2 px-3 font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </td>
              <td className="py-2 px-3 text-gray-800">
                {typeof value === "number"
                  ? `$${Number(value).toLocaleString()}`
                  : value || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 flex justify-end">
        <PillBtn
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </PillBtn>
      </div>
    </div>
  </Backdrop>
);

/* ------------------------ Arrow Icon ------------------------ */
const ArrowIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transform transition-transform duration-300 ${
      open ? "rotate-0" : "-rotate-90"
    }`}
  >
    <path
      d="M3.99741 5.99609L7.9948 9.99349L11.9922 5.99609"
      stroke="#155DFC"
      strokeWidth="1.33247"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------ Main Table ------------------------ */
export default function BudgetBreakdownTable() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.finance.budgetRows);
  const contingency = useSelector((state) => state.finance.contingency);
  const [open, setOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [viewRow, setViewRow] = useState(null); // ✅ for view modal

  const sums = rows.reduce(
    (a, r) => ({
      budget: a.budget + (r.budget || 0),
      contract: a.contract + (r.contract || 0),
      anticipated: a.anticipated + (r.anticipated || 0),
      submitted: a.submitted + (r.submitted || 0),
      approved: a.approved + (r.approved || 0),
      forecast: a.forecast + (r.forecast || 0),
    }),
    { budget: 0, contract: 0, anticipated: 0, submitted: 0, approved: 0, forecast: 0 }
  );

  const totals = {
    budget: sums.budget + contingency,
    contract: sums.contract + contingency,
    anticipated: sums.anticipated + contingency,
    submitted: sums.submitted + contingency,
    approved: sums.approved + contingency,
    forecast: sums.forecast + contingency,
  };

  const formatCurrency = (num) =>
    `$${Number(num).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const defaultConsultantChildren = (parent) => [
    {
      id: `${parent.id}-c1`,
      category: "Structural Engineer",
      budget: parent.budget,
      contract: parent.contract,
      anticipated: parent.anticipated,
      submitted: parent.submitted,
      approved: parent.approved,
      forecast: parent.forecast,
    },
    {
      id: `${parent.id}-c2`,
      category: "Architect",
      budget: parent.budget,
      contract: parent.contract,
      anticipated: parent.anticipated,
      submitted: parent.submitted,
      approved: parent.approved,
      forecast: parent.forecast,
    },
  ];

  const renderRow = (row, isChild = false) => (
    <tr
      key={`${row.id}-${isChild ? "child" : "root"}`}
      className={`border-t ${row.isSummary ? "font-semibold bg-gray-50" : ""}`}
    >
      <td className={`p-3 text-gray-700 ${isChild ? "pl-10" : ""}`}>
        {row.category === "Consultants" && !isChild ? (
          <button
            type="button"
            aria-expanded={open}
            aria-controls="consultants-rows"
            className="flex items-center gap-1 text-left"
            onClick={() => setOpen((v) => !v)}
          >
            <ArrowIcon open={open} />
            <span>{row.category}</span>
          </button>
        ) : (
          row.category
        )}
      </td>

      <td className="p-3 text-center">{formatCurrency(row.budget)}</td>
      <td className="p-3 text-center">{formatCurrency(row.contract)}</td>
      <td className="p-3 text-center">{formatCurrency(row.anticipated)}</td>
      <td className="p-3 text-center">{formatCurrency(row.submitted)}</td>
      <td className="p-3 text-center">{formatCurrency(row.approved)}</td>
      <td className="p-3 text-center">{formatCurrency(row.forecast)}</td>

      {/* ✅ Action buttons with Eye icon */}
      <td className="px-4 py-4 flex justify-center gap-2">
        <button
          onClick={() => setViewRow(row)}
          className="p-1 border-2 rounded-lg border-blue-300 flex items-center justify-center"
          title="View Details"
        >
          <Eye className="text-blue-600" size={16} />
        </button>
        <button
          onClick={() => setEditRow(row)}
          className="p-1 border-2 rounded-lg border-green-300 flex items-center justify-center"
          title="Edit"
        >
          <Pencil className="text-green-600" size={16} />
        </button>
        <button
          onClick={() => dispatch(deleteBudgetRow(row.id))}
          className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center cursor-pointer"
          title="Delete"
        >
          <Trash2 className="text-red-600" size={16} />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Budget Breakdown</h2>
        <div className="flex gap-3">
          {["Service Provider +", "Add Category +"].map((label) => (
            <button
              key={label}
              type="button"
              className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="text-left p-3 font-medium">Category</th>
              <th className="p-3 font-medium">Budget</th>
              <th className="p-3 font-medium">Contract value</th>
              <th className="p-3 font-medium">Anticipated variations</th>
              <th className="p-3 font-medium">Submitted Variations</th>
              <th className="p-3 font-medium">Approved Variations</th>
              <th className="p-3 font-medium">Final Forecast Cost</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {rows.map((row) => {
              const children =
                row.category === "Consultants"
                  ? defaultConsultantChildren(row)
                  : row.children;
              return (
                <React.Fragment key={row.id}>
                  {renderRow(row)}
                  {row.category === "Consultants" && (
                    <tr>
                      <td colSpan="8" className="p-0">
                        <div
                          className={`grid transition-all duration-300 ${
                            open
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <table className="min-w-full text-sm">
                              <tbody>
                                {children?.map((child, i) => (
                                  <React.Fragment key={child.id || i}>
                                    {renderRow(child, true)}
                                  </React.Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}

            {/* ===== SUBTOTAL ===== */}
            <tr className="border-t font-semibold bg-gray-50">
              <td className="p-3">SUBTOTAL</td>
              <td className="p-3 text-center">{formatCurrency(sums.budget)}</td>
              <td className="p-3 text-center">{formatCurrency(sums.contract)}</td>
              <td className="p-3 text-center">{formatCurrency(sums.anticipated)}</td>
              <td className="p-3 text-center">{formatCurrency(sums.submitted)}</td>
              <td className="p-3 text-center">{formatCurrency(sums.approved)}</td>
              <td className="p-3 text-center">{formatCurrency(sums.forecast)}</td>
              <td className="p-3 text-center"></td>
            </tr>

            {/* ===== CONTINGENCY ===== */}
            <tr className="border-t bg-white">
              <td className="p-3">Contingency</td>
              {Array.from({ length: 6 }).map((_, i) => (
                <td key={i} className="p-3 text-center">
                  {formatCurrency(contingency)}
                </td>
              ))}
              <td className="px-4 py-4 flex justify-center gap-2">
                <button
                  onClick={() =>
                    setViewRow({
                      id: "contingency",
                      category: "Contingency",
                      budget: contingency,
                      contract: contingency,
                      anticipated: contingency,
                      submitted: contingency,
                      approved: contingency,
                      forecast: contingency,
                    })
                  }
                  className="p-1 border-2 rounded-lg border-blue-300 flex items-center justify-center"
                  title="View Contingency"
                >
                  <Eye className="text-blue-600" size={16} />
                </button>
                <button
                  onClick={() =>
                    setEditRow({
                      id: "contingency",
                      category: "Contingency",
                      budget: contingency,
                      contract: contingency,
                      anticipated: contingency,
                      submitted: contingency,
                      approved: contingency,
                      forecast: contingency,
                    })
                  }
                  className="p-1 border-2 rounded-lg border-green-300 flex items-center justify-center"
                >
                  <Pencil className="text-green-600" size={16} />
                </button>
                <button
                  onClick={() => console.log("Delete contingency")}
                  className="p-1 border-2 rounded-lg border-red-300 flex items-center justify-center"
                >
                  <Trash2 className="text-red-600" size={16} />
                </button>
              </td>
            </tr>

            {/* ===== TOTAL ===== */}
            <tr className="border-t font-semibold bg-gray-50">
              <td className="p-3">TOTAL</td>
              <td className="p-3 text-center">{formatCurrency(totals.budget)}</td>
              <td className="p-3 text-center">{formatCurrency(totals.contract)}</td>
              <td className="p-3 text-center">{formatCurrency(totals.anticipated)}</td>
              <td className="p-3 text-center">{formatCurrency(totals.submitted)}</td>
              <td className="p-3 text-center">{formatCurrency(totals.approved)}</td>
              <td className="p-3 text-center">{formatCurrency(totals.forecast)}</td>
              <td className="p-3 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {editRow && (
        <EditModal
          row={editRow}
          onClose={() => setEditRow(null)}
          onSave={(form) => {
            Object.keys(form).forEach((key) => {
              if (key !== "id") {
                dispatch(editBudget({ id: form.id, field: key, value: form[key] }));
              }
            });
            setEditRow(null);
          }}
        />
      )}

      {viewRow && <ViewModal row={viewRow} onClose={() => setViewRow(null)} />}
    </div>
  );
}
