const Card = ({ children, className }: any) => (
  <div
    className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg ${className}`}
  >
    {children}
  </div>
);

export default Card;
