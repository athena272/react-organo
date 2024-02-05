import styles from './DropdownList.module.scss'
import PropTypes from "prop-types"

DropdownList.propTypes = {
    label: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
    valueToUse: PropTypes.string.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    isRequired: PropTypes.bool.isRequired,
}

export default function DropdownList({ label, listItems, valueToUse, onSelectItem, isRequired }) {

    return (
        <div className={styles.dropdownList}>
            <label>{label}</label>
            <select value={valueToUse} onChange={(event) => onSelectItem(event.target.value)} required={isRequired}>
                <option value="" disabled>Selecione um time...</option>
                {
                    listItems.map((item, index) => (
                        <option key={index}>
                            {item['name']}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}