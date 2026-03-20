import React from 'react';

export default function StudentDashboard() {
  const upcomingItems = [
    { title: 'Final Thesis Draft', due: 'Due in 4 hours', course: 'PHIL202', level: 'Critical' },
    { title: 'Lab Report: Thermal', due: 'Due Oct 25', course: 'PHYS101', level: 'Standard' },
    { title: 'Reading Reflections', due: 'Due Oct 28', course: 'LIT105', level: 'Low' },
  ];

  const attendanceBars = [38, 56, 84, 28, 64];

  const grades = [
    { course: 'ECON302', title: 'Midterm Paper', grade: 'A-', score: '92%' },
    { course: 'MATH201', title: 'Calculus Quiz 4', grade: 'B+', score: '89%' },
    { course: 'ARTS410', title: 'Visual Essay', grade: '—', score: 'Reviewing' },
    { course: 'HIST110', title: 'Final Project', grade: 'A', score: '96%' },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <header className="rounded-2xl border border-[#e9e3f2] bg-[#f6f1fb] p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="w-full max-w-md">
            <label
              htmlFor="student-dashboard-search"
              className="flex items-center gap-2 rounded-xl border border-[#e3d9f2] bg-white px-4 py-2.5 text-sm text-text-secondary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                id="student-dashboard-search"
                type="search"
                placeholder="Search courses or assignments..."
                className="w-full bg-transparent outline-none placeholder:text-text-secondary"
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Notifications"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#dcd2ec] bg-white text-text-secondary transition hover:text-text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2a6 6 0 0 0-6 6v3.35c0 .75-.21 1.48-.62 2.1L4 15.5h16l-1.38-2.05a3.86 3.86 0 0 1-.62-2.1V8a6 6 0 0 0-6-6Zm0 20a3 3 0 0 0 2.82-2H9.18A3 3 0 0 0 12 22Z" />
              </svg>
            </button>

            <button
              aria-label="Help"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#dcd2ec] bg-white text-text-secondary transition hover:text-text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm.15 15.5a1.15 1.15 0 1 1 1.15-1.15 1.15 1.15 0 0 1-1.15 1.15ZM14 10.2a2.55 2.55 0 0 1-1.28 2.25l-.55.32a1.1 1.1 0 0 0-.57.98v.15h-2v-.24a2.9 2.9 0 0 1 1.5-2.57l.55-.32a.73.73 0 0 0 .35-.58.99.99 0 0 0-1.08-.92 1.15 1.15 0 0 0-1.17 1.1H7.8a3.05 3.05 0 0 1 3.17-2.9A2.92 2.92 0 0 1 14 10.2Z" />
              </svg>
            </button>

            <div className="flex items-center gap-2 rounded-full border border-[#dcd2ec] bg-white px-2 py-1.5">
              <div className="text-right leading-tight">
                <p className="text-xs font-semibold text-text-primary">Alex Johnson</p>
                <p className="text-[10px] text-text-secondary">Undergraduate</p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#f0e8ff] text-[10px] font-bold text-primary">AJ</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Overview Dashboard</p>
            <h1 className="mt-1 text-3xl font-bold text-text-primary">Welcome Alex,</h1>
            <p className="mt-1 text-sm text-text-secondary">Monday, October 23rd — You have <span className="font-semibold text-primary">4 tasks</span> due today.</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-[#dcd2ec] bg-white px-4 py-2 text-sm font-semibold text-text-primary">Generate Report</button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">New Assignment</button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <section className="rounded-2xl border border-[#e9e3f2] bg-white p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text-primary">Attendance Summary</h2>
            <button className="text-xs font-semibold text-text-secondary">•••</button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm font-semibold text-text-primary">
                <span>ECON302: Macroeconomics</span>
                <span className="text-primary">94%</span>
              </div>
              <div className="h-2 rounded-full bg-[#ece5f6]">
                <div className="h-2 rounded-full bg-primary" style={{ width: '94%' }} />
              </div>
              <p className="mt-2 text-xs text-text-secondary">Next Lecture: Tomorrow, 10:00 AM (Room 402)</p>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm font-semibold text-text-primary">
                <span>ARTS410: Modern Aesthetics</span>
                <span className="text-primary">82%</span>
              </div>
              <div className="h-2 rounded-full bg-[#ece5f6]">
                <div className="h-2 rounded-full bg-primary" style={{ width: '82%' }} />
              </div>
              <p className="mt-2 text-xs text-text-secondary">Target Attendance: 85% to maintain scholarship</p>
            </div>
          </div>

          <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-wide text-primary">Pro Analytics: Weekly Engagement</p>

          <div className="flex h-40 items-end gap-2">
            {attendanceBars.map((height, idx) => (
              <div key={`${height}-${idx}`} className="flex-1">
                <div className="rounded-t-xl bg-[#a892de]" style={{ height: `${height * 1.4}px` }} />
                <p className="mt-2 text-center text-[11px] text-text-secondary">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][idx]}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-5">
          <section className="rounded-2xl border border-[#e9e3f2] bg-white p-5">
            <h2 className="mb-4 text-2xl font-semibold text-text-primary">Upcoming</h2>

            <div className="space-y-3">
              {upcomingItems.map((item) => (
                <article key={item.title} className="rounded-xl border border-[#ece4f8] bg-[#faf8fd] p-3">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {item.due} • {item.course}
                    </p>
                  </div>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-primary">{item.level}</p>
                </article>
              ))}
            </div>

            <button className="mt-4 w-full border-t border-[#e8def6] pt-3 text-sm font-semibold text-primary">View All Assignments</button>
          </section>

          <section className="rounded-2xl bg-primary p-5 text-white">
            <h3 className="text-xl font-semibold">AcaFlow Pro</h3>
            <p className="mt-2 text-sm text-white/85">Unlock detailed AI grade predictions and collaborative workspaces.</p>
            <button className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary">Upgrade Now</button>
          </section>
        </div>
      </div>

      <section className="rounded-2xl border border-[#e9e3f2] bg-white p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-text-primary">Recent Grades & Submissions</h2>
          <div className="text-xs text-text-secondary">
            <span className="mr-3">● Graded</span>
            <span>● Pending</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {grades.map((item) => (
            <article key={`${item.course}-${item.title}`} className="rounded-xl border border-[#ece4f8] bg-[#faf8fd] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-text-secondary">{item.course}</p>
              <p className="mt-2 text-sm font-semibold text-text-primary">{item.title}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xl font-bold text-primary">{item.grade}</p>
                <p className="text-xs text-text-secondary">{item.score}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
