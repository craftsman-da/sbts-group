"use client";
import { Shield, GraduationCap, HeartPulse, Layers } from "lucide-react"; 

export default function SolutionsOverview() {
  const solutions = [
    {
      title: <span className="text-gray-300">Enterprise Resource Planning (ERP) Solutions</span>,
      description:
        "SBTS ERP Solutions Empower Organizations To Automate Processes, Enhance Efficiency, And Drive Business Growth Through Innovative Software Platforms.",
      icon: <Layers className="w-8 h-8 text-gray-300" />,
    },
    {
      title: <span className="text-gray-300">Cybersecurity & Managed Security Services (MSSP)</span>,
      description:
        "Through Its Advanced Security Operations Center (SOC), SBTS Offers 24/7 Cybersecurity Services To Protect Organizations Against Threats And Infrastructure Breaches.",
      icon: <Shield className="w-8 h-8 text-gray-300" />,
    },
    {
      title: <span className="text-gray-300">E-Learning & Capacity Development Solutions</span>,
      description:
        "SBTS Provides Cutting-Edge Digital Learning Platforms And Workforce Development Training Programs To Prepare People For The Digital Economy.",
      icon: <GraduationCap className="w-8 h-8 text-gray-300" />,
    },
    {
      title: <span className="text-gray-300">Public Health & Emergency Response Systems</span>,
      description:
        "SBTS Has Custom-Designed Manager (SBTS) Solutions Integrating Public Health Databases Based On ERP Architectures.",
      icon: <HeartPulse className="w-8 h-8 text-gray-300" />,
    },
  ];

  return (
    <section className="bg-[url('/screenshot1.png')] bg-cover bg-center text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          SBTS Solutions Overview
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          SBTS Group Technology Provides A Comprehensive Suite Of
          Enterprise-Grade Digital Solutions Designed To Drive Innovation,
          Strengthen Institutions, And Promote Sustainable Human Capital
          Development.
        </p>

        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 
              transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-white/20"
            >
              <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                
                <div className="bg-cyan-900/40 p-3 rounded-full">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-cyan-300">
                  {solution.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-12">
          <button className="bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-all duration-300">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
