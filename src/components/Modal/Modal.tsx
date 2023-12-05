import { ReactNode } from "react";
import { Button } from "..";
import "./Modal.css";
import { HiOutlineXMark } from "react-icons/hi2";

interface ModalProps {
  titleHeading: string;
  titleContent: string;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal = ({
  titleHeading,
  titleContent,
  children,
  onClose,
}: ModalProps) => {
  return (
    <>
      <div className="modal__block">
        <div className="modal__heading">
          <h4>{titleHeading}</h4>
          <HiOutlineXMark className="modal__heading-ic" onClick={onClose} />
        </div>
        <div className="modal__content">
          <h2 className="modal__content-title">{titleContent}</h2>
          <div className="modal__content-body">{children}</div>
        </div>
        <div className="modal__action">
          <Button variant="modal-close" label="Close" onClick={onClose} />
        </div>
      </div>
      <div className="modal__background"></div>
    </>
  );
};
