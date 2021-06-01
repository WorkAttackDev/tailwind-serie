import CodeBlock from "../CodeBlock";
import Card from "../Card";

type Props = {};

const cdnRestrictions = [
  "Não é possivel customizar o tema padrão",
  "Não é possivel remover as classes não usadas",
  "Não é possivel usar qualquer directiva como `@apply`, `@variants`, etc.",
  "Não é possivel usar plugins",
]

const Setup01: React.FC<Props> = () => {

return (
  <>
  {/* <Card>
    <h1 className="text-xl font-bold">Instalação via CDN</h1>
    <p className="text-gray-700 text-sm">A forma mais fácil de usar o <strong>Tailwind</strong> no seu ambiente é usando um <strong>CDN</strong>.
    </p>
    <CodeBlock>
      {`<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`}
    </CodeBlock>
    <ul className="mb-4">
      {cdnRestrictions.map(_cdnR => (
        <li key={_cdnR} className="flex items-center mb-2">
          <svg class="w-6 h-6 flex-none mt-0.5" fill="none"><circle cx="12" cy="12" r="12" fill="#FECDD3"></circle><path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" stroke-width="2"></path></svg>
          <p className="mx-4 text-sm text-gray-700">{_cdnR}</p>
        </li>
      ))}
    </ul>
    <h1 className="text-xl font-bold">Instalação via PostCSS plugin</h1>
    <p className="text-gray-700 text-sm">
      Para instalar o tailwind via <strong>PostCSS</strong> é necessário ter o <strong>Node.js 12.13.0 ou superior</strong>.
    </p>
    <CodeBlock>
      npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    </CodeBlock>
  </Card> */}
  {/* <Card>
    <h1 className="text-xl font-bold">Instalar Tailwind como PostCSS plugin</h1>
    <p className="text-gray-700 text-sm">
      Após a intalação temos que criar e configurar o arquivo <strong>postcss.config.js</strong> na raiz do projecto, e adicionar o  <strong>tailwindcss</strong> e o  <strong>autoprefixer</strong>.
    </p>
    <CodeBlock>
      <span className="opacity-50">// postcss.config.js</span>
      <pre>
        {`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`}
      </pre>
    </CodeBlock>
    <h1 className="text-xl font-bold">Criar arquivo de configuração</h1>
    <p className="text-gray-700 text-sm">
      Se quiser customizar o seu <strong>Tailwind</strong>, precisa gerar um ficheiro de configuração usando a <strong>CLI do Tailwind</strong>, que está incluida na instalação do <strong>Tailwind</strong>.
    </p>
    <CodeBlock> 
      npx tailwindcss init
    </CodeBlock>
  </Card> */}
  {/* <Card>
    <h1 className="text-xl font-bold">Criar arquivo de configuração</h1>
    <p className="text-gray-700 text-sm">
      E então vai ser gerado um simples ficheiro <strong>tailwind.config.js</strong> na raiz do projecto.
    </p>
    <CodeBlock>
       <span className="opacity-50">// tailwind.config.js</span>
      <pre>
        {`module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}`}
      </pre>
    </CodeBlock>
    <h1 className="text-xl font-bold">Incluir o Tailwind no CSS</h1>
    <p className="text-gray-700 text-sm">
      Crie um arquivo css se ainda não tiver, e usa a directiva <strong>@tailwind</strong> para inserir os estilos utilitários <strong>base, components, e utilities</strong>.
    </p>
  </Card> */}
  <Card>
    <h1 className="text-xl font-bold">Incluir o Tailwind no CSS</h1>
    <CodeBlock>
      <span className="opacity-50">/ Seu styles.css /</span>
      <p>@tailwind base;</p>
      <p>@tailwind components;</p>
      <p>@tailwind utilities;</p>
    </CodeBlock>
    <p className="text-gray-700 text-sm">
      Se estiver a usar um framework <strong>React, Vue etc.</strong> pode importar o css directamente no <strong>Javascript</strong>, ou então importar o arquivo <strong>tailwindcss/tailwind.css</strong> que tem todas as directivas de estilo.
    </p>
    <CodeBlock>
      <span className="opacity-50">// myapp.js</span>
      <p>import "tailwindcss/tailwind.css"</p>
    </CodeBlock>
  </Card>
  </>
);

}

export default Setup01;