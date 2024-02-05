import { useState } from 'react'
import PropTypes from "prop-types"
import Button from "../Button/Button";
import DropdownList from "../DropdownList/DropdownList";
import TextField from "../TextField/TextField";
import styles from './Form.module.scss'
import { times } from '../../data'

Form.propTypes = {
    onRegisterCollaborator: PropTypes.func.isRequired,
}

export default function Form({ onRegisterCollaborator }) {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const hanbleSalve = (event) => {
        event.preventDefault()
        onRegisterCollaborator({
            name,
            role,
            image,
            time
        })

        setName('')
        setRole('')
        setImage('')
        setTime('')
    }

    return (
        <section className={styles.form}>
            <form onSubmit={hanbleSalve}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome"
                    placeholderText="Digite seu nome"
                    isRequired={true}
                    valueToUse={name}
                    onTyping={value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholderText="Digite seu cargo"
                    isRequired={true}
                    valueToUse={role}
                    onTyping={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholderText="Digite o endereço da imagem"
                    isRequired={false}
                    valueToUse={image}
                    onTyping={value => setImage(value)}
                />
                <DropdownList
                    isRequired={true}
                    label="Time"
                    listItems={times}
                    valueToUse={time}
                    onSelectItem={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}