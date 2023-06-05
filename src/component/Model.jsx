import { NameInput, NumberInput } from "./Input";
import { BiPaperPlane } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenmodel,
  AddTask,
  RemoveTask,
  setDeletemodel,
} from "../redux/TodolistSlice";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export const InputModel = () => {
  const inputname = useSelector((state) => state.Onchange.inputName);
  const inputnumber = useSelector((state) => state.Onchange.inputNumber);
  const modelOpen = useSelector((state) => state.Model.openmodel);
  const Dispatch = useDispatch();
  const Closemodel = () => {
    Dispatch(setOpenmodel(false));
  };

  const uploadTask = () => {
    const id = Math.floor(Math.random() * 1000);
    Dispatch(AddTask({ id: id, name: inputname, amount: inputnumber }));
    Dispatch(setOpenmodel(false));
  };

  return (
    <div
      className={`fixed w-full h-full bg-black ${
        modelOpen ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="flex flex-col w-full justify-center items-center bg-zinc-900 mr-2 ml-2">
        <h4 className="text-xl font-bold mt-4">Put Your Loans Detail</h4>
        <div className="bg-yellow-600 w-28 h-1 mt-1 mb-6"></div>
        <NameInput />
        <NumberInput />
        <div className="flex justify-center items-center gap-4 mt-5 mb-5">
          <button
            onClick={() => uploadTask()}
            className="bg-yellow-600 text-xl text-white font-semibold rounded-md p-2 pl-3 pr-3"
          >
            <span className="flex justify-center items-center gap-1">
              {" "}
              Save <BiPaperPlane className="text-2xl" />
            </span>
          </button>
        </div>
      </div>
      <p
        onClick={() => Closemodel()}
        className="flex justify-center items-center absolute top-3 left-2 text-lg "
      >
        <IoIosArrowBack />
        <span>Cancel</span>
      </p>
    </div>
  );
};

export const ReceiveModel = () => {
  const Dispatch = useDispatch();
  const deletemodel = useSelector((state) => state.Model.deletemodel);
  const getDebtId = useSelector((state) => state.Model.getDebtId);
  const deleteTask = (id) => {
    Dispatch(RemoveTask(id));
    Dispatch(setDeletemodel(false));
  };

  const closedeletemodel = () => {
    Dispatch(setDeletemodel(false));
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full h-full bg-black ${
        deletemodel ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="flex flex-col w-full justify-center items-center bg-zinc-900 mr-2 ml-2">
        <h4 className="text-xl font-bold mt-4">Did you receive?</h4>
        <div className="bg-yellow-600 w-28 h-1 mt-1 mb-6"></div>

        <div className="flex justify-center items-center gap-4 mt-5 mb-5">
          <button
            onClick={() => deleteTask(getDebtId)}
            className="bg-yellow-600 text-xl text-white font-semibold rounded-md p-2 pl-3 pr-3"
          >
            <span className="flex justify-center items-center gap-1">
              {" "}
              Yes <IoMdCheckmark className="text-2xl" />
            </span>
          </button>
          <button
            onClick={() => closedeletemodel()}
            className="bg-red-600 text-xl text-white font-semibold rounded-md p-2 pl-3 pr-3"
          >
            <span className="flex justify-center items-center gap-1">
              {" "}
              No <RxCross2 className="text-2xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
