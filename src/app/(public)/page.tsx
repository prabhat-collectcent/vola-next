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

<title>Vola Ads</title>

<!-- Inter Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon.png">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

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

<a href="solution.html" class="hover:text-black transition font-[inter]">Solutions</a>
<a href="inventory.html" class="hover:text-black transition font-[inter]">Inventory</a>
<a href="who-we-serve.html" class="hover:text-black transition font-[inter]">Who We Serve</a>
<a href="about.html" class="hover:text-black transition font-[inter]">About</a>
<a href="contact-us.html" class="hover:text-black transition font-[inter]">Contact</a>

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

<a href="solution.html">Solutions</a>
<a href="inventory.html">Inventory</a>
<a href="who-we-serve.html">Who We Serve</a>
<a href="about.html">About</a>
<a href="contact-us.html">Contact</a>

<div class="flex gap-3 pt-4">

<a href="sign-in.html" class="flex-1 text-center px-4 py-2 border border-black rounded-full text-sm">
Sign in
</a>

<a href="sign-up.html" class="flex-1 text-center px-4 py-2 rounded-full text-white bg-[#995AF1] text-sm">
Sign up
</a>

</div>

</div>

</div>

</header>

<!-- HERO SECTION -->
<section class="w-full h-[600px] md:min-h-screen min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-[45%] to-[#F8F8FC]">

<div class="max-w-5xl text-center">

<!-- Heading -->
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight font-[Arial] md:px-[20%]">
Grow Your Customer Base
</h1>

<!-- Subtext -->
<p class="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
Acquire real customers, increase brand visibility, and drive measurable growth across apps, websites, video, and connected TV.
</p>

<!-- CTA Button -->
  <!-- Animated Border -->
  <a href="sign-up.html">
  <div class="flex items-center justify-center mt-6">
  <div class="relative p-[2px] rounded-full overflow-hidden">

    <!-- Rotating gradient layer -->
    <div class="absolute inset-0 rounded-full
                bg-[conic-gradient(from_var(--angle),transparent,transparent,#E0BDF8,transparent,transparent)]
                animate-[rotateBorder_7s_linear_infinite]">
    </div>

    <!-- Inner content -->
    <div class="relative flex items-center justify-between flex-col gap-2 bg-white px-12 md:px-4 py-2 rounded-full md:flex-row">

      <span class="text-gray-800 text-sm font-medium font-poppins">
        Start a Campaign
      </span>

      <!-- Button -->
      <img src="assets/images/cta-icon.png" alt="cta" class="ml-2">

    </div>
  </div>
  </div>
  </a>

</div>

</section>

<!-- SECOND SECTION -->
<section class="w-full py-20 md:py-36 font-inter">

<div class="max-w-5xl mx-auto px-6">

<div class="grid lg:grid-cols-2 items-center gap-16">

<!-- LEFT CONTENT -->
<div class="text-center lg:text-left">

<p class="text-black text-2xl md:text-2xl lg:text-2xl tracking-tight font-poppins mb-4">
Real visibility across apps, websites, video and connected TV
</p>

<h2 class="text-black text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-poppins">
2.5 B+
</h2>

<p class="text-[#404040] mt-4 text-lg font-poppins">
Monthly Impressions Delivered
</p>

</div>


<!-- RIGHT CARDS -->
<div class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-6">

<div class="w-28 sm:w-32 md:w-36 lg:w-40 flex-shrink-0 flex flex-col items-center">
<img src="assets/images/img-01.png" class="w-[150px]">
<p class="font-poppins text-lg mt-2 font-medium">Display</p>
</div>

<div class="w-28 sm:w-32 md:w-36 lg:w-40 flex-shrink-0 flex flex-col items-center">
<img src="assets/images/img-02.png" class="w-[150px]">
<p class="font-poppins text-lg mt-2 font-medium">Video</p>
</div>

<div class="w-28 sm:w-32 md:w-36 lg:w-40 flex-shrink-0 flex flex-col items-center">
<img src="assets/images/img-03.png" class="w-[150px]">
<p class="font-poppins text-lg mt-2 font-medium">CTV</p>
</div>

</div>

</div>

</div>

</section>

<!-- SECTION THREE -->
<section class="bg-[#FCFCFC] py-20 font-[Poppins]">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Heading -->
    <div class="text-center max-w-4xl mx-auto">
      <h2 class="text-2xl md:text-4xl font-normal text-black">
        One Unified Platform for Growth and Revenue
      </h2>

      <p class="mt-4 text-gray-600 text-sm md:text-base leading-relaxed !font-[inter] md:px-20 font-light">
        Vola.ad is your AI-powered playground for user acquisition, and programmatic media buying,
        built to perform wherever your audience is, on whatever screen they're on.
      </p>
    </div>

    <!-- Cards -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2">

      <!-- Card 1 -->
      <div class="p-4 md:p-10 border-b md:border-r border-gray-200">
        <img src="assets/images/sec-3-1.png" class="w-12 mb-6" alt="icon">

        <h3 class="text-lg font-semibold text-gray-900">
          Programmatic Media Buying (DSP)
        </h3>

        <p class="mt-3 text-gray-600 text-xs leading-relaxed">
          Automate media buying at scale with real-time bidding and intelligent targeting
          across all inventory types and digital channels.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="p-4 md:p-10 border-b border-gray-200">
        <img src="assets/images/sec-3-2.png" class="w-12 mb-6" alt="icon">

        <h3 class="text-lg font-semibold text-gray-900">
          User Acquisition & Retargeting
        </h3>

        <p class="mt-3 text-gray-600 text-xs leading-relaxed">
          Find your high-value users, nudge them (the right way), and keep them coming back
          across apps, web, video, and yes—even CTV. Advanced segmentation lets you target
          by country, region, pin code, device, OS, and even time of day.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="p-4 md:p-10 md:border-r border-gray-200">
        <img src="assets/images/sec-3-3.png" class="w-12 mb-6" alt="icon">

        <h3 class="text-lg font-semibold text-gray-900">
          Monetization
        </h3>

        <p class="mt-3 text-gray-600 text-xs leading-relaxed">
          Unlock sustainable revenue across owned inventory with advanced ad formats,
          including display, video, native, and CTV placements. Create campaigns that
          are easy, cost-effective, and scalable across all channels.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="p-4 md:p-10">
        <img src="assets/images/sec-3-4.png" class="w-12 mb-6" alt="icon">

        <h3 class="text-lg font-semibold text-gray-900">
          Analytics & AI Optimization
        </h3>

        <p class="mt-3 text-gray-600 text-xs leading-relaxed">
          Full-funnel visibility, real-time dashboards, and actionable insights.
          Adjust bids, creatives, and placements on the fly while AI keeps improving outcomes.
        </p>
      </div>

    </div>

    <!-- Button -->
    <div class="text-center mt-12">
      <a href="#"
         class="inline-block border border-black text-black text-sm px-6 py-3 rounded-full
         hover:border-[#9E84F6] transition duration-300">
         Explore All Solutions
      </a>
    </div>

  </div>
</section>

<!-- SECTION FOUR -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-6xl mx-auto">
    
    <div class="relative overflow-hidden rounded-2xl bg-[#f3f3f5] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      
      <!-- Custom Gradient Glow -->
      <div class="pointer-events-none absolute inset-0">
        
        <!-- Main angled glow -->
        <div class="absolute top-[55%] w-[1800px] h-[300px] 
                    bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.6)_0%,_rgba(124,58,237,0.5)_40%,_rgba(255,255,255,0)_100%)]
                    rotate-[-5deg] blur-xl">
        </div>

      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-xl">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-black leading-snug">
          Ready to scale across every screen?
        </h2>
        <p class="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-black">
          Let’s get you started!
        </p>
      </div>

      <!-- Button -->
      <div class="relative z-10">
        <button class="px-5 py-2.5 rounded-full border border-black text-sm sm:text-base font-medium bg-white backdrop-blur transition duration-300 hover:border-[#9E84F6]">
          Connect With Us
        </button>
      </div>

    </div>

  </div>
</section>

<!-- SECTION FIVE  -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
  <div class="max-w-5xl mx-auto">

    <!-- Heading -->
    <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
      How <span class="italic font-medium">Brands</span> Grow with Vola.ad
    </h2>

    <!-- Tabs -->
<div class="mt-8 flex flex-col md:flex-row gap-2 border border-gray-300 rounded-2xl md:rounded-full p-2 w-full md:w-fit mx-auto bg-white">
  
  <button class="tab-btn w-full md:w-auto px-4 py-2 text-sm md:text-sm whitespace-nowrap rounded-full transition-all duration-300 bg-gradient-to-r from-[#A777EC] to-[#4F67F2] text-white">
    Retail & E-commerce
  </button>

  <button class="tab-btn w-full md:w-auto px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all duration-300 text-gray-600">
    BFSI & Fintech
  </button>

  <button class="tab-btn w-full md:w-auto px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all duration-300 text-gray-600">
    Travel, Hospitality & Mobility
  </button>

  <button class="tab-btn w-full md:w-auto px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all duration-300 text-gray-600">
    Telecom & Technology Services
  </button>

  <button class="tab-btn w-full md:w-auto px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all duration-300 text-gray-600">
    Entertainment & Streaming Media
  </button>

</div>

    <!-- Content -->
    <div class="mt-10 relative">

      <!-- Tab Panel -->
      <div class="tab-content active">
        <div class="bg-[#FBFCFD] rounded-2xl p-6 sm:p-6 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500">

          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img src="assets/images/sec-5-2.png" alt="" class="w-full h-auto rounded-lg object-cover">
          </div>

          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h3 class="text-xl sm:text-2xl font-normal text-gray-800 font-poppins">
              Retail & E-commerce
            </h3>

            <p class="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base font-poppins font-light">
              A leading multi-category marketplace activated cross-screen display, video,
              and CTV campaigns timed with key seasonal promos and shopping events —
              blending performance-driven retargeting with brand storytelling across channels.
            </p>

            <p class="mt-4 italic text-gray-700">Result:</p>

            <p class="text-gray-500 text-sm sm:text-base font-poppins font-light">
              Boosted cross-channel ROAS and doubled assisted online conversions during peak shopping windows.
            </p>
          </div>

        </div>
      </div>

      <div class="tab-content hidden">
        <div class="bg-[#FBFCFD] rounded-2xl p-6 sm:p-6 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500">

          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img src="assets/images/sec-5-3.png" alt="" class="w-full h-auto rounded-lg object-cover">
          </div>

          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h3 class="text-xl sm:text-2xl font-normal text-gray-800 font-poppins">
              BFSI & Fintech
            </h3>

            <p class="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base font-poppins font-light">
              A digital bank ran synchronized acquisition campaigns across display, web, and video inventory to drive verified leads and app installs, optimizing real-time audience segments based on financial product usage intent.
            </p>

            <p class="mt-4 italic text-gray-700">Result:</p>

            <p class="text-gray-500 text-sm sm:text-base font-poppins font-light">
              Significantly lowered cost per qualified lead with measurable lift in product activations.
            </p>
          </div>

        </div>
      </div>

      <div class="tab-content hidden">
       <div class="bg-[#FBFCFD] rounded-2xl p-6 sm:p-6 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500">

          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img src="assets/images/sec-5-4.png" alt="" class="w-full h-auto rounded-lg object-cover">
          </div>

          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h3 class="text-xl sm:text-2xl font-normal text-gray-800 font-poppins">
              Travel, Hospitality & Mobility
            </h3>

            <p class="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base font-poppins font-light">
              A travel booking platform combined programmatic video and display ads with addressable CTV placements to retarget users who had previously visited its site and app but didn’t convert.
            </p>

            <p class="mt-4 italic text-gray-700">Result:</p>

            <p class="text-gray-500 text-sm sm:text-base font-poppins font-light">
              Increased booking completions by improving retargeting efficiency across screens.
            </p>
          </div>

        </div>
      </div>

      <div class="tab-content hidden">
       <div class="bg-[#FBFCFD] rounded-2xl p-6 sm:p-6 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500">

          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img src="assets/images/sec-5-5.png" alt="" class="w-full h-auto rounded-lg object-cover">
          </div>

          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h3 class="text-xl sm:text-2xl font-normal text-gray-800 font-poppins">
              Telecom & Technology Services
            </h3>

            <p class="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base font-poppins font-light">
              A major telecom brand launched a unified campaign across display, mobile web, and video to support a 5G rollout, using AI optimization to allocate budget dynamically based on engagement and intent signals.
            </p>

            <p class="mt-4 italic text-gray-700">Result:</p>

            <p class="text-gray-500 text-sm sm:text-base font-poppins font-light">
              Strong lift in brand awareness and new service signups with improved cost efficiency.
            </p>
          </div>

        </div>
      </div>

      <div class="tab-content hidden">
       <div class="bg-[#FBFCFD] rounded-2xl p-6 sm:p-6 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500">

          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img src="assets/images/sec-5-6.png" alt="" class="w-full h-auto rounded-lg object-cover">
          </div>

          <!-- Text -->
          <div class="w-full lg:w-1/2">
            <h3 class="text-xl sm:text-2xl font-normal text-gray-800 font-poppins">
              Entertainment & Streaming Media
            </h3>

            <p class="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base font-poppins font-light">
              A regional streaming service leaned into CTV and video inventory to build buzz for its exclusive programming lineup, aligning creative drops with trailer releases and key viewing moments.
            </p>

            <p class="mt-4 italic text-gray-700">Result:</p>

            <p class="text-gray-500 text-sm sm:text-base font-poppins font-light">
              Expanded reach into targeted households and increased subscription signups post-launch.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

<!-- SECTION SIX -->
<section class="bg-white py-10 md:py-12 px-4 relative overflow-hidden">
  
 <!-- Decorative Images -->
  <div class="absolute top-[6%] left-[39%] hidden md:block">
    <img src="assets/images/sec-6-1.png" alt="decorative shape" class="w-8 opacity-80">
  </div>

  <div class="absolute top-[6%] right-[39%] hidden md:block">
    <img src="assets/images/sec-6-2.png" alt="decorative shape" class="w-8 opacity-80">
  </div>
  
  <div class="max-w-6xl mx-auto text-center">
    
    <!-- Heading -->
    <h2 class="text-black text-2xl md:text-3xl font-normal mb-15 leading-tight font-poppins">
      Measurement
    </h2>

    <!-- Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3 justify-items-center mx-auto md:px-[10%]">
      
      <!-- Logo Item -->
      <div class="flex items-center justify-center h-[111px]">
        <img src="assets/images/sec-6-3.png" class="h-full object-contain" />
      </div>

      <div class="flex items-center justify-center h-[111px]">
        <img src="assets/images/sec-6-4.png" class="h-full object-contain" />
      </div>

      <div class="flex items-center justify-center h-[111px]">
        <img src="assets/images/sec-6-6.png" class="h-full object-contain" />
      </div>

      <div class="flex items-center justify-center h-[111px]">
        <img src="assets/images/sec-6-7.png" class="h-full object-contain" />
      </div>

      <!-- Centered second row -->
      <div class="flex items-center justify-center h-[111px] md:col-start-2">
        <img src="assets/images/sec-6-8.png" class="h-full object-contain" />
      </div>

      <div class="flex items-center justify-center h-[111px] md:col-start-3">
        <img src="assets/images/sec-6-9.png" class="h-full object-contain" />
      </div>

    </div>
  </div>
</section>

<!-- SECTION SEVEN -->
<section class="bg-[#FBFBFD] py-12 px-4 md:pb-[14%]">
  <div class="max-w-5xl mx-auto">

    <!-- Heading -->
    <div class="max-w-2xl mb-20">
      <img class="hidden md:block relative left-[44%] top-[38px] z-10" src="assets/images/heart.png">
      <h2 class="text-2xl md:text-4xl font-normal leading-tight">
        Built for <span class="italic">Simplicity.</span><br />
        Powered by Intelligence.
      </h2>

      <p class="mt-6 text-gray-600 text-lg">
        Five steps that simplify how teams plan, launch, optimize, and scale
        performance and media growth across every screen using intelligent
        automation.
      </p>
    </div>

    <!-- Cards Layout -->
    <div class="relative hidden md:block h-[600px]">

      <!-- Step 1 -->
      <div class="absolute left-[25px] top-[160px] w-[320px] bg-[#FFD6FF] shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
        <span class="absolute top-0 right-0 text-[150px] text-white/30 font-bold leading-[110px]">1</span>
        <h3 class="text-2xl font-normal mb-3 mt-32 mx-6 font-poppins">Define Growth Objectives</h3>
        <p class="text-gray-700 text-lg m-6 font-poppins">
          Choose KPIs that actually matter—awareness, reach, installs, ROAS,
          revenue, retention, or engagement.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="absolute left-[345px] top-[80px] w-[340px] bg-[#E7C6FF] z-10 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
        <span class="absolute top-0 right-0 text-[150px] text-white/30 font-bold leading-[110px]">2</span>
        <h3 class="text-2xl font-normal mb-3 mt-32 mx-6 font-poppins">Activate Across Channels</h3>
        <p class="text-gray-700 text-lg m-6 font-poppins">
          Launch campaigns seamlessly across apps, websites, display, video,
          and CTV inventory.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="absolute right-0 top-0 w-[340px] bg-[#C8B6FF] z-20 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
        <span class="absolute top-0 right-0 text-[150px] text-white/30 font-bold leading-[110px]">3</span>
        <h3 class="text-2xl font-normal mb-3 mt-32 mx-6 font-poppins">Create & Adapt Creatives</h3>
        <p class="text-gray-700 text-lg m-6 font-poppins">
          Build, test, and optimize creatives dynamically to match audience
          behavior across formats and screens.
        </p>
      </div>

      <!-- Step 4 -->
      <div class="absolute left-[345px] top-[404px] w-[340px] bg-[#BBD0FF] z-10 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
        <span class="absolute top-0 right-0 text-[150px] text-white/30 font-bold leading-[110px]">4</span>
        <h3 class="text-2xl font-normal mb-3 mt-32 mx-6 font-poppins">Optimize Automatically</h3>
        <p class="text-gray-700 text-lg m-6 font-poppins">
          AI analyzes performance in real-time and continuously tweaks bids,
          targeting, and placements.
        </p>
      </div>

      <!-- Step 5 -->
      <div class="absolute right-0 top-[352px] w-[340px] bg-[#B8C0FF] z-10 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
        <span class="absolute top-0 right-0 text-[150px] text-white/30 font-bold leading-[110px]">5</span>
        <h3 class="text-2xl font-normal mb-3 mt-32 mx-6 font-poppins">Scale with Confidence</h3>
        <p class="text-gray-700 text-lg m-6 font-poppins">
          Transparent reporting and actionable insights help you grow with
          clarity, control, and accountability.
        </p>
      </div>

    </div>

    <!-- Mobile Layout (Stacked Clean) -->
    <div class="md:hidden">
      <!-- Repeat cards in order -->
      
      <div class="bg-[#FFD6FF] p-6 relative shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
        <span class="absolute top-0 right-0 text-[130px] leading-none text-white/30 font-bold">1</span>
        <h3 class="font-normal mb-2 mt-16 font-poppins text-2xl">Define Growth Objectives</h3>
        <p class="text-sm text-gray-700 font-poppins">Choose KPIs that actually matter—awareness, reach, installs, ROAS, revenue, retention, or engagement.</p>
      </div>

      <div class="bg-[#E7C6FF] p-6 relative shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
        <span class="absolute top-0 right-0 text-[130px] leading-none text-white/30 font-bold">2</span>
        <h3 class="font-normal mb-2 mt-16 font-poppins text-2xl">Activate Across Channels</h3>
        <p class="text-sm text-gray-700 font-poppins">Launch campaigns seamlessly across apps, websites, display, video, and CTV inventory.</p>
      </div>

      <div class="bg-[#C8B6FF] p-6 relative shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
        <span class="absolute top-0 right-0 text-[130px] leading-none text-white/30 font-bold">3</span>
        <h3 class="font-normal mb-2 mt-16 font-poppins text-2xl">Create & Adapt Creatives</h3>
        <p class="text-sm text-gray-700 font-poppins">Build, test, and optimize creatives dynamically to match audience behavior across formats and screens.</p>
      </div>

      <div class="bg-[#BBD0FF] p-6 relative shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
        <span class="absolute top-0 right-0 text-[130px] leading-none text-white/30 font-bold">4</span>
        <h3 class="font-normal mb-2 mt-16 font-poppins text-2xl">Optimize Automatically</h3>
        <p class="text-sm text-gray-700 font-poppins">AI analyzes performance in real-time and continuously tweaks bids, targeting, and placements.</p>
      </div>

      <div class="bg-[#B8C0FF] p-6 relative shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
        <span class="absolute top-0 right-0 text-[130px] leading-none text-white/30 font-bold">5</span>
        <h3 class="font-normal mb-2 mt-16 font-poppins text-2xl">Scale with Confidence</h3>
        <p class="text-sm text-gray-700 font-poppins">Transparent reporting and actionable insights help you grow with clarity, control, and accountability.</p>
      </div>
    </div>

  </div>
</section>

<!-- SECTION EIGHT -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">

    <!-- Heading -->
    <h1 class="text-2xl sm:text-3xl md:text-4xl md:px-64 font-normal text-gray-900 leading-loose">
      Supporting Growth Across Teams, Agencies, and Industries
    </h1>

    <!-- Subtext -->
    <p class="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-base max-w-2xl md:max-w-3xl mx-auto font-poppins font-light">
      Built for teams and businesses that want to run, manage, and scale digital advertising
      across apps, web, video, and connected TV
    </p>

<!-- Cards Grid -->
<div class="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

<!-- Card -->
<div class="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100
transition-all duration-[600ms]
before:absolute before:inset-0 before:bg-black before:opacity-0
hover:before:opacity-[0.05]
before:transition-opacity before:duration-[600ms] before:ease-in-out">

  <h3 class="text-base sm:text-lg md:text-xl font-normal text-gray-900 font-poppins">
    Agencies & Media Teams
  </h3>

  <p class="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base lg:text-sm font-poppins">
    Managing campaigns for multiple clients with efficiency, scale, and control.
  </p>

</div>

<!-- Card -->
<div class="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100
transition-all duration-[600ms] ease-in-out
before:absolute before:inset-0 before:bg-black before:opacity-0
before:transition-opacity before:duration-[600ms] before:ease-in-out
hover:before:opacity-[0.05]">

  <h3 class="text-base sm:text-lg md:text-xl font-normal text-gray-900 font-poppins">
    App Growth Teams
  </h3>

  <p class="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base lg:text-sm font-poppins md:px-8">
    Focused on driving installs, re-engagement, and long-term app value.
  </p>

</div>

<!-- Card -->
<div class="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100
transition-all duration-[600ms] ease-in-out
before:absolute before:inset-0 before:bg-black before:opacity-0
before:transition-opacity before:duration-[600ms] before:ease-in-out
hover:before:opacity-[0.05]">

  <h3 class="text-base sm:text-lg md:text-xl font-normal text-gray-900 font-poppins">
    Brands & Enterprises
  </h3>

  <p class="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base lg:text-sm font-poppins">
    Looking to reach, engage, and convert audiences across multiple digital environments.
  </p>

</div>

</div>

<!-- Bottom Row -->
<div class="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 md:max-w-[44rem] mx-auto">

<!-- Card -->
<div class="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100
transition-all duration-[600ms] ease-in-out
before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0
before:transition-opacity before:duration-[600ms] before:ease-in-out
hover:before:opacity-[0.05]">

  <h3 class="text-base sm:text-lg md:text-xl font-normal text-gray-900 font-poppins md:px-2">
    D2C & E-commerce Teams
  </h3>

  <p class="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base lg:text-sm font-poppins">
    Optimizing customer acquisition and revenue across devices and formats.
  </p>

</div>

<!-- Card -->
<div class="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100
transition-all duration-[600ms] ease-in-out
before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0
before:transition-opacity before:duration-[600ms] before:ease-in-out
hover:before:opacity-[0.05]">

  <h3 class="text-base sm:text-lg md:text-xl font-normal text-gray-900 font-poppins">
    Subscription & SaaS Teams
  </h3>

  <p class="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base lg:text-sm font-poppins">
    Scaling user acquisition while maximizing lifetime value across channels.
  </p>

</div>

</div>

</section>

<!-- SECTION NINE -->
<section class="w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center bg-[#FCFCFE]">

    <!-- Heading -->
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 leading-snug font-poppins">
      Your Complete Advertising Inventory
      <br class="hidden md:block">
      Across Screens
    </h1>

    <!-- Subtext -->
    <p class="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
      From mobile to desktop to TV, reach audiences wherever they engage. Every format, every screen—covered.
    </p>

    <!-- Cards -->
    <div class="max-w-6xl mx-auto mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

      <!-- Card -->
      <div class="bg-white border border-[#FEF4FF] p-6 text-center
                  transition-all duration-300 hover:-translate-y-1">

        <!-- Icon -->
<div class="mx-auto flex items-center justify-center rounded-xl">

  <img src="assets/images/sec-9-1.png" 
       alt="Mobile Icon"
       class="object-contain">
</div>

        <h3 class="mt-5 text-lg font-normal text-gray-900 font-poppins">
          Mobile App Inventory
        </h3>

        <p class="mt-3 text-gray-500 text-sm font-inter">
          Banner, interstitial, native, and rewarded ad formats across high-engagement mobile apps.
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white border border-[#FEF4FF] p-6 text-center
                  transition-all duration-300 hover:-translate-y-1">

        <div class="mx-auto flex items-center justify-center rounded-xl">
          <img src="assets/images/sec-9-2.png" 
       alt="Mobile Icon"
       class="object-contain">
        </div>

        <h3 class="mt-5 text-lg font-normal text-gray-900 font-poppins">
          Website & Desktop Inventory
        </h3>

        <p class="mt-3 text-gray-500 text-sm font-inter">
          Display banners, native placements, and high-impact formats across premium websites.
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white border border-[#FEF4FF] p-6 text-center
                  transition-all duration-300 hover:-translate-y-1">

        <div class="mx-auto flex items-center justify-center rounded-xl">
          <img src="assets/images/sec-9-3.png" 
       alt="Mobile Icon"
       class="object-contain">
        </div>

        <h3 class="mt-5 text-lg font-normal text-gray-900 font-poppins px-6">
          Display Ad Inventory
        </h3>

        <p class="mt-3 text-gray-500 text-sm font-inter md:px-2">
          Standard IAB banners, rich media, expandable, and interactive display formats.
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white border border-[#FEF4FF] p-6 text-center
                  transition-all duration-300 hover:-translate-y-1">

        <div class="mx-auto flex items-center justify-center rounded-xl">
          <img src="assets/images/sec-9-4.png" 
       alt="Mobile Icon"
       class="object-contain">
        </div>

        <h3 class="mt-5 text-lg font-normal text-gray-900 font-poppins px-6">
          Video Inventory
        </h3>

        <p class="mt-3 text-gray-500 text-sm font-inter">
          In-stream, out-stream, rewarded video, and short-form placements across platforms.
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white border border-[#FEF4FF] p-6 text-center
                  transition-all duration-300 hover:-translate-y-1">

        <div class="mx-auto flex items-center justify-center rounded-xl">
          <img src="assets/images/sec-9-5.png" 
       alt="Mobile Icon"
       class="object-contain">
        </div>

        <h3 class="mt-5 text-lg font-normal text-gray-900 font-poppins px-6">
          CTV & OTT Inventory
        </h3>

        <p class="mt-3 text-gray-500 text-sm font-inter">
          Full-screen video ads, pre-roll, mid-roll, and pause formats on connected TV and OTT Platforms.
        </p>
      </div>

    </div>

</section>

<!-- SECTION TEN -->
<section class="py-16 px-4">
  <div class="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

    <!-- Card 1 -->
    <div class="bg-[#E3E6FF] hover:bg-[#E0E1FC] transition duration-300 ease-in-out rounded-2xl p-6 md:p-14 text-center shadow-sm cursor-pointer">
      
      <h2 class="text-2xl md:text-3xl font-normal text-black leading-snug font-poppins">
        Built on Security,
        Compliance, and
        Transparency
      </h2>

      <div class="w-16 h-[2px] bg-indigo-400 mx-auto my-4"></div>

      <p class="text-gray-600 text-base leading-relaxed max-w-md mx-auto font-poppins">
        Vola.ad is built with a security-first architecture, privacy-conscious data practices,
        and clear operational accountability—so you can scale campaigns confidently
      </p>
    </div>

    <!-- Card 2 -->
    <div class="bg-[#E3E6FF] hover:bg-[#E0E1FC] transition duration-300 ease-in-out rounded-2xl p-6 md:p-14 text-center shadow-sm cursor-pointer">
      
      <h2 class="text-2xl md:text-3xl font-normal text-black leading-snug font-poppins">
        Transparency That Powers Smarter Decisions
      </h2>

      <div class="w-16 h-[2px] bg-indigo-400 mx-auto my-4"></div>

      <p class="text-gray-600 text-base leading-relaxed max-w-md mx-auto font-poppins">
        See exactly where your spend goes and how performance evolves in real time—with
        end-to-end reporting you can trust, across every format and screen.
      </p>
    </div>

  </div>
</section>

<!-- SECTION ELEVEN -->
<section class="w-full mx-auto px-4 md:px-8 py-14">

  <!-- Heading -->
  <h2 class="text-center text-3xl md:text-5xl font-normal text-gray-900 mb-12 font-poppins">
    Real <span class="italic font-normal">Outcomes.</span> Real Partnerships.
  </h2>

<!-- Slider -->
<div class="swiper mySwiper lg:grid lg:grid-cols-3 lg:gap-6 max-w-5xl mx-auto">

    <div class="swiper-wrapper lg:contents">

      <!-- Slide 1 -->
      <div class="swiper-slide lg:w-auto">
        <div class="relative overflow-hidden rounded-2xl p-6 md:p-4
                    bg-gradient-to-br from-[#1a0033] via-[#5b0a8f] to-[#a100c8] text-white">

          <div class="pr-20 md:pr-18">
            <div class="text-purple-300 text-2xl mb-4"><img class="h-4" src="assets/images/favicon.png"></div>
            <p class="text-xs md:text-sm leading-relaxed">
              “Before switching, campaign planning and reporting were spread across multiple tools. Consolidating everything into Vola.ad reduced internal friction and made cross-channel execution far more efficient.”
            </p>
            <p class="mt-4 text-xs text-purple-200">
              — Growth Lead, Global Gaming & Entertainment Brand
            </p>
          </div>

          <img src="assets/images/sec-11-1.png"
               class="absolute right-[-10px] md:right-0 bottom-0 w-32 md:w-[110px]">
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="swiper-slide lg:w-auto">
        <div class="relative overflow-hidden rounded-2xl p-6 md:p-4
                    bg-gradient-to-br from-[#1a0033] via-[#5b0a8f] to-[#a100c8] text-white">

          <div class="pr-20 md:pr-18">
            <div class="text-purple-300 text-2xl mb-4"><img class="h-4" src="assets/images/favicon.png"></div>
            <p class="text-xs md:text-sm leading-relaxed">
              “The biggest impact has been operational. Automation handles optimization in the background, while our team stays focused on strategy and performance review. It’s improved consistency without sacrificing control.”
            </p>
            <p class="mt-4 text-xs text-purple-200">
              — Performance Marketing Manager, US-based eCommerce Brand
            </p>
          </div>

          <img src="assets/images/sec-11-2.png"
               class="absolute right-[-10px] md:right-0 bottom-0 w-32 md:w-[110px]">
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="swiper-slide lg:w-auto">
        <div class="relative overflow-hidden rounded-2xl p-6 md:p-4
                    bg-gradient-to-br from-[#1a0033] via-[#5b0a8f] to-[#a100c8] text-white">

          <div class="pr-20 md:pr-18">
            <div class="text-purple-300 text-2xl mb-4"><img class="h-4" src="assets/images/favicon.png"></div>
            <p class="text-xs md:text-sm leading-relaxed">
              “As we expanded across regions and formats, maintaining visibility became a challenge. Having acquisition, inventory access, and reporting in one system brought clarity and made scaling more manageable.”
            </p>
            <p class="mt-4 text-xs text-purple-200">
              — Product & Revenue Manager, International Digital Platform
            </p>
          </div>

          <img src="assets/images/sec-11-3.png"
               class="absolute right-[-10px] md:right-0 bottom-0 w-32 md:w-[110px]">
        </div>
      </div>

    </div>

    <!-- Pagination -->
    <div class="swiper-pagination mt-6"></div>

</div>

</section>

<!-- SECTION TWELVE -->
<section class="w-full bg-white py-16 px-4 md:py-16">
  <div class="max-w-5xl mx-auto bg-[#F6F0F7] rounded-3xl py-12 px-6 md:px-32">

    <!-- Heading -->
    <h2 class="text-center text-xl md:text-3xl font-light text-gray-900 leading-snug mb-12 font-poppins">
      It takes a minute to get started! <br class="hidden md:block">
      Just fill out the details below.
    </h2>

    <!-- Form -->
    <form class="space-y-10">

      <!-- Name -->
      <div>
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Name</label>
        <input type="text" placeholder="Please fill in your name"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900">
      </div>

      <!-- Country -->
      <div class="relative">
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Country</label>
        <input type="text" placeholder="Please fill in country"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900">
        
        <span class="absolute right-0 bottom-2 text-xl font-semibold">+</span>
      </div>

      <!-- Company -->
      <div>
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Company</label>
        <input type="text" placeholder="Your company name"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900">
      </div>

      <!-- Phone -->
      <div>
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Phone Number</label>
        <input type="text" placeholder="Phone Number"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900">
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Email</label>
        <input type="email" placeholder="Please fill your email address"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900">
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-normal text-black mb-2 font-poppins">Message</label>
        <textarea rows="1" placeholder="Please fill your message"
          class="w-full bg-transparent border-b border-gray-500 pb-2 text-sm placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900 resize-none"></textarea>
      </div>

      <div class="text-center">
        <input type="submit" placeholder="Submit"
          class="w-full md:w-32 text-white text-xl bg-[#A36AF2] border border-gray-500 rounded-3xl p-2 placeholder-[#BDBCBD] focus:outline-none focus:border-gray-900 font-poppins">
      </div>

    </form>
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

        <p class="text-gray-500 text-sm">
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
          <li><a href="about.html" class="hover:text-black transition">About Vola.ad
</a></li>
          <li><a href="contact-us.html" class="hover:text-black transition">Contact Us</a></li>
          <li><a href="solution.html" class="hover:text-black transition">Solutions</a></li>
          <li><a href="inventory.html" class="hover:text-black transition">Inventory</a></li>
          <li><a href="who-we-serve.html" class="hover:text-black transition">Who We Serve</a></li>
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

<script>
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

      // Reset all tabs
      tabs.forEach(t => {
        t.classList.remove(
          "bg-gradient-to-r",
          "from-[#A777EC]",
          "to-[#4F67F2]",
          "text-white"
        );
        t.classList.add("text-gray-600");
      });

      // Hide all content
      contents.forEach(c => c.classList.add("hidden"));

      // Activate clicked tab
      tab.classList.add(
        "bg-gradient-to-r",
        "from-[#A777EC]",
        "to-[#4F67F2]",
        "text-white"
      );
      tab.classList.remove("text-gray-600");

      // Show corresponding content
      contents[index].classList.remove("hidden");
    });
  });
</script>

<script>
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
</script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  let swiper;

  function initSwiper() {
    if (window.innerWidth < 1024) {
      if (!swiper) {
        swiper = new Swiper(".mySwiper", {
          loop: true,
          spaceBetween: 20,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          slidesPerView: 1
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    }
  }

  initSwiper();
  window.addEventListener("resize", initSwiper);
</script>

</body>
</html>` }} />
  );
}
