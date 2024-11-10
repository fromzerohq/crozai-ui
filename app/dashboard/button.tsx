const Button = ({ children, className, ...props }: any) => (
  <button
    className={`rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
