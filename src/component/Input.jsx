import { useDispatch, useSelector } from "react-redux";
import { setInputChange, setInputNumberChange } from "../redux/TodolistSlice";

export const NameInput = () => {
  const Dispatch = useDispatch();
  const inputname = useSelector((state) => state.Onchange.inputName);

  return (
    <input
      type="text"
      onChange={(e) => Dispatch(setInputChange(e.target.value))}
      value={inputname}
      className="max-w-2xl w-11/12 h-16 rounded-md bg-zinc-700 text-xl indent-4 focus:border-b-2 border-yellow-600 placeholder:text-xl placeholder:indent-4 focus:outline-none"
      placeholder="Name"
    />
  );
};

export const NumberInput = () => {
  const Dispatch = useDispatch();
  const inputnumber = useSelector((state) => state.Onchange.inputNumber);

  return (
    <input
      type="text"
      onChange={(e) => Dispatch(setInputNumberChange(e.target.value))}
      value={inputnumber}
      placeholder="Amount"
      className="max-w-2xl w-11/12 h-16 rounded-md bg-zinc-700 text-xl indent-4 mt-3 focus:border-b-2 border-yellow-600 placeholder:text-xl placeholder:indent-4 focus:outline-none"
    />
  );
};
