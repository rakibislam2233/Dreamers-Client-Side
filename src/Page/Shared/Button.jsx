

const Button = ({children}) => {
  return (
    <button className="py-2 px-8 border bg-green-500 border-green-500 rounded-full font-semibold text-white hover:bg-transparent hover:text-gray-500 duration-300 transition-all">
     {children}
    </button>
  );
};

export default Button;
