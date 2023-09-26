import React from 'react';

export function InvestmentShowcase(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Investment Card 1 */}
      <div className="bg-violet-950 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Investment Name 1</h2>
        <img src="investment1.jpg" alt="Investment 1" className="w-full mb-4" />
        <p className="text-white-600">Amount Raised: $100,000</p>
        <p className="text-white-600">Amount Needed to Complete: $50,000</p>
        <p className="text-white-600">Location: New York</p>
      </div>

      {/* Investment Card 2 */}
      <div className="bg-violet-950 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Investment Name 2</h2>
        <img src="investment2.jpg" alt="Investment 2" className="w-full mb-4" />
        <p className="text-white-600">Amount Raised: $200,000</p>
        <p className="text-white-600">Amount Needed to Complete: $100,000</p>
        <p className="text-white-600">Location: London</p>
      </div>

      {/* Investment Card 3 */}
      <div className="bg-violet-950 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Investment Name 3</h2>
        <img src="investment3.jpg" alt="Investment 3" className="w-full mb-4" />
        <p className="text-white-600">Amount Raised: $300,000</p>
        <p className="text-white-600">Amount Needed to Complete: $200,000</p>
        <p className="text-white-600">Location: Tokyo</p>
      </div>
    </div>
  );
}
