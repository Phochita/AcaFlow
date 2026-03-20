import React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Dashboard', icon: '📊', href: '/student' },
  { name: 'My Courses', icon: '📚', href: '/courses' },
  { name: 'Assignments', icon: '📝', href: '/assignments' },
  { name: 'Attendance', icon: '📍', href: '/attendance' },
  { name: 'AI Planner', icon: '✨', href: '/ai-planner' },
  { name: 'Subscription', icon: '⭐', href: '/subscription' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-6 fixed left-0 top-0 z-40">
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold">A</div>
        <span className="text-xl font-bold text-text-primary tracking-tight">AcaFlow</span>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-text-secondary font-medium hover:bg-primary/5 hover:text-primary transition-all group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-2xl border border-primary/10 mb-6">
           <div className="text-sm font-bold text-primary mb-1 flex items-center">
             <span className="mr-2">✨</span> Pro Plan Active
           </div>
           <p className="text-xs text-text-secondary leading-relaxed">
             You have access to all AI features.
           </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-soft overflow-hidden">
             <div className="w-full h-full gradient-bg opacity-50"></div>
          </div>
          <div className="flex-grow min-w-0">
             <div className="text-sm font-bold text-text-primary truncate">Alex Rivera</div>
             <div className="text-xs text-text-secondary truncate">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
}
