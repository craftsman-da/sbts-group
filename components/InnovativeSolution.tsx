"use client";

const solutions = [
  {
    icon: <img src="/digital-ocean.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "Digital Workforce & Employment Solutions",
    description:
      "SBTS Builds The Next Generation Of Digital Professionals Through Workforce Training, Career Development, And Job Placement Programs.",
  },
  {
    icon: <img src="/mingcute_ai-fill.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "Data Analytics & Artificial Intelligence",
    description:
      "SBTS Leverages AI And Data Analytics Tools To Empower Institutions With Actionable Insights, Predictive Modeling, And Decision Support.",
  },
  {
    icon: <img src="/streamline-sharp.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "Public Health & Response Solutions",
    description:
      "SBTS Creates Custom Health Information Systems To Strengthen Healthcare Infrastructure, Tracking, Decision-Making, And Reporting.",
  },
  {
    icon: <img src="/simple-icons.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "ICT Consulting & Digital Transformation",
    description:
      "SBTS Partners With Governments, NGOs, And Enterprises To Deliver Strategic IT Roadmaps And Digital Transformation Strategies.",
  },
  {
    icon: <img src="/cloud-fill.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "Cloud Infrastructure & IT Modernization",
    description:
      "SBTS Implements Scalable Cloud Infrastructure, Strengthening System Reliability, Security, And Access Optimization.",
  },
  {
    icon: <img src="/service-fill.svg" alt="Fast" className="w-8 h-8 text-purple-600" />,
    title: "Smart Governance & Public Services",
    description:
      "SBTS Drives Governance Reforms Through Automation And Citizen-Centric Digital Services For Transparent, Accountable Institutions.",
  },
];

export default function InnovativeSolutions() {
  return (
    <section
      className="relative py-20 px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(189,0,255,0.1)), url('/tech-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto relative">
       
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Innovative Solutions. Lasting Impact.
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          SBTS Group Delivers Transformative Technology And Capacity-Building
          Solutions That Empower People.
        </p>

      
        <div className="grid sm:grid-cols-2 md:grid-cols-3 border border-gray-300 border-dotted rounded-xl overflow-hidden">
          {solutions.map((solution, index) => (
            <div
  key={index}
  className={`relative bg-white/70 p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-lg ${
    index < 3 ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[radial-gradient(circle,_gray_1px,_transparent_2px)] after:bg-[length:10px_1px]" : ""
  } ${
    index % 3 !== 2 ? "before:content-[''] before:absolute before:right-0 before:top-0 before:w-[1px] before:h-full before:bg-[radial-gradient(circle,_gray_1px,_transparent_2px)] before:bg-[length:1px_10px]" : ""
  }`}
>
              <div className="mb-4 flex items-center justify-center bg-purple-100 rounded-full w-14 h-14">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
