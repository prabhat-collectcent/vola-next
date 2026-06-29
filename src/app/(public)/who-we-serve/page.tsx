"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🚨 THIS LINE FIXES HYDRATION ERROR
  if (!mounted) return null;

  return (
    <div dangerouslySetInnerHTML={{
      __html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Who we Serve</title>

<!-- Inter Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon.png">

<link href="assets/css/style.css" rel="stylesheet">
<link href="assets/js/script.js">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>


<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<script>
tailwind.config = {
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif']
}
}
}
}
</script>

<script>
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  }
}
</script>

</head>

<body class="font-inter bg-white">

<!-- HEADER -->
<header class="w-full bg-white fixed top-0 left-0 z-50">

<div class="max-w-6xl mx-auto px-2 md:px-6">

<div class="flex items-center justify-between h-[72px]">

<!-- Logo -->
<a href="/">
<div class="flex justify-start">
<img src="assets/images/logo.png" alt="logo" class="h-[100%]">
</div>
</a>

<!-- Desktop Navigation -->
<nav class="hidden md:flex items-center gap-10 text-gray-600 text-[15px]">

<a href="/solution" class="font-[inter] hover:text-black transition">Solutions</a>
<a href="/inventory" class="font-[inter] hover:text-black transition">Inventory</a>
<a href="/who-we-serve" class="font-[inter] hover:text-black transition font-semibold text-black">Who We Serve</a>
<a href="/about" class="font-[inter] hover:text-black transition">About</a>
<a href="/contact" class="font-[inter] hover:text-black transition">Contact</a>

</nav>

<!-- Desktop Buttons -->
<div class="hidden md:flex items-center gap-4">

<a href="/auth/login" class="px-5 py-2 border border-black rounded-full text-sm font-medium hover:border-[#A384F6] transition duration-300">
Sign in
</a>

<a href="/auth/register" class="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#995AF1] hover:opacity-90 transition duration-300">
Sign up
</a>

</div>

<!-- Mobile Menu Button -->
<button id="menu-btn" class="md:hidden">
<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
d="M4 6h16M4 12h16M4 18h16"/>
</svg>
</button>

</div>

</div>

<!-- Mobile Menu -->
<div id="mobile-menu" class="hidden md:hidden bg-white border-t">

<div class="flex flex-col px-6 py-4 gap-4 text-gray-700">

<a href="/solution">Solutions</a>
<a href="/inventory">Inventory</a>
<a href="/who-we-serve">Who We Serve</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>

<div class="flex gap-3 pt-4">

<a href="/auth/login" class="flex-1 text-center px-4 py-2 border border-black rounded-full text-sm">
Sign in
</a>

<a href="/auth/register" class="flex-1 text-center px-4 py-2 rounded-full text-white bg-[#995AF1] text-sm">
Sign up
</a>

</div>

</div>

</div>

</header>

<!-- FIRST SECTION -->
<section class="relative overflow-hidden bg-white py-24 px-6">

  <!-- Purple Gradient Glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] 
              bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.6),rgba(139,92,246,0.15),transparent_70%)]
              blur-[160px] pointer-events-none">
  </div>

  <!-- Content -->
  <div class="relative max-w-4xl mx-auto text-center">

    <!-- Badge -->
    <span class="inline-block bg-purple-100 text-purple-600 text-xs px-4 py-1 rounded-full mb-6 font-medium font-poppins">
      Who We Serve
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight font-[Arial] md:px-32">
      Built for Teams That Need Advertising to Perform
    </h2>

    <!-- Subtitle -->
    <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-inter font-semibold">
      Different teams have different pressures — timelines, KPIs, budgets, and scale challenges.
    </p>

    <!-- Description -->
    <p class="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
      Vola.ad is designed to adapt to how you work, giving every team the tools, intelligence, and control needed to move faster and deliver results across screens.
    </p>

    <!-- Highlight Line -->
    <p class="mt-6 text-gray-600 text-base font-medium">
      If performance matters to you, you’re in the right place.
    </p>

    <!-- Button -->
    <div class="mt-8">
      <a href="/auth/register"
         class="inline-block bg-[#995AF1] 
                text-white text-sm px-6 py-2 rounded-full 
                hover:opacity-90 transition duration-500 font-poppins">
        Get Started
      </a>
    </div>

  </div>

</section>

<!-- SECOND SECTION -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-6 md:px-[20%] font-poppins">
      Supporting Growth Across Teams, Agencies, and Industries
    </h2>

    <!-- Subheading -->
    <p class="text-gray-500 text-base md:text-base max-w-2xl mx-auto mb-12 font-poppins">
      Built for teams and businesses that want to run, manage, and scale digital advertising
      across apps, web, video, and connected TV
    </p>

    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
            Agencies & Media Teams
          </h3>

          <p class="text-gray-800 font-medium mb-3 font-[inter]">
            Built for teams managing complexity at scale.
          </p>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            Agencies and media teams operate under constant pressure — multiple clients,
            multiple channels, and zero room for inefficiency. Vola.ad centralizes planning,
            execution, optimization, and reporting so teams can run campaigns across apps,
            web, video, and CTV without juggling tools.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed font-[inter]">
            Campaigns launch faster. Optimization happens automatically. Reporting stays
            clear and client-ready.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins hover:no-underline">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Streamline Operations
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Manage multiple clients in one place
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Launch campaigns faster across channels
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Deliver clear, client-ready reports
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Reduce manual work with AI
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Second Card -->
    <div class="max-w-[1100px] mx-auto bg-[#ffffff] border border-gray-200 rounded-2xl p-6 md:p-10 text-left mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
            App Growth Teams
          </h3>

          <p class="text-gray-800 font-medium mb-3 font-[inter]">
            Designed for install quality, not just volume.
          </p>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            App growth teams need more than downloads — they need users who stick, engage, and convert. Vola.ad helps app marketers acquire high-intent users and re-engage them across mobile, web, video, and connected TV using real-time signals.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed font-[inter]">
            From first install to long-term retention, campaigns optimize continuously to improve lifetime value while controlling acquisition costs.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins hover:no-underline">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Drive Quality Growth
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Acquire high-intent users
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Re-engage inactive users
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Optimize for retention and LTV
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Control CPI efficiently
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Third Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
            Brands & Enterprises
          </h3>

          <p class="text-gray-800 font-medium mb-3 font-[inter]">
            Built for scale, consistency, and control.
          </p>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            Large brands and enterprises need reach without losing visibility. Vola.ad enables unified cross-screen campaigns that maintain message consistency while adapting delivery based on performance signals.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed font-[inter]">
            With centralized analytics, transparent reporting, and AI-driven optimization, teams gain clarity across regions, formats, and devices — without sacrificing control or brand safety.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins hover:no-underline">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Scale with Control
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Maintain cross-screen consistency
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Get centralized campaign visibility
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Scale without losing control
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Ensure brand-safe placements
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>


    <!-- Fourth Card -->
    <div class="max-w-[1100px] mx-auto bg-[#ffffff] border border-gray-200 rounded-2xl p-6 md:p-10 text-left mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
            D2C & E-commerce Teams
          </h3>

          <p class="text-gray-800 font-medium mb-3 font-[inter]">
            Optimized for conversion and revenue growth.
          </p>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            For D2C and e-commerce teams, every impression needs to move users closer to purchase. Vola.ad supports full-funnel strategies — from discovery and retargeting to conversion and repeat engagement — across apps, websites, video, and CTV.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed font-[inter]">
            Campaigns respond to real-time performance, reallocating budgets and refining targeting to maximize ROAS during both everyday sales and peak moments.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins hover:no-underline">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Maximize Revenue
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Drive conversions across the funnel
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Retarget high-intent users
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Maximize ROAS dynamically
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Scale during peak sales
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>


    <!-- Fifth Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
            Subscription & SaaS Teams
          </h3>

          <p class="text-gray-800 font-medium mb-3 font-[inter]">
            Focused on sustainable growth, not short-term spikes.
          </p>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            Subscription and SaaS businesses need predictable acquisition and long-term value. Vola.ad helps teams attract qualified users, reinforce value through repeated exposure across screens, and optimize campaigns toward retention and lifetime revenue.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed font-[inter]">
            With full-funnel visibility and intelligent optimization, teams scale acquisition while keeping churn and costs in check.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins hover:no-underline">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Sustain Growth
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Acquire high-LTV users
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Reinforce user engagement
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Reduce churn over time
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Balance cost and revenue
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>


  </div>
</section>

<!-- SECTION THREE -->
<section class="bg-white py-16 px-4">
  <div class="max-w-[1100px] mx-auto bg-[#F5F5FF] rounded-2xl px-6 py-12 md:px-12 md:py-8 text-center">

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-[inter]">
      One Platform. Many Ways to Win.
    </h2>

    <!-- Subheading -->
    <p class="text-xl md:text-3xl text-gray-800 mb-6 font-[inter]">
      While goals differ, the foundation stays the same.
    </p>

    <!-- Description -->
    <p class="text-gray-600 text-base md:text-base w-full mx-auto leading-relaxed font-[inter]">
      Vola.ad brings acquisition, media buying, inventory access, analytics, and AI optimization into a single system — flexible enough to adapt to each team’s needs while powerful enough to scale across industries.
    </p>

  </div>
</section>

<!-- SECTION FOUR -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-[1100px] mx-auto">
    
    <div class="relative overflow-hidden rounded-2xl bg-[#f3f3f5] px-6 sm:px-10 lg:px-16 py-10 sm:py-8 flex flex-col sm:flex-col items-start sm:items-center justify-between gap-6">

    <!-- Top Badge -->
    <div class="inline-block bg-[#EFE3FF] text-[#995AF1] text-xs font-light px-4 py-1 rounded-full font-[inter]">
      Ready to Scale?
    </div>
      
      <!-- Custom Gradient Glow -->
      <div class="pointer-events-none absolute inset-0">
        
        <!-- Main angled glow -->
        <div class="absolute top-[55%] w-[1800px] h-[300px] 
                    bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.6)_0%,_rgba(124,58,237,0.5)_40%,_rgba(255,255,255,0)_100%)]
                    rotate-[-5deg] blur-xl">
        </div>

      </div>

      <!-- Content -->
      <div class="relative z-10 text-center">
        <h2 class="text-xl sm:text-2xl lg:text-4xl font-semibold text-black leading-snug font-[inter] mb-2">
          Ready to See What Vola.ad Can Do for You?
        </h2>
        <p class="mt-2 text-xl sm:text-2xl lg:text-base font-normal text-black font-[inter] max-w-2xl mx-auto">
          If you see your team here, it’s time to move faster, smarter, and with more confidence across every screen.
        </p>
      </div>

      <!-- Button -->
      <a href="/auth/register">
        <div class="relative z-10">
        <button class="px-5 py-2.5 rounded-full border border-black text-sm sm:text-base font-medium bg-white backdrop-blur transition duration-300 hover:border-[#9E84F6]">
Connect with the campaign manager        </button>
      </div>
      </a>

    </div>

  </div>
</section>

<!-- Footer -->
<footer class="w-full bg-[#fff] rounded-[50px] px-6 overflow-hidden">

<div class="max-w-7xl mx-auto border-t border-[#DBCCFF] py-12 md:rounded-full">
<div class="max-w-5xl mx-auto">
  <!-- Top Only Border Highlight -->
<!-- Top Rounded Border Highlight (Exact Shape) -->

    <!-- Faded Watermark Logo -->
    <!-- <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
      <h1 class="text-[120px] md:text-[180px] font-semibold text-gray-800 whitespace-nowrap">
        <img src="assets/images/footer-wm.png">
      </h1>
    </div> -->

    <!-- Content -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- Logo Section -->
      <div class="flex flex-col justify-between">
        <div class="flex items-center gap-3">
         <img src="assets/images/logo.png" alt="Vola.ad logo" class="h-12 w-auto">
        </div>

        <p class="text-gray-500 text-sm mt-2">
          Vola.ad is an AI-powered advertising platform helping brands, apps, and agencies grow across mobile, web, video, and connected TV — with unified execution, real-time optimization, and measurable results.
        </p>

        <p class="text-gray-500 mt-6 text-sm">
          Vola.Ad © 2026 All right reserved.
        </p>
      </div>

      <!-- Quick Link -->
      <!-- <div>
        <h3 class="text-lg font-medium mb-4">Quick Link</h3>
        <ul class="space-y-3 text-gray-500">
          <li><a href="#" class="hover:text-black transition">Partners Certification</a></li>
          <li><a href="#" class="hover:text-black transition">Products</a></li>
          <li><a href="#" class="hover:text-black transition">Technology</a></li>
          <li><a href="#" class="hover:text-black transition">Features</a></li>
        </ul>
      </div> -->

      <!-- About -->
      <div>
        <h3 class="text-lg font-medium mb-4">Company</h3>
        <ul class="space-y-3 text-gray-500">
          <li><a href="/about" class="hover:text-black transition">About Vola.ad
</a></li>
          <li><a href="/contact" class="hover:text-black transition">Contact Us</a></li>
          <li><a href="/solution" class="hover:text-black transition">Solutions</a></li>
          <li><a href="/inventory" class="hover:text-black transition">Inventory</a></li>
          <li><a href="/who-we-serve" class="hover:text-black transition">Who We Serve</a></li>
        </ul>
      </div>

      <!-- Policies -->
      <div>
        <h3 class="text-lg font-medium mb-4">Legal</h3>
        <ul class="space-y-3 text-gray-500">
          <li><a href="privacy-policy.html" class="hover:text-black transition">Privacy Policy</a></li>
          <li><a href="terms.html" class="hover:text-black transition">Terms Of Services</a></li>
          <li><a href="cookie-policy.html" class="hover:text-black transition">Cookie Policy</a></li>
          <li><a href="data-processing-agreement.html" class="hover:text-black transition">Data Processing Agreement</a></li>
        </ul>
      </div>

    </div>

</div>
</div>

</footer>

<!-- Header JS -->
<script>
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
</script>

</body>
</html>` }} />
  );
}
