import Collaborator from '../Collaborator/Collaborator'
import styles from './Time.module.scss'
import PropTypes from "prop-types"

Time.propTypes = {
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    collaborators: PropTypes.array.isRequired,
}

export default function Time({ name, primaryColor, secondaryColor, collaborators }) {

    return (
        collaborators.length > 0 && (
            <section
                className={styles.time}
                style={{ backgroundColor: secondaryColor }}
            >
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
                            />
                        ))
                    }
                </div>
            </section>
        )
    )
}