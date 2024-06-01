import React from "react";

const DeleteModal = ({ show, onClose, onDelete, selected, isEmpty }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-[#151619] dark:bg-[#7C8187] dark:bg-opacity-50 bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-[#1D1F22] dark:text-white rounded-[4px] p-6 w-80 max-w-full">
        <h2 className="text-[20px] font-bold mb-4">Delete this document?</h2>
        <p className="mb-4 text-textSecondary dark:text-[#C1C4CB]">
          Are you sure you want to delete the ‘{selected?.name}’ document and its
          contents? This action cannot be reversed.
        </p>
        <div className="flex justify-end">
          
          <button
            className="bg-buttonPrimary w-full hover:bg-primaryHover text-[15px] text-white font-normal py-2 px-4 rounded"
            onClick={onDelete}
          >
            Confirm & Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
