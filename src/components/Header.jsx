import { Sparkles, School, Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-sky-50 via-white to-emerald-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <div className="flex items-start md:items-center gap-4 md:gap-6">
          <div className="p-3 md:p-4 rounded-2xl bg-sky-100 text-sky-700 shadow-sm">
            <Sparkles className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-800">
              Transforming Public Service with Data & Design
            </h1>
            <p className="mt-2 md:mt-3 text-slate-600 max-w-3xl text-sm md:text-base">
              A young informatics student presents a colorful monitoring dashboard to the dedicated staff at the
              Department of Industry and Trade of Banten Province — showcasing how SIINas tracks TKDN applications for
              small industries.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs md:text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                <School className="w-4 h-4" /> Informatics Student
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                <Building2 className="w-4 h-4" /> Disperindag Banten
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700">
                SIINas • TKDN
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
