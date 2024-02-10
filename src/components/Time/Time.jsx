import Collaborator from '../Collaborator/Collaborator'
import styles from './Time.module.scss'
import PropTypes from "prop-types"

Time.propTypes = {
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    collaborators: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChangeTheme: PropTypes.func,
}

export default function Time({ name, primaryColor, secondaryColor, collaborators, onDelete, onChangeTheme }) {

    return (
        collaborators.length > 0 && (
            <section
                className={styles.time}
                style={{ backgroundColor: secondaryColor }}
            >
                <input
                    onChange={(event) => onChangeTheme(event.target.value, name)}
                    value={secondaryColor}
                    type="color"
                    className={styles.inputColor}
                />
                <h3 style={{ borderColor: primaryColor }}>{name}</h3>
                <div className={styles.collaborators}>
                    {
                        collaborators.map((collaborator, index) => (
                            <Collaborator
                                key={index}
                                name={collaborator['name']}
                                role={collaborator['role']}
                                image={collaborator['image']}
                                primaryColor={primaryColor}
                                onDelete={onDelete}
                            />
                        ))
                    }
                </div>
            </section>
        )
    )
}