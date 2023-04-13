import { ReactNode } from "react";

interface Props {
  //ReactNode able to pass html content
  //passing children to a component
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {" "}
      {children}
      <button
        //passing refrence
        //when clicked function will be called
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
