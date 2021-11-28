import { FC, ReactElement } from "react";
import { VehicleData } from "./Vehicle";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: VehicleData;
}

const Modal: FC<ModalProps> = ({ vehicle, isOpen, onClose }): ReactElement => {
  if (!vehicle) return null;

  const { range, colors, price } = vehicle;

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-xl leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Vehicle information
                </h3>
                <div className="mt-2">
                  <div className="flex gap-1 mb-2">
                    <h4 className="text-lg">Colors:</h4>
                    {colors.map((color) => (
                      <div
                        key={color}
                        className="h-5 w-5 rounded bg-black"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-2">
                    Range: {range.distance} <b>{range.unit}</b>
                  </p>
                  <p className="text-lg mb-2">Price: {price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
