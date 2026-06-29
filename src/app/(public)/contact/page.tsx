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

<title>Contact Us</title>

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
<a href="/who-we-serve" class="font-[inter] hover:text-black transition">Who We Serve</a>
<a href="/about" class="font-[inter] hover:text-black transition">About</a>
<a href="/contact" class="font-[inter] hover:text-black transition font-semibold text-black">Contact</a>

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
      Contact
    </span>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight font-[Arial] md:px-32">
      Let’s Talk Growth
    </h2>

    <!-- Subtitle -->
    <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-inter font-semibold">
      Whether you’re exploring Vola.ad, planning your next campaign, or ready to scale across screens, we’ll meet you where you are. Here’s how you can reach out to us:
    </p>

  </div>

</section>

<!-- SECTION  TWO -->
<section class="bg-[#fff] font-sans">

  <div class="max-w-[1100px] mx-auto px-4 py-10">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- LEFT SIDE -->
      <div class="space-y-6">
        
        <!-- Card 1 -->
        <div class="bg-[#f9f9f9] rounded-xl p-8">
          <h2 class="text-[24px] font-semibold mb-3">Fill Out the Form</h2>
          <p class="text-[#4B4B4B] font-light text-[20px] leading-relaxed mb-24">
            Share your details and goals using the form on this page. Our team will review your request and get back to you promptly.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#f9f9f9] rounded-xl p-8">
          <h2 class="text-[24px] font-semibold mb-3">Prefer Email?</h2>
          <p class="text-[#4B4B4B] font-light text-[20px] mb-10">
            You can also reach us directly at:
          </p>

          <a href="mailto:support@vola.ad">
            <button class="border border-gray-400 px-4 py-2 rounded-lg text-[20px] text-gray-700 mb-10">
            support@vola.ad
          </button>
          </a>

          <p class="text-[#4B4B4B] font-light text-[20px] mt-4 leading-relaxed mb-4">
            Whether it’s a quick question or a detailed brief, we’re happy to continue the conversation over email.
          </p>
        </div>

      </div>  

      <!-- RIGHT SIDE FORM -->
      <div class="bg-[#f9f9f9] rounded-xl p-8">
        
        <form class="space-y-6">
          
          <!-- Input -->
          <div>
            <label class="text-[18px] text-gray-700">Name</label>
            <input type="text" placeholder="Please fill in your name"
              class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm"/>
          </div>

          <div>
            <label class="text-[18px] text-gray-700">Country</label>
            <div class="flex items-center">
              <input type="text" placeholder="Please fill in country"
                class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm"/>
              <span class="ml-2 text-xl">+</span>
            </div>
          </div>

          <div>
            <label class="text-[18px] text-gray-700">Company</label>
            <input type="text" placeholder="Your company name"
              class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm"/>
          </div>

          <div>
            <label class="text-[18px] text-gray-700">Phone Number</label>
            <input type="text" placeholder="Phone Number"
              class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm"/>
          </div>

          <div>
            <label class="text-[18px] text-gray-700">Email</label>
            <input type="email" placeholder="Please fill your email address"
              class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm"/>
          </div>

          <div>
            <label class="text-[18px] text-gray-700">Message</label>
            <textarea placeholder="Please fill your message"
              class="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm resize-none"></textarea>
          </div>

          <!-- Button -->
          <button type="submit"
            class="w-full py-3 rounded-full text-white text-[16px] font-medium bg-purple-500 ">
            Submit
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

<!-- SECTION THREE -->
<section class="py-16 md:py-16 px-4">
  <div class="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    <!-- Left Content -->
    <div>
      <h2 class="text-3xl sm:text-4xl md:text-4xl font-400 text-black leading-tight mb-6 font-[inter]">
        Get a Guided Tour From<br> Our Experts
      </h2>

      <p class="text-gray-600 text-base md:text-lg mb-4">
        See how Vola.ad works in action.
      </p>

      <p class="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
        Get a guided walkthrough of the platform, tailored to your goals — from user acquisition
        and monetization to programmatic media buying, analytics, and connected TV.
      </p>
    </div>

    <!-- Right Content -->
    <div>
      <p class="text-[#3B3B3B] text-base md:text-[24px] mb-6 font-medium">
        Our conversations focus on what actually moves the needle:
      </p>

      <ul class="space-y-4 text-gray-600 text-base md:text-lg list-disc pl-5">
        <li>How campaigns are planned and launched</li>
        <li>How AI optimization improves performance</li>
        <li>How reporting stays clear across screens</li>
        <li>How teams maintain control while scaling</li>
      </ul>
    </div>

  </div>

  <!-- Button -->
  <a href="/auth/register">
    <div class="text-center mt-12">
    <button class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:opacity-90 transition duration-300">
      Book a Consultation
    </button>
  </div>
  </a>

</section>

<!-- SECTION FOUR -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-6xl mx-auto">
    
    <div class="relative overflow-hidden rounded-2xl bg-[#f3f3f5] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col items-center justify-center text-center gap-6">
      
      <!-- Custom Gradient Glow -->
      <div class="pointer-events-none absolute inset-0">
        
        <!-- Main angled glow -->
        <div class="absolute top-[55%] w-[1800px] h-[300px] 
                    bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.6)_0%,_rgba(124,58,237,0.5)_40%,_rgba(255,255,255,0)_100%)]
                    rotate-[-5deg] blur-xl">
        </div>

      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-4xl">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-black leading-snug">
          Start a Connect with the campaign manager
        </h2>
        <p class="mt-2 text-sm sm:text-base lg:text-lg font-light text-black">
          Already know what you want to run? Let’s get moving.
        </p>
        <p class="mt-2 text-sm sm:text-base lg:text-lg font-light text-black">
          If you’re ready to launch, our team helps you activate campaigns quickly across apps, web, video, and CTV — with setup support and optimization guidance from day one. This is ideal for teams with timelines, budgets, and clear objectives.
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





