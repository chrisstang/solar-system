import styles from './styles.module.scss'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

export default function PiInfo({ pi }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <div className={styles.piInfo}>
                <span className='d-inline-block position-relative'>
                    PI Value: 
                    {pi.length > 20 && (
                        <span class={styles.infoButton} onClick={handleShow}>
                            &#8505;
                            <span className="visually-hidden">Information for PI value</span>
                            <span className={styles.tooltip}>Click to view PI exact value</span>
                        </span>
                    )}
                </span>
                <span className={`${styles.piValue} text-white`}>{pi}</span>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>PI value with exact decimal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.breakAll}>
                        {pi}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
