import styles from './Collaborator.module.scss'
import PropTypes from "prop-types"
import { AiFillCloseCircle } from 'react-icons/ai';

Collaborator.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onDelete: PropTypes.func
}

export default function Collaborator({ name, role, image, backgroundColor, onDelete }) {
    return (
        <div className={styles.collaborator}>
            <AiFillCloseCircle
                size={35}
                onClick={onDelete}
                className={styles.delete}
            />
            <div className={styles.header} style={{ backgroundColor: backgroundColor }}>
                <img
                    src={image}
                    alt={name}
                    loading='lazy'
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}