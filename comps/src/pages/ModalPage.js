import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        tempore debitis hic ipsum. Officia nostrum recusandae voluptatum
        tempora! Ab animi saepe vel temporibus quibusdam optio voluptates ullam
        dolore commodi!
      </p>
    </div>
  );
}

export default ModalPage;
