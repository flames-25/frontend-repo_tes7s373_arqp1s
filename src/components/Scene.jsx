import { motion } from 'framer-motion';
import { Cpu, BarChart3, Network, Activity } from 'lucide-react';

export default function Scene() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-emerald-50/60" />

      <div className="relative max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Anime-style characters & environment illustration (symbolic UI) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg p-6 md:p-8 border border-slate-200/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 grid place-content-center shadow">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800">Anime-style Presentation</h3>
                <p className="text-slate-600 text-sm">Young informatics student sharing insights with government staff.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-2 h-40 md:h-48 rounded-2xl bg-gradient-to-r from-sky-100 via-white to-emerald-100 border border-slate-200/60 p-4"
              >
                <div className="h-full w-full grid grid-cols-12 gap-2">
                  {/* Dashboard screen frame */}
                  <div className="col-span-9 bg-white/90 rounded-xl p-3 border border-slate-200/60">
                    <div className="h-4 w-24 bg-sky-200 rounded" />
                    <div className="mt-3 grid grid-cols-6 gap-2">
                      <div className="col-span-3 h-20 rounded-md bg-gradient-to-tr from-sky-200 to-sky-400/70" />
                      <div className="col-span-3 h-20 rounded-md bg-gradient-to-tr from-orange-200 to-orange-400/70" />
                      <div className="col-span-2 h-12 rounded-md bg-gradient-to-tr from-emerald-200 to-emerald-400/70" />
                      <div className="col-span-2 h-12 rounded-md bg-gradient-to-tr from-sky-200 to-sky-400/70" />
                      <div className="col-span-2 h-12 rounded-md bg-gradient-to-tr from-orange-200 to-orange-400/70" />
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col gap-2">
                    <div className="h-10 rounded-md bg-white/90 border border-slate-200/60 grid place-content-center text-sky-700 text-xs font-medium">
                      SIINas TKDN Feed
                    </div>
                    <div className="h-10 rounded-md bg-white/90 border border-slate-200/60 grid place-content-center text-emerald-700 text-xs font-medium">
                      Live Status
                    </div>
                    <div className="h-10 rounded-md bg-white/90 border border-slate-200/60 grid place-content-center text-orange-700 text-xs font-medium">
                      Alerts · OK
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Staff desks & documents */}
              <div className="h-28 rounded-2xl border border-slate-200/60 bg-white/80 p-4">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <Network className="w-4 h-4 text-emerald-600" />
                  Integrated terminals, neatly stacked documents, and digital holograms float above.
                </div>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-sky-100 text-sky-700 text-xs">Data Link</span>
                  <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs">Workflow</span>
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs">Compliance</span>
                </div>
              </div>

              {/* Sunlight & mood */}
              <div className="h-28 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-4">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <Activity className="w-4 h-4 text-orange-600" />
                  Sunlight streams through large windows—optimism and collaboration.
                </div>
                <div className="mt-3 h-2 w-full rounded bg-gradient-to-r from-orange-300 via-amber-200 to-sky-300" />
              </div>
            </div>
          </motion.div>

          {/* Right: Live-like KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg p-6 md:p-8 border border-slate-200/60"
          >
            <h3 className="text-lg md:text-xl font-semibold text-slate-800">SIINas TKDN Monitor</h3>
            <p className="text-slate-600 text-sm">Symbolic charts and indicators representing flows and compliance.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/60 bg-sky-50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 text-sm font-medium flex items-center gap-2"><BarChart3 className="w-4 h-4 text-sky-600"/> Applications</span>
                  <span className="text-sky-700 text-xs">30d</span>
                </div>
                <div className="mt-3 h-16 w-full bg-gradient-to-tr from-sky-200 to-sky-400/70 rounded-md" />
                <div className="mt-2 text-slate-700 text-lg font-semibold">1,284</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/60 bg-emerald-50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 text-sm font-medium flex items-center gap-2"><Network className="w-4 h-4 text-emerald-600"/> Integrations</span>
                  <span className="text-emerald-700 text-xs">real-time</span>
                </div>
                <div className="mt-3 h-16 w-full bg-gradient-to-tr from-emerald-200 to-emerald-400/70 rounded-md" />
                <div className="mt-2 text-slate-700 text-lg font-semibold">42</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/60 bg-orange-50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 text-sm font-medium flex items-center gap-2"><Activity className="w-4 h-4 text-orange-600"/> Compliance</span>
                  <span className="text-orange-700 text-xs">this week</span>
                </div>
                <div className="mt-3 h-16 w-full bg-gradient-to-tr from-orange-200 to-orange-400/70 rounded-md" />
                <div className="mt-2 text-slate-700 text-lg font-semibold">96%</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/60 bg-slate-50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 text-sm font-medium">Processing Time</span>
                  <span className="text-slate-500 text-xs">avg</span>
                </div>
                <div className="mt-3 h-16 w-full grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-full rounded bg-gradient-to-t from-slate-200 to-white" style={{ height: `${20 + i * 8}%` }} />
                  ))}
                </div>
                <div className="mt-2 text-slate-700 text-lg font-semibold">2.1d</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: 'Data Quality', color: 'sky', value: 92 },
                { label: 'Uptime', color: 'emerald', value: 99 },
                { label: 'Satisfaction', color: 'orange', value: 94 },
              ].map((kpi, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200/60 bg-white">
                  <div className="text-xs text-slate-600">{kpi.label}</div>
                  <div className="mt-2 h-2 w-full rounded bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded ${kpi.color === 'sky' ? 'bg-sky-400' : kpi.color === 'emerald' ? 'bg-emerald-400' : 'bg-orange-400'}`} style={{ width: `${kpi.value}%` }} />
                  </div>
                  <div className="mt-1 text-slate-700 text-sm font-semibold">{kpi.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
