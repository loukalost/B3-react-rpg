function Input ({
  label,
  value,
  onChange,
  onChangeText,
  ...props
}) {
  const handleChange = (e) => {
    if (onChange) onChange(e)
    if (onChangeText) onChangeText(e.target.value)
  }

  return (
    <label htmlFor={label} className='flex flex-col gap-2 w-1/2'>
      <span className='text-sm text-gray-700'>{label}</span>
      <input
        {...props}
        id={label}
        value={value}
        onChange={handleChange}
        className='border-2 border-gray-300 bg-white rounded-md p-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </label>
  )
}

export default Input
