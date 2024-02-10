import { memo } from 'react';
import styles from './Collaborator.module.scss'
import PropTypes from "prop-types"
import { AiFillCloseCircle } from 'react-icons/ai';

Collaborator.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onDelete: PropTypes.func
}

function Collaborator({ id, name, role, image, backgroundColor, onDelete }) {
    return (
        <div className={styles.collaborator}>
            <AiFillCloseCircle
                size={35}
                onClick={() => onDelete(id)}
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
                <h3>{name}</h3>
                <h4>{role}</h4>
            </div>
        </div>
    )
}

export default memo(Collaborator)