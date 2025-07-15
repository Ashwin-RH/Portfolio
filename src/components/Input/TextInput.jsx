
const TextInput = ({isDarkMode, value, handleInputChange, textarea, label}) => {
    const InputComponent = textarea ? "textarea" : "input";
  return (
    <div className="relative">
        <InputComponent
        type="text"
        className={`w-full px-4 pt-7 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
            isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white shadow-md hover:shadow-blue-500/10 focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-gray-100 border-gray-300 text-gray-900 shadow-md focus:border-blue-500 focus:bg-white"
        } `}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
        /> 
        <label className={`text-sm absolute left-4 top-2 pointer-events-none origin-left ${
            isDarkMode ? "text-gray-200/80" : "text-gray-800"
        }`}
        >
            {label}
        </label>
    </div>
  )
}

export default TextInput