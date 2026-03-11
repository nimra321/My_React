import { createPortal } from "react-dom";

function Model({ isOpen, onClose , children }) {

    if (!isOpen) return null;

  return createPortal(
    <div style={styles.overlay} onClick={onClose}>
        <div style={styles.model} onClick={(e) => e.stopPropagation()}>
            {children}
            <button style={styles.btn} onClick={onClose}>Close</button>
        </div>
    </div>,
    document.querySelector('#model-root')
  )
}

const styles={
    overlay: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    model: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        minWidth: "300px"
    },
    btn: {
        marginTop: "20px"
    }
}

export default Model