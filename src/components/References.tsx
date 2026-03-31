import { User, Phone, Mail, GraduationCap } from 'lucide-react';

const referenceData = [
  {
    name: "Dr. H.A. Naveen Dharmagunawardhane",
    degree: "", 
    title: "Senior Lecturer (Gr.II)",
    role: "HOD/Department of Materials Technology, Faculty of Technology",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 25 226 6379", "+94 71 224 8082"],
    email: "ndharmag@tec.rjt.ac.lk"
  },
  {
    name: "Mr. Damith Weerasinghe",
    degree: "B.sc.Eng",
    title: "",
    role: "Lecturer",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 71 074 3041"],
    email: "dcweeras@tec.rjt.ac.lk"
  }
];

const References = () => {
  return (
    <section id="references" className="py-24 relative z-10 bg-charcoal/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-metallicBlue">References</span>
          </h2>
          <div className="w-20 h-1 bg-metallicBlue mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-stretch">
          {referenceData.map((ref, idx) => (
            <div key={idx} className="glass-card-hover p-8 rounded-2xl max-w-lg w-full relative overflow-hidden group flex flex-col">
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-metallicBlue/10 rounded-full blur-3xl group-hover:bg-metallicBlue/20 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 shrink-0 shadow-lg">
                  <User className="w-8 h-8 text-slate-400" />
                </div>
                
                <div className="flex-1 flex flex-col h-full space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{ref.name}</h3>
                    {ref.degree && (
                      <p className="text-slate-400 flex items-center justify-center sm:justify-start gap-2 mt-1">
                        <GraduationCap className="w-4 h-4" /> {ref.degree}
                      </p>
                    )}
                    {ref.title && (
                      <p className="text-slate-400 mt-1">{ref.title}</p>
                    )}
                    <p className="text-metallicBlue font-medium mt-1">{ref.role}</p>
                    <p className="text-metallicBlue/80 text-sm mt-0.5">{ref.organization}</p>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-slate-700/50 mt-auto">
                    {ref.phones.map((phone, phoneIdx) => (
                      <a key={phoneIdx} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group/link w-fit mx-auto sm:mx-0">
                        <div className="p-2 rounded bg-slate-800 group-hover/link:bg-metallicBlue group-hover/link:text-white transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        {phone}
                      </a>
                    ))}
                    <a href={`mailto:${ref.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group/link w-fit mx-auto sm:mx-0">
                      <div className="p-2 rounded bg-slate-800 group-hover/link:bg-metallicBlue group-hover/link:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      {ref.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
