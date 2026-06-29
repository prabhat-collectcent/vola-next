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

<title>solution</title>

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

<a href="/solution" class="font-[inter] hover:text-black transition font-semibold text-black">Solutions</a>
<a href="/inventory" class="font-[inter] hover:text-black transition">Inventory</a>
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
d="M4 6h16M4 12h16M4 18h16">
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
      Solutions
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight font-[Arial]">
      Solutions That Drive Real Growth <br class="hidden md:block">
      Across Every Screen
    </h2>

    <!-- Subtitle -->
    <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-inter font-semibold">
      Your audience doesn't live on one screen — and your growth strategy shouldn't either.
    </p>

    <!-- Description -->
    <p class="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
      Vola.ad brings acquisition, monetization, programmatic media buying, analytics, and AI optimization 
      into one intelligent system designed to deliver measurable performance across apps, websites, 
      video, and connected TV.
    </p>

    <!-- Highlight Line -->
    <p class="mt-6 text-gray-600 text-base font-medium">
      This isn't a stack of tools. It's a unified growth engine.
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
<section class="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
  <div class="max-w-[1100px] mx-auto bg-[#ffffff] border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

    <!-- Label -->
    <span class="inline-block mb-6 px-4 py-1 text-[10px] font-medium text-purple-600 bg-purple-100 rounded-full font-[inter]">
      The Challenge
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-6 font-[inter]">
      The Problem We Solve
    </h2>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

      <!-- Card 1 -->
      <div class="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <h3 class="text-lg font-semibold text-[#995AF1] mb-2">
          Fragmented channels
        </h3>
        <p class="text-gray-600 font-[inter] font-light">
          Disconnected platforms that don't talk
        </p>
      </div>

      <!-- Card 2 -->
      <div class="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <h3 class="text-lg font-semibold text-[#995AF1] mb-2">
          Disconnected data
        </h3>
        <p class="text-gray-600 font-[inter] font-light">
          Insights scattered everywhere
        </p>
      </div>

      <!-- Card 3 -->
      <div class="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <h3 class="text-lg font-semibold text-[#995AF1] mb-2">
          Slower decisions
        </h3>
        <p class="text-gray-600 font-[inter] font-light">
          Manual optimization kills speed
        </p>
      </div>

    </div>

    <!-- Bottom Paragraph -->
    <p class="text-gray-800 text-base sm:text-base leading-relaxed w-full font-[inter] font-light">
      Most advertising platforms optimize in silos — performance here, branding there, reporting somewhere else. 
      Vola.ad removes that friction by connecting every signal, placement, and decision into a single platform 
      that learns and improves continuously.
    </p>

  </div>
</section>

<!-- SECTION THREE -->
<section class="py-16 px-6 bg-[#FFFFFF]">
  
  <!-- Heading -->
  <div class="max-w-4xl mx-auto text-center mb-12">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-normal text-black font-[inter]">
      Powerful Solutions. One Platform.
    </h2>

    <p class="mt-4 text-gray-600 text-base sm:text-lg font-light font-[inter]">
      Every tool you need to acquire, monetize, and scale across all screens
    </p>
  </div>

  <!-- Cards Grid -->
  <div class="max-w-[68rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    <!-- CARD 1 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        Acquire & Re-Engage High-Value Audiences
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        Reach the right users — then bring them back when it matters.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        Vola.ad helps brands and apps discover high-intent audiences and re-engage them across apps, web, video, and CTV using real-time signals and advanced segmentation. Instead of chasing volume, campaigns focus on value.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex items-start gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Cross-screen user acquisition and retargeting
        </li>
        <li class="flex items-start gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Audience segmentation by location, device, OS, time, and behavior
        </li>
        <li class="flex items-start gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Smarter re-engagement for higher conversion efficiency
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>


    <!-- CARD 2 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        Monetization That Scales With You
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        Turn attention into sustainable revenue.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        Vola.ad helps publishers, platforms, and media owners unlock revenue across apps, websites, and CTV while maintaining control, transparency, and user experience.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Display, native, and high-impact formats
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          In-stream and out-stream video
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Connected TV and OTT placements
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full font-[inter]"></span>
          Flexible pricing and placement controls
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>


    <!-- CARD 3 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        Intelligent Programmatic Media Buying (DSP)
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        Programmatic that adapts at the speed of attention.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        Vola.ad's DSP automates media buying across display, video, mobile, web, and connected TV with real-time bidding and intelligent optimization built in.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Real-time bidding across premium inventory
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Cross-channel execution from one interface
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Automated budget and bid optimization
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Clear, transparent performance reporting
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>


    <!-- CARD 4 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        The Intelligence Behind Every Decision
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        This is where everything connects.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        At the core of Vola.ad is a unified AI intelligence layer that continuously learns from every impression, view, click, and conversion.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Every campaign feeds the learning loop
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Every signal strengthens targeting and bidding
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Every optimization compounds future results
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>

    <!-- CARD 5 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        Connected TV Advertising
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        Big screens. Real impact.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        Connected TV is where attention lasts longer — and recall runs deeper. Vola.ad enables brands to activate premium CTV and OTT inventory as part of a unified cross-screen strategy, not a disconnected add-on. CTV campaigns work seamlessly alongside mobile, web, and video — with the same intelligence, targeting, and reporting.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Full-screen video placements
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Pre-roll, mid-roll, and pause-screen formats
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Addressable targeting and retargeting
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Measurable reach and performance
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>

    <!-- CARD 6 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">
      <h3 class="text-xl font-semibold mb-3 font-[inter]">
        Cross-Screen Advertising That Works Together
      </h3>

      <p class="text-gray-700 mb-4 font-[inter] font-medium">
        Consistency across every touchpoint.
      </p>

      <p class="text-gray-600 text-sm mb-6 font-[inter]">
        Vola.ad enables brands to deliver coordinated messaging across apps, websites, video, desktop, and connected TV — ensuring audiences experience your brand as one continuous journey. Cross-screen execution improves recall, controls frequency, and drives stronger performance across the funnel.
      </p>

      <p class="font-medium mb-4 font-[inter]">Key Features</p>

      <ul class="space-y-3 text-sm text-gray-700 font-[inter]">
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Unified reach across devices and formats
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Better frequency and sequencing control
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Stronger engagement and conversion lift
        </li>
        <li class="flex gap-2">
          <span class="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
          Centralized insights across all screens
        </li>
      </ul>

      <div class="border-t mt-6 pt-4">
        <a href="/auth/register" class="text-purple-600 text-sm font-medium font-poppins">Get Started</a>
      </div>
    </div>

  </div>

</section>

<!-- SECTION FOUR -->
<section class="px-6 py-20 bg-[#FFFFFF]">

  <div class="max-w-[1100px] mx-auto bg-[#F5F5FF] rounded-3xl px-8 py-12 text-center">

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-4xl font-normal text-black font-[inter]">
      Built for Control, Transparency, and Trust
    </h2>

    <!-- Subheading -->
    <p class="mt-5 text-lg text-gray-700 font-[inter]">
      Automation without visibility is a black box. Vola.ad is built differently.
    </p>

    <!-- Description -->
    <p class="mt-3 text-gray-600 max-w-3xl mx-auto font-[inter]">
      You see exactly where ads run, how budgets move, and how performance evolves — in real time.
    </p>

    <!-- Feature Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

      <!-- Card 1 -->
      <div class="bg-[#FFFFFF] rounded-2xl p-6 text-left">
        <div class="w-5 h-5 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs mb-4">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Full transparency across inventory and spend
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-[#FFFFFF] rounded-2xl p-6 text-left">
        <div class="w-5 h-5 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs mb-4">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Real-time reporting across every format
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-[#FFFFFF] rounded-2xl p-6 text-left">
        <div class="w-5 h-5 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs mb-4">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Manual controls when you want them
        </p>
      </div>

      <!-- Card 4 -->
      <div class="bg-[#FFFFFF] rounded-2xl p-6 text-left">
        <div class="w-5 h-5 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs mb-4">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Exportable data and clear accountability
        </p>
      </div>

    </div>

    <!-- Bottom Badge -->
    <div class="mt-10 inline-block bg-[#e3e3eb] px-6 py-2 rounded-full text-gray-700 text-sm font-[inter]">
      This isn't a stack of tools. It's a unified growth engine.
    </div>

  </div>

</section>

<!-- SECTION FIVE  -->
<section class="bg-[#FFFFFF] py-8 px-4">
  <div class="max-w-[1100px] mx-auto bg-[#FFFFFF] border border-gray-200 rounded-2xl px-6 py-12 md:px-12 md:py-8 text-center">

    <!-- Top Badge -->
    <div class="inline-block bg-green-100 text-green-700 text-sm font-light px-4 py-1 rounded-full mb-6 font-[inter]">
      Why Vola.ad
    </div>

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-normal text-gray-900 mb-4 font-[inter]">
      Why Teams Choose Vola.ad
    </h2>

    <!-- Subheading -->
    <p class="text-gray-500 text-base md:text-lg mb-10 font-[inter]">
      Because growth needs clarity, not complexity.
    </p>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          One platform instead of fragmented tools
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          AI that improves performance continuously
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Cross-screen execution without operational friction
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Measurable outcomes, not vanity metrics
        </p>
      </div>

    </div>

    <!-- Bottom Highlight -->
    <div class="bg-[#F7F2F8] text-gray-700 px-6 py-2 rounded-xl text-sm md:text-base font-[inter] md:mx-16">
      Vola.ad is built for brands, apps, and agencies that want to scale confidently — across every screen.
    </div>

  </div>
</section>

<!-- SECTION SIX -->
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
          Stop Managing Channels. Start Scaling Outcomes.
        </h2>
        <p class="mt-2 text-xl sm:text-2xl lg:text-base font-normal text-black font-[inter] max-w-2xl mx-auto">
          Vola.ad connects intelligence, automation, and reach into one system that performs — wherever your audience is.
        </p>
      </div>

      <!-- Button -->
      <a href="/auth/register">
        <div class="relative z-10">
        <button class="px-5 py-2.5 rounded-full border border-black text-sm sm:text-base font-medium bg-white backdrop-blur transition duration-300 hover:border-[#9E84F6]">
          Connect with the campaign manager
        </button>
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
