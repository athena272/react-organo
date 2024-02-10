import Collaborator from '../Collaborator/Collaborator'
import styles from './Time.module.scss'
import PropTypes from "prop-types"
import hexToRgba from 'hex-to-rgba';

Time.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    collaborators: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChangeTheme: PropTypes.func,
}

export default function Time({ name, color, id, collaborators, onDelete, onChangeTheme }) {

    return (
        collaborators.length > 0 && (
            <section
                className={styles.time}
                style={{
                    backgroundColor: hexToRgba(color, '0.3'),
                    backgroundImage: 'url(/assets/fundo.png)',
                }}
            >
                <label htmlFor={id}></label>
                <input
                    onChange={(event) => onChangeTheme({
                        color: event.target.value,
                        id,
                    })}
                    id={id}
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