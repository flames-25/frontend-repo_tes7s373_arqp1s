import { GraduationCap, ShieldCheck, Sun, Laptop } from 'lucide-react';

export default function InfoPanel() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm">
            <div className="flex items-center gap-3 text-sky-700">
              <GraduationCap className="w-5 h-5" />
              <h4 className="font-semibold text-slate-800">Educational</h4>
            </div>
            <p className="mt-3 text-slate-600 text-sm">
              Concepts are explained clearly like a technology anime—inviting curiosity and understanding.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm">
            <div className="flex items-center gap-3 text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="font-semibold text-slate-800">Transparent</h4>
            </div>
            <p className="mt-3 text-slate-600 text-sm">
              SIINas tracks TKDN for small industries with clarity—efficiency and accountability in focus.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm">
            <div className="flex items-center gap-3 text-orange-700">
              <Sun className="w-5 h-5" />
              <h4 className="font-semibold text-slate-800">Optimistic</h4>
            </div>
            <p className="mt-3 text-slate-600 text-sm">
              Sunlit spaces, teamwork, and innovation—public service transformation with energy.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 md:p-6 rounded-2xl border border-slate-200/60 bg-gradient-to-r from-sky-50 via-white to-emerald-50">
          <div className="flex items-center gap-3 text-slate-700">
            <Laptop className="w-5 h-5 text-sky-600" />
            <p className="text-sm">
              Color palette: light blue, white, orange, and soft green—representing progress and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
