import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { ReactNode, useState } from "react";
import { formControlHeight } from "../../common/app.config";
import { InputProps } from "./Input";

interface PasswordInputProps extends InputProps {
  label?: ReactNode;
  error?: string;
  wrapperClass?: string;
  height?: number;
}

function PasswordInput({
  label,
  type,
  id,
  error,
  height = formControlHeight,
  ...passThroughProps
}: PasswordInputProps) {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <>
      {label && <label className="form-label">{label}</label>}
      <div className={`input-group ${error ? "has-validation" : ""}`}>
        <input
          id={id}
          type={isPassword ? "password" : "text"}
          className={`form-control px-3 ${error ? "is-invalid" : ""}`}
          style={{
            height: height,
          }}
          {...passThroughProps}
        />
        <div
          className="input-group-text px-3"
          role="button"
          onClick={() => setIsPassword(!isPassword)}
        >
          {isPassword ? <EyeSlashIcon width={20} /> : <EyeIcon width={20} />}
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
}

export default PasswordInput;
