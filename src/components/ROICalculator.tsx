
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState([20]);
  const [hourlyRate, setHourlyRate] = useState([25]);
  const [teamSize, setTeamSize] = useState([5]);
  const [industry, setIndustry] = useState('recruitment');

  const calculateROI = () => {
    const weeklyWaste = hoursPerWeek[0] * hourlyRate[0] * teamSize[0];
    const monthlyWaste = weeklyWaste * 4;
    const yearlyWaste = monthlyWaste * 12;
    
    // Conservative automation savings (50% of manual time)
    const automationSavings = weeklyWaste * 0.5;
    const monthlyAutomationSavings = automationSavings * 4;
    const yearlyAutomationSavings = monthlyAutomationSavings * 12;
    
    // Average investment based on industry
    const investmentMap = {
      recruitment: 3500,
      realestate: 4000, 
      marketing: 3000
    };
    
    const investment = investmentMap[industry as keyof typeof investmentMap];
    const paybackMonths = Math.ceil(investment / monthlyAutomationSavings);
    const yearlyROI = ((yearlyAutomationSavings - investment) / investment) * 100;
    
    return {
      weeklyWaste,
      monthlyWaste,
      yearlyWaste,
      automationSavings,
      monthlyAutomationSavings,
      yearlyAutomationSavings,
      investment,
      paybackMonths,
      yearlyROI
    };
  };

  const results = calculateROI();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate Your Automation ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly how much time and money automation could save your agency
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <Card className="bg-[#0F0F0F] border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Your Business Details</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-white font-medium mb-4">Industry Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'recruitment', label: 'Recruitment' },
                    { key: 'realestate', label: 'Real Estate' },
                    { key: 'marketing', label: 'Marketing' }
                  ].map((ind) => (
                    <button
                      key={ind.key}
                      onClick={() => setIndustry(ind.key)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        industry === ind.key 
                          ? 'bg-[#8B1538] text-white' 
                          : 'bg-[#1A1A1A] text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-4">
                  Hours per week spent on manual tasks: <span className="text-[#8B1538]">{hoursPerWeek[0]}</span>
                </label>
                <Slider
                  value={hoursPerWeek}
                  onValueChange={setHoursPerWeek}
                  max={60}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>5 hours</span>
                  <span>60 hours</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-4">
                  Average hourly cost per team member: <span className="text-[#8B1538]">£{hourlyRate[0]}</span>
                </label>
                <Slider
                  value={hourlyRate}
                  onValueChange={setHourlyRate}
                  max={100}
                  min={15}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>£15/hour</span>
                  <span>£100/hour</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-4">
                  Team size: <span className="text-[#8B1538]">{teamSize[0]} people</span>
                </label>
                <Slider
                  value={teamSize}
                  onValueChange={setTeamSize}
                  max={50}
                  min={2}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>2 people</span>
                  <span>50 people</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <Card className="bg-[#0F0F0F] border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Your Automation ROI</h3>
            
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-[#8B1538] mb-3">Current Waste</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Weekly Cost:</div>
                    <div className="text-white font-bold">£{results.weeklyWaste.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Monthly Cost:</div>
                    <div className="text-white font-bold">£{results.monthlyWaste.toLocaleString()}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-gray-400">Yearly Cost:</div>
                    <div className="text-red-400 font-bold text-lg">£{results.yearlyWaste.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-[#8B1538] mb-3">With Automation</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Weekly Savings:</div>
                    <div className="text-green-400 font-bold">£{results.automationSavings.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Monthly Savings:</div>
                    <div className="text-green-400 font-bold">£{results.monthlyAutomationSavings.toLocaleString()}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-gray-400">Yearly Savings:</div>
                    <div className="text-green-400 font-bold text-lg">£{results.yearlyAutomationSavings.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Investment Analysis</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-white">
                  <div>
                    <div className="text-gray-200">Investment:</div>
                    <div className="font-bold">£{results.investment.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-200">Payback Period:</div>
                    <div className="font-bold">{results.paybackMonths} months</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-gray-200">First Year ROI:</div>
                    <div className="font-bold text-lg">{results.yearlyROI.toFixed(0)}%</div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-300 text-sm mb-4">
                  Ready to stop wasting £{results.yearlyWaste.toLocaleString()} per year?
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white py-3"
                >
                  Get Your Custom Automation Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            These calculations are based on conservative estimates from our client results. 
            Actual savings often exceed these projections as automation compound benefits become clear.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
