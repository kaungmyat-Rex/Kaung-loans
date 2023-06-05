import { useDispatch } from "react-redux";
import {
  setDeletemodel,
  setGetDebtId,
  setOpenmodel,
} from "../redux/TodolistSlice";
const TaskList = ({ debt }) => {
  const Dispatch = useDispatch();

  const opendeleteModel = (id) => {
    Dispatch(setDeletemodel(true));
    Dispatch(setGetDebtId(id));
    // Dispatch(setOpenmodel(true));
  };

  return (
    <div>
      <div
        onClick={() => opendeleteModel(debt.id)}
        className="flex justify-between items-center bg-zinc-800 pt-3 pb-3 rounded-lg mt-2 mb-2"
      >
        <div className="flex w-2/3 justify-between">
          <p className="pl-2 text-lg">{debt.name}</p>
          <p className="text-lg">{debt.amount}Ks</p>
        </div>
        <p className="pl-3 pr-2 text-gray-500">Not Paid</p>
      </div>
    </div>
  );
};

export default TaskList;
