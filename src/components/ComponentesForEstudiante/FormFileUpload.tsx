import React from "react";

interface FormFileUploadProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({ label, name, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium text-sm">
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        accept="image/*,application/pdf"
        onChange={onChange}
        className="border rounded px-3 py-2 text-sm file:mr-4 file:py-1 file:px-2 file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
      />
    </div>
  );
};

export default FormFileUpload;