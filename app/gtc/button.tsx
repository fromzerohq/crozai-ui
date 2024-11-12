const Button = ({ children, className, ...props }) => (
    <button
      className={`py-2 px-4 rounded-md border border-transparent transition-colors duration-300 
                  bg-blue-600 hover:bg-blue-700 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  
  export default Button;
  