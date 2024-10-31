const Card = ({ children, className }) => (
  <div className={`rounded-xl shadow-lg bg-gray-900 border border-gray-800 overflow-hidden ${className}`}>
    {children}
  </div>
);

export default Card;