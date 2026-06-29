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

<title>Inventory</title>

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
<a href="/inventory" class="font-[inter] hover:text-black transition font-semibold text-black">Inventory</a>
<a href="/who-we-serve" class="font-[inter] hover:text-black transition">Who We Serve</a>
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
    <span class="inline-block bg-[#EFE3FF] text-purple-600 text-xs px-4 py-1 rounded-full mb-6 font-medium font-poppins">
      Inventory
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight font-[Arial] md:px-32">
      Inventory Built for Attention Across Every Screen
    </h2>

    <!-- Subtitle -->
    <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-inter font-semibold">
      Advertising works when it feels native to how people consume content. Vola.ad connects your brand to premium inventory across mobile, web, video, and CTV.
    </p>


    <!-- Button -->
    <div class="mt-8">
      <a href="/auth/register"
         class="inline-block bg-[#995AF1] 
                text-white text-sm px-6 py-2 rounded-full 
                hover:opacity-90 transition duration-500 font-poppins">
Connect with the campaign manager      </a>
    </div>

  </div>

</section>


<!-- SECTION SECOND  -->
  <section class="w-full bg-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-10">
  <div class="max-w-[1100px] mx-auto border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-14">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      <!-- LEFT CONTENT -->
      <div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 font-[inter]">
          Scale That Actually Shows Up
        </h2>

        <p class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl font-[inter]">
          Vola.ad delivers 2.5 Billion+ monthly impressions across a global,
          brand-safe inventory ecosystem. Ads are served only when users are
          active on their screens — whether that’s scrolling, watching, or
          engaging with content.
        </p>
      </div>

      <!-- RIGHT CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        
        <!-- Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
          <h3 class="text-xl font-medium text-black">2.5B+</h3>
          <p class="text-gray-600 text-sm">Monthly Reach</p>
        </div>

        <!-- Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
          <h3 class="text-xl font-medium text-black">100%</h3>
          <p class="text-gray-600 text-sm">Active Engagement</p>
        </div>

        <!-- Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
          <h3 class="text-xl font-medium text-black">Premium</h3>
          <p class="text-gray-600 text-sm">Brand Safety</p>
        </div>

        <!-- Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
          <h3 class="text-xl font-medium text-black">Global</h3>
          <p class="text-gray-600 text-sm">Inventory</p>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- SECTION -->
<section class="w-full bg-[#fff] py-12 px-4 sm:px-6 lg:px-10">
  <div class="max-w-[1100px] mx-auto border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-14 text-center">
    
    <!-- HEADING -->
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 font-[inter]">
      How Attention Flows Today
    </h2>

    <!-- SUBTEXT -->
    <p class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-[inter]">
      Attention isn’t static — it moves. Our inventory is structured around real behaviors — ensuring formats appear naturally within each environment, not forced into it.
    </p>

    <!-- CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Card 1 -->
      <div class="bg-white border border-gray-200 rounded-xl p-6 text-left flex flex-col gap-4">

              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              
        <h3 class="text-lg font-semibold text-black">Short Sessions</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Tapping through apps with high-intent.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white border border-gray-200 rounded-xl p-6 text-left flex flex-col gap-4">

              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>

        <h3 class="text-lg font-semibold text-black">Research Mode</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Browsing and comparing on websites.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white border border-gray-200 rounded-xl p-6 text-left flex flex-col gap-4">

              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>

        <h3 class="text-lg font-semibold text-black">Focused Watch</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Engaging deeply with video content.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white border border-gray-200 rounded-xl p-6 text-left flex flex-col gap-4">

              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>

        <h3 class="text-lg font-semibold text-black">Lean Back</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Immersive engagement on connected TVs.
        </p>
      </div>

    </div>

  </div>
</section>

<!-- SECTION THIRD -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>
        <!-- Badge -->
          <div class="inline-block px-5 py-1 rounded-full bg-[#F3FFF5] text-[#36A04D] text-[12px] font-light mb-6">
             Native & Immersive
          </div> 

          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
           High-Engagement Mobile App Environments
          </h3>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
             Mobile apps are where attention is immediate and intent forms fast. Within premium app environments, campaigns appear as native in-feed experiences, immersive full-screen moments, or rewarded interactions that users choose to engage with. Every impression is optimized in real time based on how users respond, so mobile performance improves continuously.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Includes:
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Banner and interstitial placements
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Native in-feed ads
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Rewarded ad experiences
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Full-screen and high-impact formats
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- SECTION FOURTH -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>   
        <!-- Badge -->
          <div class="inline-block px-5 py-1 rounded-full bg-[#F3FFF5] text-[#36A04D] text-[12px] font-light mb-6">
             Contextual & Scale
          </div> 

          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
           Premium Website & Desktop Experiences
          </h3>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
             Web and desktop environments support longer consideration and decision-making. Here, ads blend naturally into content through responsive banners, contextual placements, and native integrations that maintain visibility without disrupting the browsing experience.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Includes:
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Standard and high-impact display placements
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Native content integrations
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Contextual and audience-based targeting
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Scalable reach across desktop and mobile webs
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- SECTION FIFTH -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>       
         <!-- Badge -->
          <div class="inline-block px-5 py-1 rounded-full bg-[#F3FFF5] text-[#36A04D] text-[12px] font-light mb-6">
             Rich Media
          </div> 
            
          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
           Display Advertising That Works in Motion
          </h3>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
            Display isn’t static — and it shouldn’t feel invisible. Vola.ad’s display inventory lives across apps and websites as responsive, dynamic, and rich placements that adapt to screen size, context, and user behavior. As users move between screens, display placements reinforce messaging, support retargeting, and maintain presence throughout the funnel.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Includes:
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Standard IAB banners
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Rich media and expandable units
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Interactive and animated creatives
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Responsive formats across devices
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- SECTION SIXTH -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>        
        <!-- Badge -->
          <div class="inline-block px-5 py-1 rounded-full bg-[#F3FFF5] text-[#36A04D] text-[12px] font-light mb-6">
             Short & Long Form
          </div> 

          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
           Video Environments Designed for Focus
          </h3>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
             Placements appear in-stream, between content moments, or as short-form experiences that match modern consumption. As campaigns run, Vola.ad continuously adjusts delivery based on completion, engagement, and downstream performance — ensuring video works beyond just views.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Includes:
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                In-stream and out-stream video
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Short-form and rewarded video
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Mobile, web, and OTT placements
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Performance and brand-focused executions
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- SECTION EIGHTH -->
<section class="bg-[#FFFFFF] py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Main Card -->
    <div class="max-w-[1100px] mx-auto bg-[#FCFCFE] border border-gray-200 rounded-2xl p-6 md:p-10 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left Content -->
        <div>         
        <!-- Badge -->
          <div class="inline-block px-5 py-1 rounded-full bg-[#F3FFF5] text-[#36A04D] text-[12px] font-light mb-6">
             Premium Living Room
          </div> 

          <h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-4 font-[inter]">
           The Living Room Advantage: CTV & OTT
          </h3>

          <p class="text-gray-600 mb-4 leading-relaxed font-[inter]">
             Connected TV offers intentional, immersive, and uninterrupted attention. Vola.ad places full-screen video ads within premium CTV and OTT environments, appearing before, during, or alongside streaming content in moments designed for maximum impact. CTV campaigns are not isolated — they’re optimized alongside mobile, web, and video to create unified cross-screen performance.
          </p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Link -->
          <a href="/auth/register" class="text-purple-600 font-medium hover:underline font-poppins">
            Get Started
          </a>
        </div>

        <!-- Right Content -->
        <div>
          <h4 class="text-gray-800 font-medium mb-4 font-[inter]">
            Includes:
          </h4>

          <div class="space-y-4">

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                BFull-screen video placements
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Pre-roll, mid-roll, and pause-screen ads
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Addressable audience targeting
              </p>
            </div>

            <!-- Item -->
            <div class="flex items-center gap-3 bg-[#ffffff] rounded-xl px-4 py-3 border-[#EEEEEF] border">
              <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
                ✓
              </div>
              <p class="text-gray-700 font-[inter]">
                Unified reporting with digital channels
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>


<section class="py-12 px-4">
    <div class="max-w-[1100px] mx-auto bg-[#fffff] border border-gray-200 rounded-2xl p-6 sm:p-10 text-center">

      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-small text-gray-900">
        One Inventory Ecosystem, Working as One
      </h2>

      <!-- Description -->
      <p class="mt-4 text-gray-600 text-lg sm:text-lg max-w-7xl mx-auto leading-relaxed">
        What makes Vola.ad powerful isn’t just access — it’s coordination. Mobile, web, video,
        and CTV inventory all feed into a single system where frequency, budget, and performance
        are managed holistically.
      </p>

      <!-- Tags -->
      <div class="mt-6 flex flex-wrap justify-center gap-3">

        <!-- Tag 1 -->
        <div class="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-gray-700 text-sm">
          <span class="w-4 h-4 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">✓</span>
          Consistency
        </div>

        <!-- Tag 2 -->
        <div class="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-gray-700 text-sm">
          <span class="w-4 h-4 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">✓</span>
          Intentionality
        </div>

        <!-- Tag 3 -->
        <div class="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-gray-700 text-sm">
          <span class="w-4 h-4 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">✓</span>
          Connectivity
        </div>

      </div>
    </div>
</section>


<!-- SECTION SECOND LAST -->
<section class="w-full bg-[#fffff] py-12 px-4 sm:px-6 lg:px-10">
  <div class="max-w-[1100px] bg-[#fcfcfe] mx-auto border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-14">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      
      <!-- LEFT CONTENT -->
      <div>
        <h2 class="text-3xl sm:text-4xl lg:text-3xl font-medium text-black mb-6">
          Built for Visibility, Control, and Trust
        </h2>

        <p class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
          Every placement runs within a transparent, brand-safe framework
          designed for confidence at scale. Teams have full visibility into where
          ads appear and how spend evolves.
        </p>

        <!-- FEATURES LIST -->
        <div class="space-y-8">
          
          <div>
            <h3 class="text-lg font-semibold text-black">Brand Safe Framework</h3>
            <p class="text-gray-600 text-lg">Confidence at scale.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-black">Full Visibility</h3>
            <p class="text-gray-600 text-lg">Know where your ads run.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-black">Firm Control</h3>
            <p class="text-gray-600 text-lg">Fine-tune whenever needed.</p>
          </div>

        </div>
      </div>

      <!-- RIGHT CARDS -->
      <div class="flex flex-col gap-6">
        
        <!-- Card 1 -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p class="text-gray-500 text-lg mb-3">Visibility</p>
          <h3 class="text-3xl sm:text-4xl italic font-medium text-black">
            Real-time
          </h3>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p class="text-gray-500 text-lg mb-3">Brand Safety</p>
          <h3 class="text-3xl sm:text-4xl italic font-medium text-black">
            Guaranteed
          </h3>
        </div>

        <!-- Card 3 -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p class="text-gray-500 text-lg mb-3">Transparency</p>
          <h3 class="text-3xl sm:text-4xl italic font-medium text-black">
            100%
          </h3>
        </div>

      </div>

    </div>

  </div>
</section>


<section class="w-full px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-[1100px] mx-auto">
    
    <div class="relative overflow-hidden rounded-2xl bg-[#EDEEF3] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col items-center justify-center text-center gap-6">
      
      <!-- Custom Gradient Glow -->
      <div class="pointer-events-none absolute inset-0">
        
        <!-- Main angled glow -->
        <div class="absolute top-[80%] w-[1800px] h-[300px] 
                    bg-[radial-gradient(ellipse_at_center,_#EDEEF300_0%,_#995AF1_0%,_#425EF7_10%)]
                    rotate-[-5deg] blur-xl">
        </div>

      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-full">

        <h2 class="text-large sm:text-2xl lg:text-3xl font-semibold text-black leading-snug">
          Activate Inventory That Moves With Your Audience
        </h2>

        <p class="mt-2 text-sm sm:text-base lg:text-lg font-light text-black">
          From fast-paced mobile moments to high-impact TV experiences, Vola.ad gives you inventory that adapts and scales.
        </p>

      </div>

      <!-- Button -->
      <a href="/auth/register">
        <div class="relative z-10">
        <button class="px-5 py-2.5 rounded-full border border-black text-sm sm:text-base font-small bg-white transition duration-300 hover:border-[#9E84F6]">
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
