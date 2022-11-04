import { ChangeEvent, FocusEvent, LegacyRef, MouseEvent } from "react";
import { formControlHeight } from "../../common/app.config";

type OnChange<E> = (e: ChangeEvent<E>) => void;
type OnBlur<E> = (e: FocusEvent<E, Element>) => void;
type OnClick<E> = (e: MouseEvent<E>) => void;

export interface InputProps<ElementType> {
  label?: string;
  ref?: LegacyRef<HTMLInputElement>;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  error?: string;
  className?: string;
  height?: number;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: OnChange<ElementType>;
  onBlur?: OnBlur<ElementType>;
  onClick?: OnClick<ElementType>;
}

function Input({
  label,
  ref,
  id,
  type,
  name,
  placeholder,
  disabled,
  readonly,
  value,
  defaultValue,
  onChange,
  onBlur,
  onClick,
  error,
  className,
  height = formControlHeight
}: InputProps<HTMLInputElement>) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        name={name}
        className={`form-control px-3 ${error ? "is-invalid" : ""} ${
          className ?? ""
        }`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          height: height
        }}
        readOnly={readonly}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}

export default Input;
