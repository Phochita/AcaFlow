import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side - Visual/Gradient */}
      <div className="hidden lg:flex w-1/2 gradient-bg p-12 flex-col justify-between text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold tracking-tight">AcaFlow</span>
          </div>
          
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Elevate Your <br />
            Academic Success.
          </h2>
          <p className="text-xl text-white/80 max-w-md">
            Join thousands of students and lecturers managing their academic life more efficiently.
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <p className="text-lg italic mb-4">
              "AcaFlow has completely transformed how I organize my studies. The AI planner is a game changer!"
            </p>
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 bg-white/30 rounded-full"></div>
               <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-sm text-white/60">Computer Science Student</div>
               </div>
            </div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold text-text-primary tracking-tight">AcaFlow</span>
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h1>
          <p className="text-text-secondary mb-8">Please enter your details to sign in.</p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="name@university.edu"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-text-primary">Password</label>
                <Link href="#" className="text-sm font-semibold text-primary hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-text-secondary">Remember for 30 days</label>
            </div>

            <button className="w-full py-4 rounded-xl gradient-bg text-white font-bold shadow-soft hover:opacity-90 transition-all">
              Sign In
            </button>

            <button className="w-full py-4 rounded-xl border border-gray-200 text-text-primary font-bold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>
          </form>

          <p className="text-center mt-8 text-text-secondary">
            Don't have an account? <Link href="/register" className="font-bold text-primary hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
