type CardProps = {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="mb-4">{children}</div>
      {footer && <div className="border-t pt-4 mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
