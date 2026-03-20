import React from 'react';

export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary mb-1">Welcome back, Alex! 👋</h1>
          <p className="text-text-secondary">Here's what's happening with your courses today.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2.5 bg-white border border-gray-100 rounded-xl text-text-primary font-semibold shadow-soft hover:bg-gray-50 transition-all">
            Settings
          </button>
          <button className="px-6 py-2.5 gradient-bg text-white rounded-xl font-bold shadow-soft hover:opacity-90 transition-all">
            New Task
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Overall GPA', value: '3.8', icon: '🎓', trend: '+0.2' },
          { label: 'Pending Assignments', value: '5', icon: '📝', trend: '-2' },
          { label: 'Attendance Rate', value: '94%', icon: '📍', trend: 'stable' },
          { label: 'Courses Active', value: '6', icon: '📚', trend: '0' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-lg transition-all group">
             <div className="w-12 h-12 rounded-xl bg-primary/5 mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
               {stat.icon}
             </div>
             <div className="text-sm font-semibold text-text-secondary mb-1">{stat.label}</div>
             <div className="flex items-end justify-between">
                <div className="text-3xl font-extrabold text-text-primary">{stat.value}</div>
                <div className={`text-xs font-bold px-2 py-1 rounded-lg ${
                   stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 
                   stat.trend.startsWith('-') ? 'bg-blue-50 text-blue-600' : 
                   'bg-gray-50 text-gray-500'
                }`}>
                   {stat.trend}
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area (Assignments) */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <div className="flex justify-between items-center mb-8">
                 <h2 className="text-2xl font-bold text-text-primary">Upcoming Assignments</h2>
                 <button className="text-primary font-bold hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                 {[
                    { title: 'Database Design Project', course: 'Advanced SQL', due: '2 days', status: 'In Progress', color: 'bg-primary' },
                    { title: 'Machine Learning Ethics', course: 'AI Foundations', due: '5 days', status: 'Pending', color: 'bg-secondary' },
                    { title: 'Network Security Audit', course: 'Cybersecurity', due: '1 week', status: 'Pending', color: 'bg-violet-400' }
                 ].map((assignment, idx) => (
                    <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-gray-50/50 border border-gray-50 hover:border-primary/20 transition-all group">
                       <div className="flex items-center space-x-4">
                          <div className={`w-3 h-12 ${assignment.color} rounded-full`}></div>
                          <div>
                             <div className="font-bold text-text-primary group-hover:text-primary transition-colors">{assignment.title}</div>
                             <div className="text-sm text-text-secondary">{assignment.course}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-sm font-bold text-text-primary">Due in {assignment.due}</div>
                          <div className="text-xs text-text-secondary">{assignment.status}</div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Course Overview */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <h2 className="text-2xl font-bold text-text-primary mb-8">Current Course Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                    { name: 'Data Science', progress: 75, grade: 'A' },
                    { name: 'Cloud Computing', progress: 40, grade: 'B+' }
                 ].map((course, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-background">
                       <div className="flex justify-between items-start mb-4">
                          <div className="font-bold">{course.name}</div>
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{course.grade}</div>
                       </div>
                       <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full gradient-bg" style={{ width: `${course.progress}%` }}></div>
                       </div>
                       <div className="mt-3 text-xs font-bold text-text-secondary">{course.progress}% Completed</div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar Analytics Area */}
        <div className="space-y-8">
           {/* Attendance Mini-Card */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <h3 className="text-xl font-bold mb-6">Weekly Attendance</h3>
              <div className="flex justify-between items-end h-32 space-x-2">
                 {[40, 70, 90, 60, 100, 30, 80].map((h, i) => (
                    <div key={i} className="flex-grow flex flex-col items-center">
                       <div 
                         className="w-full rounded-t-lg gradient-bg opacity-20 hover:opacity-100 transition-all" 
                         style={{ height: `${h}%` }}
                       ></div>
                       <div className="mt-2 text-[10px] text-text-secondary font-bold">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* AI Recommendations */}
           <div className="gradient-bg p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                 <span className="mr-2">✨</span> AI Insights
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                 "Based on your upcoming deadlines, you should focus on Database Design today for 2 hours to stay on track."
              </p>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-xl shadow-soft hover:bg-gray-50 transition-all">
                 Generate Study Plan
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
