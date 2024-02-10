import Collaborator from '../Collaborator/Collaborator'
import styles from './Time.module.scss'
import PropTypes from "prop-types"
import hexToRgba from 'hex-to-rgba';

Time.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    idTime: PropTypes.string.isRequired,
    collaborators: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChangeTheme: PropTypes.func,
}

export default function Time({ name, color, idTime, collaborators, onDelete, onChangeTheme }) {

    return (
        collaborators.length > 0 && (
            <section
                className={styles.time}
                style={{
                    backgroundColor: hexToRgba(color, '0.3'),
                    backgroundImage: 'url(/assets/fundo.png)',
                }}
            >
                <label htmlFor={idTime}></label>
                <input
                    onChange={(event) => onChangeTheme({
                        color: event.target.value,
                        name,
                    })}
                    id={idTime}
                    value={color}
                    type="color"
                    className={styles.inputColor}
                />
                <h3 style={{ borderColor: color }}>{name}</h3>
                <div className={styles.collaborators}>
                    {
                        collaborators.map((collaborator, index) => (
                            <Collaborator
                                key={index}
                                name={collaborator['name']}
                                role={collaborator['role']}
                                image={collaborator['image']}
                                backgroundColor={color}
                                onDelete={onDelete}
                            />
                        ))
                    }
                </div>
            </section>
        )
    )
}