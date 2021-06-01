import Head from 'next/head';
import Setup01 from '../components/chapters/Setup01';

export default function Home() {
  return (
    <main className="min-h-full flex flex-col items-center justify-center p-4">
      <Setup01 />
      <div className="flex items-center justify-between my-8">
        <img className="w-12 h-auto mr-4" src="/tailwind.svg" alt=""/>
        <p className="font-medium">Feito com Tailwind</p>
      </div>
    </main>
  );
}