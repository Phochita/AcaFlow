import React from 'react';

export default function LecturerDashboard() {
  const courses = [
    { code: 'CS101', name: 'Programming', students: 32 },
    { code: 'MATH202', name: 'Calculus', students: 28 },
    { code: 'ENG210', name: 'Academic Writing', students: 25 },
  ];

  const submissions = [
    { student: 'John D.', item: 'CS101 Project', date: 'Apr 10' },
    { student: 'Mary S.', item: 'MATH202 Quiz', date: 'Apr 12' },
    { student: 'Amira K.', item: 'ENG210 Essay', date: 'Apr 14' },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Welcome back, Dr. Smith</h1>
        <p className="mt-1 text-sm text-text-secondary md:text-base">Lecturer Dashboard</p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-text-primary md:text-xl">Quick Stats</h2>
          <div className="space-y-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary">Courses</p>
              <p className="mt-1 text-xl font-bold text-text-primary">3</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary">Pending Submissions</p>
              <p className="mt-1 text-xl font-bold text-text-primary">12</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary">Students Total</p>
              <p className="mt-1 text-xl font-bold text-text-primary">85</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary md:text-xl">My Courses</h2>
            <button className="text-sm font-semibold text-primary hover:underline">View All Courses</button>
          </div>

          <div className="space-y-3">
            {courses.map((course) => (
              <article key={course.code} className="rounded-xl border border-gray-200 bg-gray-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-text-primary md:text-base">
                      {course.code} - {course.name}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary md:text-sm">{course.students} students enrolled</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-text-primary hover:border-primary/30">
                      Manage
                    </button>
                    <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:opacity-90">
                      Mark Attend
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary md:text-xl">Recent Submissions</h2>
            <button className="text-sm font-semibold text-primary hover:underline">Grade All</button>
          </div>

          <div className="space-y-3">
            {submissions.map((submission) => (
              <article
                key={`${submission.student}-${submission.item}`}
                className="rounded-xl border border-gray-200 bg-gray-50/70 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text-primary md:text-base">
                      {submission.student} - {submission.item}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary md:text-sm">Submitted {submission.date}</p>
                  </div>
                  <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-text-primary hover:border-primary/30">
                    Grade
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-text-primary md:text-xl">Attendance Today</h2>
            <p className="mt-2 text-sm text-text-secondary">Apr 20, 2025</p>
            <button className="mt-4 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90">
              Mark Attendance
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-text-primary md:text-xl">Quick Access</h2>
            <div className="grid grid-cols-1 gap-2">
              {['Manage Courses', 'Create Assignment', 'Mark Attendance', 'Grade Submissions'].map((action) => (
                <button
                  key={action}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-left text-sm font-medium text-text-primary transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
