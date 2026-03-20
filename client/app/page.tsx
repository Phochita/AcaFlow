import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-morphism px-6 py-4 flex justify-between items-center shadow-soft">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-soft">
            A
          </div>
          <span className="text-2xl font-bold text-text-primary tracking-tight">
            AcaFlow
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-text-secondary font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex space-x-4">
          <Link href="/login" className="px-6 py-2.5 rounded-xl border border-gray-200 text-text-primary font-semibold hover:bg-gray-50 transition-all">
            Log In
          </Link>
          <Link href="/register" className="px-6 py-2.5 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-all shadow-soft">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 text-center py-20 relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.1] mb-6">
            Master Your <span className="text-transparent bg-clip-text gradient-bg">Academic Journey</span> <br />
            with Intelligence.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one planner for students, lecturers, and admins. 
            Automate assignments, track attendance, and boost performance with AI.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/register" className="w-full md:w-auto px-10 py-4 rounded-xl gradient-bg text-white text-lg font-bold shadow-soft hover:scale-105 transition-transform">
              Start Free Trial
            </Link>
            <Link href="#demo" className="w-full md:w-auto px-10 py-4 rounded-xl border-2 border-primary/20 text-primary text-lg font-bold hover:bg-primary/5 transition-all">
              Watch Demo
            </Link>
          </div>

          <div className="mt-20 relative">
             {/* Placeholder for Dashboard Preview */}
            <div className="bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 max-w-5xl mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-700">
               <div className="aspect-video bg-gray-50 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-gray-300 font-medium text-lg">Dashboard Preview Loading...</div>
               </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="bg-white py-24 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">Everything You Need to Succeed</h2>
               <p className="text-text-secondary text-lg">Designed for the modern university ecosystem.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Smart Planner", desc: "AI-driven study scheduling based on your workload.", icon: "📅" },
                { title: "Attendance Tracking", desc: "Automated check-ins and real-time analytics for lecturers.", icon: "📍" },
                { title: "Assignment Manager", desc: "Submit, grade, and track progress seamlessly.", icon: "📚" }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] border border-gray-100 bg-background hover:shadow-soft transition-all group">
                   <div className="w-14 h-14 rounded-xl gradient-bg mb-6 flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">
                     {feature.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                   <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
           <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-16">Simple, Transparent Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {/* Free Tier */}
                 <div className="p-10 rounded-[2rem] border border-gray-100 bg-white shadow-soft">
                    <h3 className="text-2xl font-bold mb-4">Student Basic</h3>
                    <div className="text-4xl font-extrabold mb-6">$0 <span className="text-lg text-text-secondary font-medium">/ forever</span></div>
                    <ul className="text-left space-y-4 mb-10 text-text-secondary">
                       <li>✓ Course tracking</li>
                       <li>✓ Assignment list</li>
                       <li>✓ Basic attendance</li>
                    </ul>
                    <button className="w-full py-4 rounded-xl border-2 border-gray-100 font-bold hover:bg-gray-50 transition-all">Get Started</button>
                 </div>

                 {/* Pro Tier */}
                 <div className="p-10 rounded-[2rem] gradient-bg text-white shadow-2xl relative overflow-hidden transform scale-105">
                    <div className="absolute -top-4 -right-4 bg-white/20 w-32 h-32 rounded-full blur-2xl"></div>
                    <h3 className="text-2xl font-bold mb-4">Student Pro</h3>
                    <div className="text-4xl font-extrabold mb-6">$9 <span className="text-lg text-white/80 font-medium">/ month</span></div>
                    <ul className="text-left space-y-4 mb-10">
                       <li>✓ Everything in Basic</li>
                       <li>✓ AI-Powered Study Planner</li>
                       <li>✓ Advanced Performance Analytics</li>
                       <li>✓ Priority Support</li>
                    </ul>
                    <button className="w-full py-4 rounded-xl bg-white text-primary font-bold shadow-soft hover:bg-gray-50 transition-all">Go Pro Now</button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
               <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold">A</div>
               <span className="text-xl font-bold tracking-tight">AcaFlow</span>
            </div>
            <div className="flex space-x-8 text-white/60">
               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
               <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="mt-6 md:mt-0 text-white/40">
               © 2024 AcaFlow. All rights reserved.
            </div>
         </div>
      </footer>
    </div>
  );
}
