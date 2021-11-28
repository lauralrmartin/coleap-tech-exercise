import { FC, ReactElement } from "react";

interface SelectProps {
  id: string;
  options: string[];
  onSelect: (s: any) => void;
}

const Select: FC<SelectProps> = ({ id, options, onSelect }): ReactElement => (
  <>
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-900 block mb-2"
    >
      Sort By
    </label>
    <select
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </>
);

export default Select;
