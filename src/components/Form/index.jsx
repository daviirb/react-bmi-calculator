import { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {
    let [weight, setWeight] = useState(0)
    let [height, setHeight] = useState(0)
    let [result, setResult] = useState(0)
    let [message, setMessage] = useState('')
    


    const calculaImc = () => weight / (Math.pow(height, 2))

    
    const resposta = () => {
    if (calculaImc() <= 16.9) {
        message = ('Muito abaixo do peso')
    } else if (calculaImc() < 18.4) {
        message = ('Abaixo do peso')
    } else if (calculaImc() < 24.9) {
        message = ('Peso normal')
    } else if (calculaImc() < 29.9) {
        message = ('Acima do peso')
    } else if (calculaImc() < 34.9) {
        message = ('Obesidade Grau I')
    } else if (calculaImc() < 40) {
        message = ('Obesidade Grau II')
    } else if (calculaImc() > 40) {
        message = ('Obesidade Grau III')
    }
    return message
}
    
    return (
        <>
        <div className={styles.display}>
            <h1>Calculadora de IMC</h1>
            <span className={styles.result}>{ result }</span>
            <span className={styles.message}>{ message }</span>
        </div>
        <form className="form">
            <div className={styles.informations}>
                <div className={styles.input}>
                <label>Peso em Kg:</label>
                <input type="number" placeholder='Digite seu peso atual' onChange= { ({target}) => setWeight(target.value)} />
                </div>
                <div className={styles.input}>
                <label>Altura em Metros:</label>
                <input type="number" placeholder='Digite sua altura' onChange={ ({target}) => setHeight(target.value)} />
                </div>
            </div>    
            <button type='button' onClick={ () => {setResult(calculaImc().toFixed(2)), setMessage(resposta())} }>Calcular IMC</button>
            </form>
        </>
    )
}

export default Form
