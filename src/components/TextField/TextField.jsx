import styles from './TextField.module.scss'
import PropTypes from "prop-types"

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    valueToUse: PropTypes.string.isRequired,
    onTyping: PropTypes.func.isRequired,
}

export default function TextField({ label, placeholderText, isRequired, valueToUse, onTyping }) {
    function handleTyping(event) {
        onTyping(event.target.value)
    }

    return (
        <div className={styles.textField}>
            <label>
                {label}
            </label>
            <input
                value={valueToUse}
                onChange={handleTyping}
                placeholder={placeholderText}
                required={isRequired}
            />
        </div>
    )
}