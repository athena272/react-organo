import styles from './Field.module.scss'
import PropTypes from "prop-types"

Field.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    valueToUse: PropTypes.string.isRequired,
    onTyping: PropTypes.func.isRequired,
}

export default function Field({ id, label, placeholderText, isRequired, valueToUse, onTyping }) {
    function handleTyping(event) {
        onTyping(event.target.value)
    }

    return (
        <div className={styles.field}>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                aria-label={id}
                id={id}
                value={valueToUse}
                onChange={handleTyping}
                placeholder={placeholderText}
                required={isRequired}
            />
        </div>
    )
}