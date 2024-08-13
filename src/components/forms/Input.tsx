import {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  MouseEvent,
  ReactNode
} from "react";
import { formControlHeight } from "../../common/app.config";

type OnChange<E> = (e: ChangeEvent<E>) => void;
type OnBlur<E> = (e: FocusEvent<E, Element>) => void;
type OnClick<E> = (e: MouseEvent<E>) => void;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  label?: ReactNode;
  id?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  error?: string;
  className?: string;
  style?: CSSProperties;
  height?: number;
  disabled?: boolean;
  readonly?: boolean;
  autoFocus?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      id,
      error,
      className,
      style,
      height = formControlHeight,
      ...passThroughProps
    } = props;

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
          className={`form-control px-3 ${error ? "is-invalid" : ""} ${
            className ?? ""
          }`}
          style={{
            ...style,
            height: height
          }}
          {...passThroughProps}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
