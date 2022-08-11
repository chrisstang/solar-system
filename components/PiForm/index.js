import styles from './styles.module.scss'
import { Form, Button, Spinner, Toast } from 'react-bootstrap'
import { useSolarContext } from '../../context/solarContext'
import { useState } from 'react'
import PiInfo from './PiInfo'

export default function PiForm() {
    const { pi, setPi } = useSolarContext()
    const [isLoading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)
    const [showFail, setShowFail] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        try {
            const API = 'http://localhost:3000/api/calculate-pi'
            const formData = Object.fromEntries(new FormData(e.target))
            const res = await fetch(API, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json()
            setPi(result.piValue)
            setLoading(false)
            setShowSuccess(true)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setShowFail(true)
        }
    }

    return (
        <div className={styles.piBox}>
            <Form className={styles.piForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>Calculate PI value with desire decimal</Form.Label>
                    <Form.Control type="number" name="digit" size="sm" placeholder="10" />
                </Form.Group>
                <Button className="mb-3" type="submit" variant="success" size="sm" disabled={isLoading}>
                    {isLoading && ( <Spinner className="me-2" animation="border" variant="light" size="sm" /> )}
                    Calculate
                </Button>
            </Form>

            <PiInfo pi={pi} />

            <Toast className="bg-success text-white" onClose={() => setShowSuccess(false)} show={showSuccess} delay={2000} autohide>
                <Toast.Body>Update &#8508; value successfully.</Toast.Body>
            </Toast>

            <Toast className="bg-danger text-white" onClose={() => setShowFail(false)} show={showFail} delay={2000} autohide>
                <Toast.Body>Sorry, could not update value.</Toast.Body>
            </Toast>
        </div>
    )
}