import ReactDOM from "react-dom";
import DefaultProps from "../../interfaces/DefaultProps";
import "./styles.css";

interface ModalProps extends DefaultProps {
  onClose: () => void;
}

const Backdrop: React.FC<ModalProps> = (props) => {
  return <div className="modal_backdrop" onClick={props.onClose}></div>;
};

const Overlay: React.FC<DefaultProps> = (props) => {
  return (
    <div className="modal_container">
      <div className="modal_content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
