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

<title>About</title>

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

<a href="/solution" class="font-[inter] hover:text-black transition">Solutions</a>
<a href="/inventory" class="font-[inter] hover:text-black transition">Inventory</a>
<a href="/who-we-serve" class="font-[inter] hover:text-black transition">Who We Serve</a>
<a href="/about" class="font-[inter] hover:text-black transition font-semibold text-black">About</a>
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
<section class="relative overflow-hidden bg-white py-24 px-6 md:pt-32">

  <!-- Purple Gradient Glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] 
              bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.6),rgba(139,92,246,0.15),transparent_70%)]
              blur-[160px] pointer-events-none">
  </div>

  <!-- Content -->
  <div class="relative max-w-4xl mx-auto text-center">

    <!-- Badge -->
    <span class="inline-block bg-[#EFE3FF] text-purple-600 text-xs px-4 py-1 rounded-full mb-6 font-medium font-poppins">
      About Us
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight font-[Arial] md:px-32">
      About Vola.ad
    </h2>

    <!-- Description -->
    <p class="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
      Vola.ad is an AI-powered advertising platform built to help brands, apps, and agencies grow across every screen — with clarity, control, and measurable performance.
    </p> 

    <p class="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
      In a digital ecosystem shaped by fragmented channels and rising complexity, Vola.ad brings everything together into one intelligent system designed to simplify execution and amplify results.
    </p>

    <!-- Button -->
    <div class="mt-8">
      <a href="/auth/register"
         class="inline-block bg-[#995AF1] 
                text-white text-sm px-6 py-2 rounded-full 
                hover:opacity-90 transition duration-500 font-poppins">
        Connect with the campaign manager
      </a>
    </div>

  </div>

</section>

<!-- SECOND SECTION -->
<section class="w-full mx-auto px-4 py-12">
  <div class="bg-white border border-[#e6e6eb] rounded-2xl p-6 md:p-10 max-w-[1100px] mx-auto">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      <!-- LEFT CONTENT -->
      <div>
        <h2 class="text-3xl md:text-4xl font-semibold text-black mb-5 font-[inter]">
          What Vola.ad Is
        </h2>

        <p class="text-gray-700 leading-relaxed mb-5 font-[inter]">
          Vola.ad combines user acquisition, monetization, programmatic media buying, analytics, and AI optimization into a single platform that works seamlessly across mobile apps, websites, video environments, and connected TV.
        </p>

        <p class="text-gray-700 leading-relaxed mb-6 font-[inter]">
          Instead of managing disconnected tools and channels, teams use Vola.ad to plan, launch, optimize, and scale campaigns from one place — with real-time insights and automation built in.
        </p>

        <div class="bg-[#F4EEFD] text-gray-800 p-4 rounded-lg text-sm leading-relaxed font-[inter]">
          The platform is designed to adapt continuously, learning from every interaction to improve performance as campaigns scale.
        </div>
      </div>

      <!-- RIGHT GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <!-- CARD 1 -->
        <div class="bg-[#FCFCFE] border border-[#e6e6eb] rounded-xl p-5">
          <div class="mb-4">
            <!-- Replace src -->
            <img src="assets/images/about-sec-1.png" alt="icon" class="w-8 h-8">
          </div>
          <h3 class="font-semibold text-black mb-2 font-[inter]">
            Unified Platform
          </h3>
          <p class="text-gray-600 text-sm font-[inter]">
            All channels in one place.
          </p>
        </div>

        <!-- CARD 2 -->
        <div class="bg-[#FCFCFE] border border-[#e6e6eb] rounded-xl p-5">
          <div class="mb-4">
            <img src="assets/images/about-sec-2.png" alt="icon" class="w-8 h-8">
          </div>
          <h3 class="font-semibold text-black mb-2 font-[inter]">
            AI Optimization
          </h3>
          <p class="text-gray-600 text-sm font-[inter]">
            Adapts and learns.
          </p>
        </div>

        <!-- CARD 3 -->
        <div class="bg-[#FCFCFE] border border-[#e6e6eb] rounded-xl p-5">
          <div class="mb-4">
            <img src="assets/images/about-sec-3.png" alt="icon" class="w-8 h-8">
          </div>
          <h3 class="font-semibold text-black mb-2 font-[inter]">
            Real-time Insights
          </h3>
          <p class="text-gray-600 text-sm font-[inter]">
            Data at your fingertips.
          </p>
        </div>

        <!-- CARD 4 -->
        <div class="bg-[#FCFCFE] border border-[#e6e6eb] rounded-xl p-5">
          <div class="mb-4">
            <img src="assets/images/about-sec-4.png" alt="icon" class="w-8 h-8">
          </div>
          <h3 class="font-semibold text-black mb-2 font-[inter]">
            Omnichannel
          </h3>
          <p class="text-gray-600 text-sm font-[inter]">
            Mobile, Web, Video, CTV.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

<!-- SECTION THREE -->
<section class="py-16 px-6 bg-[#FFFFFF]">
  


  <!-- Cards Grid -->
  <div class="max-w-[68rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    <!-- CARD 1 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">

<img src="assets/images/about-sec-5.png" class="mb-4 h-12">

      <h3 class="text-xl md:text-4xl font-normal mb-3 font-[inter]">
        Our Vision
      </h3>

      <p class="text-gray-600 text-base mb-6 font-[inter]">
        To create a future where advertising works as one connected system — intelligent, transparent, and performance-driven across every screen.
      </p>
      <p class="text-gray-600 text-base mb-6 font-[inter]">
        Vola.ad envisions an ecosystem where brands reach audiences with relevance, publishers unlock sustainable value, and teams make smarter decisions with confidence.
      </p>

    </div>


    <!-- CARD 2 -->
    <div class="p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
bg-gradient-to-br from-purple-100 via-purple-100 to-blue-100">

<img src="assets/images/about-sec-6.png" class="mb-4 h-12">

      <h3 class="text-xl md:text-4xl font-normal mb-3 font-[inter]">
        Our Mission
      </h3>

      <p class="text-gray-600 text-base mb-6 font-[inter]">
        To simplify digital advertising while improving outcomes.
Vola.ad’s missio
      </p>
      <p class="text-gray-600 text-base mb-6 font-[inter]">
        Vola.ad’s mission is to remove friction from campaign execution by unifying inventory access, media buying, optimization, and analytics — allowing teams to focus on strategy while technology handles complexity in the background.
      </p>
      <p class="text-gray-600 text-base mb-6 font-[inter]">
        Every feature is built with one goal in mind: helping advertisers grow efficiently, responsibly, and at scale.
      </p>

    </div>

  </div>

</section>

<!-- SECTION FOUR -->
<section class="bg-[#FFFFFF] py-8 px-4">
  <div class="max-w-[1100px] mx-auto bg-[#FFFFFF] border border-gray-200 rounded-2xl px-6 py-12 md:px-12 md:py-10 text-center">


    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-normal text-gray-900 mb-4 font-[inter]">
      Why Vola.ad
    </h2>

    <!-- Subheading -->
    <p class="text-black text-base md:text-lg mb-4 font-[inter]">
      Because growth today demands more than reach.
    </p>
    <p class="text-gray-500 text-base md:text-lg mb-10 font-[inter] md:mx-16">
      Vola.ad was built for teams that need performance without black boxes, automation without loss of control, and scale without fragmentation.
    </p>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          A unified platform instead of fragmented tools
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          AI that continuously improves outcomes in real time
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Transparent reporting across formats and screens
        </p>
      </div>

      <!-- Item -->
      <div class="flex items-center gap-3 bg-[#FCFCFE] rounded-xl px-5 py-4 text-left">
        <div class="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-xs">
          ✓
        </div>
        <p class="text-gray-700 font-[inter]">
          Built-in support for mobile, web, video, and CTV
        </p>
      </div>

    </div>

    <!-- Bottom Highlight -->
    <div class="bg-[#F7F2F8] text-gray-700 px-6 py-2 rounded-xl text-sm md:text-base font-[inter] md:mx-16">
      Vola.ad isn’t just where campaigns run — it’s where smarter advertising decisions happen.
    </div>

  </div>
</section>

<!-- SECTION FIVE -->
<section class="max-w-6xl mx-auto px-4 py-12">

  <div class="bg-[#F8F8FC] border border-[#e6e6eb] rounded-2xl p-6 md:p-10">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

      <!-- LEFT CONTENT -->
      <div>
        <h2 class="text-3xl md:text-4xl font-semibold text-black mb-4 font-[inter]">
          Trust, Security, and Compliance
        </h2>

        <p class="text-gray-800 mb-4 font-[inter]">
          Trust isn’t a feature — it’s a foundation.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4 font-[inter]">
          Vola.ad is built with a security-first architecture and privacy-conscious data practices designed to support responsible advertising at scale.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4 font-[inter]">
          From campaign execution to reporting, every layer of the platform is designed to protect data, ensure transparency, and maintain operational accountability.
        </p>

        <p class="text-gray-700 leading-relaxed font-[inter]">
          As regulations evolve and expectations rise, Vola.ad helps teams stay confident by embedding compliance and control directly into how the platform operates.
        </p>
      </div>

      <!-- RIGHT CONTENT -->
      <div>

        <p class="text-gray-700 mb-5 font-medium font-[inter]">
          Our Approach Focuses On
        </p>

        <div class="space-y-4">

          <!-- ITEM 1 -->
          <div class="flex items-start gap-4 bg-white border border-[#ececf1] rounded-xl p-4">
            <div class="text-purple-500 mt-1">
              <i class="fa-solid fa-lock text-lg"></i>
            </div>
            <div>
              <h4 class="font-semibold text-black font-[inter]">
                Secure Data
              </h4>
              <p class="text-gray-600 text-sm font-[inter]">
                Secure handling of campaign and performance data
              </p>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="flex items-start gap-4 bg-white border border-[#ececf1] rounded-xl p-4">
            <div class="text-purple-500 mt-1">
              <i class="fa-solid fa-lock text-lg"></i>
            </div>
            <div>
              <h4 class="font-semibold text-black font-[inter]">
                Privacy-Aware
              </h4>
              <p class="text-gray-600 text-sm font-[inter]">
                Privacy-aware audience activation across screens
              </p>
            </div>
          </div>

          <!-- ITEM 3 -->
          <div class="flex items-start gap-4 bg-white border border-[#ececf1] rounded-xl p-4">
            <div class="text-purple-500 mt-1">
              <i class="fa-solid fa-lock text-lg"></i>
            </div>
            <div>
              <h4 class="font-semibold text-black font-[inter]">
                Transparency
              </h4>
              <p class="text-gray-600 text-sm font-[inter]">
                Transparent reporting and operational visibility
              </p>
            </div>
          </div>

          <!-- ITEM 4 -->
          <div class="flex items-start gap-4 bg-white border border-[#ececf1] rounded-xl p-4">
            <div class="text-purple-500 mt-1">
              <i class="fa-solid fa-lock text-lg"></i>
            </div>
            <div>
              <h4 class="font-semibold text-black font-[inter]">
                Brand Safety
              </h4>
              <p class="text-gray-600 text-sm font-[inter]">
                Brand-safe inventory and accountable media delivery
              </p>
            </div>
          </div>

        </div>

        <!-- BOTTOM NOTE -->
        <div class="mt-6 bg-[#F0EBF5] text-gray-800 text-sm p-4 rounded-lg font-[inter]">
          Vola.ad supports advertisers, agencies, and partners who need performance without compromising trust.
        </div>

      </div>

    </div>

  </div>

</section>

<!-- SECTION SIX -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-[1100px] mx-auto">
    
    <div class="relative overflow-hidden rounded-2xl bg-[#f3f3f5] px-6 sm:px-10 lg:px-16 py-10 sm:py-8 flex flex-col sm:flex-col items-start sm:items-center justify-between gap-6">
      
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
          Ready to Build What’s Next?
        </h2>
        <p class="mt-2 text-xl sm:text-2xl lg:text-base font-normal text-black font-[inter] max-w-2xl mx-auto">
          Whether you’re launching your first campaign or scaling globally, Vola.ad gives you the foundation to grow across every screen.
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





