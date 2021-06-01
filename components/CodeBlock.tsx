type Props = {};

const CodeBlock: React.FC<Props> = ({children}) => {

return (
  <div className="bg-gradient-to-r  from-workattack-dark to-[#111827] text-white py-2 px-4 my-8 rounded-xl">
      {children}
  </div>
);

}

export default CodeBlock;