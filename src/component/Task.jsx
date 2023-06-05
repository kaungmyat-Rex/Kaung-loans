import { useSelector, useDispatch } from "react-redux";
import { TotolDebts, setOpenmodel } from "../redux/TodolistSlice";
import { useEffect } from "react";
import { InputModel, ReceiveModel } from "./Model";
import TaskList from "./TaskList";
import { MdAddCircle } from "react-icons/md";
import { ImFileEmpty } from "react-icons/im";
const Task = () => {
  const Dispatch = useDispatch();

  const Task = useSelector((state) => state.Task.taskArray);
  const Modelopen = useSelector((state) => state.Model.openmodel);
  const totaldebts = useSelector((state) => state.Task.totalDebt);
  const Modeldelete = useSelector((state) => state.Model.deletemodel);
  const Openmodel = () => {
    Dispatch(setOpenmodel(true));
  };

  useEffect(() => {
    Dispatch(TotolDebts());
  }, [Task]);

  return (
    <div className="relative w-full h-100">
      <div className="flex flex-col items-center">
        <InputModel />
        <ReceiveModel />
        <h4 className="text-2xl font-bold mt-5">
          Kaung
          <span className="text-black bg-yellow-600 pl-1 pr-1 rounded-md">
            Loans
          </span>
        </h4>

        <div className="w-full pl-2 pr-2 mt-11">
          <h4
            className={`${
              Task.length === 0 ? "hidden" : "block"
            } text-yellow-600 font-extrabold text-xl`}
          >
            Loan List Detail
          </h4>
          {Task.length === 0 ? (
            <p className="flex flex-col justify-center items-center pt-36 pb-14">
              <span className="text-2xl pb-10">
                Your <span className="text-yellow-600 font-bold">Loans</span> is
                empty
              </span>
              <ImFileEmpty className="text-7xl text-yellow-600 " />
            </p>
          ) : (
            Task.map((debt) => <TaskList key={debt.id} debt={debt} />)
          )}
          <div
            className={`${
              Task.length === 0 ? "hidden" : "block"
            } flex w-2/3 mt-7 justify-between`}
          >
            <p>Total Loans</p>
            <p>{totaldebts}Ks</p>
          </div>
        </div>
      </div>
      <MdAddCircle
        onClick={() => Openmodel()}
        className={`${
          Modelopen || Modeldelete ? "hidden" : "block"
        } absolute text-yellow-600 text-5xl bottom-7 left-1/2 -translate-x-1/2 `}
      />
    </div>
  );
};

export default Task;
