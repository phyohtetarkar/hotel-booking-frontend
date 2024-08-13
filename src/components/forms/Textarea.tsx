import { ReactNode } from "react";
import { InputProps } from "./Input";

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>  {
  label?: ReactNode;
  error?: string;
  wrapperClass?: string;
  height?: number;
}

function Textarea({
  label,
  id,
  name,
  placeholder,
  disabled,
  value,
  defaultValue,
  onChange,
  onBlur,
  error,
  height = 120,
}: TextareaInputProps) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={`form-control p-3 ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          height: height,
        }}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}

export default Textarea;
