const AreaInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <textarea className='form-input' onChange={handleChange} {...otherProps}/>
        {label ?
        (<label
        className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}
        >
            {label}
        </label> )
        : null
        }
    </div>
)

export default AreaInput;