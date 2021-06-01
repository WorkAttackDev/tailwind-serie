type Props = {};

const Card: React.FC<Props> = ({children}) => {

return (
  <section className="relative flex flex-col shadow-lg rounded-xl p-8 h-[640px] w-[540px] ">
    {children}
    <footer className="absolute bottom-0 left-0 flex items-center w-full h-12 px-8 rounded-bl-xl rounded-br-xl bg-gradient-to-r  from-workattack-dark to-[#111827]">
    <img className="w-12 h-auto" src="/logo.svg" alt="logo" />
    <h1 className="text-white text-lg">WorkAttack</h1>
    <p className="text-white ml-auto">Visite workattackangola.com</p>
    </footer>
  </section>
);

}

export default Card;