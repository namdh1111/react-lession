import React from "react";

const Input = (props) => {
  const { inputRef, id, label, labelSize, ...others } = props;
  const labelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label`; //! neu co label size thi dung` con ko thi dung mac dinh bang 3
  return (
    <>
      <div className="row mb-3">
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>

        <div className="col-sm">
          {others["rows"] > 1 ? (
            <textarea
              ref={inputRef}
              className="form-control"
              id={id}
              {...others}
            ></textarea>
          ) : (
            <input
              ref={inputRef}
              className="form-control"
              id={id}
              {...others}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
