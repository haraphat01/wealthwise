import React from 'react';
import { InvestmentShowcase } from './investmentShowcase';

export function HomePage(): JSX.Element {
  return (
    <main className="bg-black-500 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-white text-lg font-semibold">WealthWise</a>
          <button className="text-white focus:outline-none md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Investments</a>
            <a href="#" className="text-white">Education</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </nav>
      </div>

      <main className="container mx-auto px-4 py-8 mt-6">
        <section className="text-center mb-12 mt-12">
          <h1 className="text-white font-bold mb-12 mt-12">Unlock Your Financial Potential</h1>
          <p className="text-lg text-white mb-12 mt-12">At WealthWise, we believe that wealth-building should be accessible, transparent, and empowering. Our mission is to transform the way you approach wealth creation and provide you with the tools and knowledge to secure your financial future.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Get Started</a>
        </section>

        <section className="mb-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Passive Income</h2>
              <p className="text-black-600">Earn passive income through real estate investments and grow your wealth.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Financial Education</h2>
              <p className="text-black-600">Access educational resources to learn about real estate investing and personal finance.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Portfolio Diversification</h2>
              <p className="text-black-600">Diversify your investment portfolio with real estate assets and reduce risk.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Accessible Investments</h2>
              <p className="text-black-600">Start building your wealth with just a few Rubles. Our platform is designed for individuals aged 20-30, making wealth-building within reach.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Transparent Transactions</h2>
              <p className="text-black-600">We're committed to transparency. Know where your money goes and how it grows.</p>
            </div>
          </div>
        </section>
        <section className='text-white text-center'>
          <h2 className="text-xl font-semibold mb-4">Upcoming Investment</h2>
          <InvestmentShowcase/>
        </section>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2023 WealthWise. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;