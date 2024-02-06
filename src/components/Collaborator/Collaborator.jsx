import styles from './Collaborator.module.scss'
import PropTypes from "prop-types"

Collaborator.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
}

export default function Collaborator({ name, role, image, primaryColor }) {
    return (
        <div className={styles.collaborator}>
            <div className={styles.header} style={{ backgroundColor: primaryColor }}>
                <img
                    src={image}
                    alt={name}
                    loading='lazy'
                />
            </div>
            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}