import React from 'react';


export default function LecturerDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary mb-1">Lecturer Portal 🎓</h1>
          <p className="text-text-secondary">Manage your courses, students, and academic materials.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2.5 bg-white border border-gray-100 rounded-xl text-text-primary font-semibold shadow-soft hover:bg-gray-50 transition-all">
            Export Reports
          </button>
          <button className="px-6 py-2.5 gradient-bg text-white rounded-xl font-bold shadow-soft hover:opacity-90 transition-all">
            Create Course
          </button>
        </div>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Total Students', value: '248', icon: '👥', color: 'text-primary' },
          { label: 'Avg. Course Rating', value: '4.9', icon: '⭐', color: 'text-yellow-500' },
          { label: 'Pending Gradings', value: '12', icon: '📝', color: 'text-secondary' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
             <div className="flex items-center justify-between">
                <div>
                   <div className="text-sm font-semibold text-text-secondary mb-1">{stat.label}</div>
                   <div className="text-4xl font-extrabold text-text-primary">{stat.value}</div>
                </div>
                <div className="text-4xl">{stat.icon}</div>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Management */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <div className="flex justify-between items-center mb-8">
                 <h2 className="text-2xl font-bold text-text-primary">Active Courses</h2>
                 <button className="text-primary font-bold hover:underline">Manage All</button>
              </div>
              
              <div className="space-y-6">
                 {[
                    { name: 'CS101: Introduction to Algorithms', students: 120, lectures: 'Mon/Wed', progress: 65 },
                    { name: 'DS202: Data Structures & Ethics', students: 85, lectures: 'Tue/Thu', progress: 40 },
                    { name: 'AI303: Machine Learning Basics', students: 43, lectures: 'Friday', progress: 85 }
                 ].map((course, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all bg-gray-50/30">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h3 className="font-bold text-lg text-text-primary">{course.name}</h3>
                             <div className="flex items-center space-x-4 mt-1 text-sm text-text-secondary font-medium">
                                <span>👥 {course.students} Students</span>
                                <span>📅 {course.lectures}</span>
                             </div>
                          </div>
                          <button className="p-2 hover:bg-white rounded-lg transition-colors text-text-secondary">•••</button>
                       </div>
                       <div className="flex items-center space-x-4">
                          <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                             <div className="h-full gradient-bg" style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-bold text-text-secondary">{course.progress}% Term</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Grading Queue */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <h2 className="text-2xl font-bold text-text-primary mb-8">Grading Queue</h2>
              <div className="space-y-4">
                 {[
                    { task: 'Midterm Essay', course: 'AI Foundations', count: 5, priority: 'High' },
                    { task: 'Lab Report #4', course: 'Algorithms', count: 7, priority: 'Medium' }
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 bg-white shadow-sm">
                       <div>
                          <div className="font-bold text-text-primary">{item.task}</div>
                          <div className="text-xs text-text-secondary">{item.course}</div>
                       </div>
                       <div className="flex items-center space-x-4">
                          <div className="text-right">
                             <div className="text-sm font-bold text-primary">{item.count} left</div>
                             <div className={`text-[10px] font-extrabold uppercase ${item.priority === 'High' ? 'text-red-500' : 'text-orange-500'}`}>
                                {item.priority}
                             </div>
                          </div>
                          <button className="px-4 py-2 bg-primary/5 text-primary text-xs font-bold rounded-lg hover:bg-primary/10">Grade</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-8">
           {/* Quick Attendance Check-in */}
           <div className="gradient-bg p-8 rounded-[2rem] text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Live Session</h3>
              <p className="text-sm text-white/80 mb-6">CS101 - Algorithm Lecture starts in 15 minutes.</p>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-xl shadow-soft mb-3">
                 Start Attendance
              </button>
              <button className="w-full py-3 bg-white/10 text-white border border-white/20 font-bold rounded-xl">
                 Open Virtual Room
              </button>
           </div>

           {/* Student Engagement Chart (Visual Placeholder) */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold mb-6 text-text-primary">Engagement Trends</h3>
              <div className="flex items-center justify-center py-10">
                 <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                       <circle cx="64" cy="64" r="50" stroke="url(#gradient)" strokeWidth="12" fill="transparent" strokeDasharray="314" strokeDashoffset="40" strokeLinecap="round" />
                       <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="#6C2BD9" />
                             <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                       </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-2xl font-black text-text-primary">85%</span>
                       <span className="text-[10px] font-bold text-text-secondary uppercase">Active</span>
                    </div>
                 </div>
              </div>
              <p className="text-center text-sm text-text-secondary">Students are 12% more engaged than last semester.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
