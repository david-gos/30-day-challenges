import { Button } from "~/components";
import "./ModalNotification.css";
import { Modal } from "~/components/Modal";
import { useState } from "react";

export const ModalNotification = () => {
  const [openModal, setOpenModal] = useState(true);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="container__modal">
        <Button
          variant="modal-open"
          label="Open Modal"
          size="large"
          onClick={() => setOpenModal(true)}
        />
        {openModal && (
          <Modal
            titleHeading="Welcome to my team"
            titleContent="How are you to day?"
            onClose={handleCloseModal}
          >
            <label>I'm fine thank you, and you?</label>
          </Modal>
        )}
      </div>
    </>
  );
};
