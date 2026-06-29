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

<title>Cookie Policy</title>

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

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

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

<style>
    body {
        font-family: 'Inter', sans-serif;
    }
</style>

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

<a href="solution.html" class="font-[inter] hover:text-black transition">Solutions</a>
<a href="inventory.html" class="font-[inter] hover:text-black transition">Inventory</a>
<a href="who-we-serve.html" class="font-[inter] hover:text-black transition">Who We Serve</a>
<a href="about.html" class="font-[inter] hover:text-black transition">About</a>
<a href="contact-us.html" class="font-[inter] hover:text-black transition">Contact</a>

</nav>

<!-- Desktop Buttons -->
<div class="hidden md:flex items-center gap-4">

<a href="sign-in.html" class="px-5 py-2 border border-black rounded-full text-sm font-medium hover:border-[#A384F6] transition duration-300">
Sign in
</a>

<a href="sign-up.html" class="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#995AF1] hover:opacity-90 transition duration-300">
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

<section class="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-28 text-gray-700 md:pt-[10%]">

<h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
        Cookie Policy
    </h2>

    <p class="text-sm text-gray-500 mb-8">
        Last Updated: 1st January 2026
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        1. Introduction
    </h4>

    <p class="mb-4 leading-relaxed">
        This Cookie Policy explains how Vola.ad (“Vola.ad”, “we”, “us”, or “our”) uses cookies and similar tracking technologies when you access our website, platform, dashboards, APIs, SDKs, and related services (collectively, the “Services”).
    </p>

    <p class="mb-4 leading-relaxed">
        Vola.ad operates as a subsidiary of Collectcent Digital Private Limited and uses cookies as part of its broader advertising and analytics infrastructure to deliver, measure, and optimize campaigns across apps, websites, video environments, and connected TV (CTV).
    </p>

    <p class="leading-relaxed">
        This Policy should be read alongside our Privacy Policy, which explains how we process personal data more broadly.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        2. What Are Cookies and Similar Technologies
    </h4>

    <p class="mb-4 leading-relaxed">
        Cookies are small text files placed on your device (computer, smartphone, or other internet-enabled device) when you visit a website. These files store information that helps recognize your browser or device during subsequent visits.
    </p>

    <p class="mb-4 leading-relaxed">
        In addition to cookies, we may use similar technologies, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><span class="font-medium">Pixels (Web Beacons):</span> Small pieces of code that track user interactions such as page views or ad impressions</li>
        <li><span class="font-medium">SDKs (Software Development Kits):</span> Used in mobile applications to collect data and enable advertising functionality</li>
        <li><span class="font-medium">Local Storage:</span> Stores data within your browser for performance and functionality purposes</li>
        <li><span class="font-medium">Device Identifiers:</span> Such as Advertising IDs used in mobile and CTV environments</li>
        <li><span class="font-medium">Server-to-Server Integrations:</span> Used to track conversions and campaign performance without relying solely on browser-based cookies</li>
    </ul>

    <p class="leading-relaxed">
        These technologies collectively enable us to operate our platform efficiently and deliver relevant advertising experiences.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        3. How We Use Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        We use cookies and similar technologies for multiple purposes, depending on the context in which you interact with our Services.
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.1 Essential Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        These cookies are necessary for the functioning of our website and platform. Without them, certain features may not work properly.
    </p>

    <p class="mb-4 leading-relaxed">
        They are used for:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Authentication and account login</li>
        <li>Security and fraud prevention</li>
        <li>Session management</li>
        <li>Load balancing and system stability</li>
    </ul>

    <p class="leading-relaxed">
        These cookies do not require user consent in most jurisdictions.
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.2 Functional Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        Functional cookies enhance your experience by remembering your preferences and settings.
    </p>

    <p class="mb-4 leading-relaxed">
        They help:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Store user preferences</li>
        <li>Improve usability and navigation</li>
        <li>Personalize non-advertising content</li>
    </ul>

    <p class="leading-relaxed">
        While not strictly necessary, they contribute to a smoother user experience.
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.3 Analytics and Performance Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        These cookies help us understand how users interact with our Services.
    </p>

    <p class="mb-4 leading-relaxed">
        They collect information such as:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Pages visited and time spent</li>
        <li>Navigation patterns</li>
        <li>Device and browser performance</li>
        <li>Error tracking and diagnostics</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        This data is typically aggregated and used to:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Improve platform performance</li>
        <li>Identify technical issues</li>
        <li>Optimize user experience</li>
    </ul>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.4 Advertising and Targeting Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        As an AdTech platform, Vola.ad uses cookies and similar technologies to deliver and optimize advertising.
    </p>

    <p class="mb-4 leading-relaxed">
        These cookies enable:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Audience targeting and segmentation</li>
        <li>Frequency capping (limiting how often ads are shown)</li>
        <li>Cross-device and cross-channel tracking</li>
        <li>Attribution (measuring conversions and campaign success)</li>
        <li>Personalized advertising</li>
    </ul>

    <p class="leading-relaxed">
        They may be set by us or by our advertising partners, including SSPs, DSPs, ad exchanges, and measurement providers.
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.5 Cross-Device and CTV Tracking
    </h4>

    <p class="mb-4 leading-relaxed">
        In environments such as mobile apps and connected TV, traditional cookies may not be used. Instead, we rely on:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Device identifiers (e.g., Advertising IDs)</li>
        <li>SDK integrations</li>
        <li>Server-side tracking</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        These technologies allow us to:
    </p>

    <ul class="list-disc pl-6 space-y-2">
        <li>Deliver consistent ad experiences across devices</li>
        <li>Measure performance across platforms</li>
        <li>Improve campaign accuracy and efficiency</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        4. Third-Party Cookies and Technologies
    </h4>

    <p class="mb-4 leading-relaxed">
        We work with third-party partners who may place cookies or similar technologies on your device.
    </p>

    <p class="mb-4 leading-relaxed">
        These partners may include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Advertising networks and exchanges</li>
        <li>Analytics providers</li>
        <li>Measurement and attribution vendors</li>
        <li>Cloud and infrastructure providers</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        These third parties may collect information about your interactions with our Services and other websites to provide advertising, analytics, and measurement services.
    </p>

    <p class="leading-relaxed">
        We do not control these third-party technologies directly, and their use is governed by their respective privacy policies.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        5. Legal Basis for Using Cookies
    </h4>

    <p class="mb-4 leading-relaxed">
        Depending on your location, we rely on different legal bases for using cookies:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><span class="font-medium">Consent:</span> For non-essential cookies such as advertising and analytics</li>
        <li><span class="font-medium">Legitimate Interests:</span> For performance, security, and service improvement</li>
        <li><span class="font-medium">Contractual Necessity:</span> For essential platform functionality</li>
    </ul>

    <p class="leading-relaxed">
        Where required, we will request your consent before placing non-essential cookies on your device.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        6. Your Choices and Cookie Management
    </h4>

    <p class="mb-6 leading-relaxed">
        You have several options to control or limit how cookies are used:
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">
        6.1 Browser Settings
    </h4>

    <p class="mb-4 leading-relaxed">
        Most browsers allow you to:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Block or delete cookies</li>
        <li>Set preferences for specific websites</li>
        <li>Receive alerts before cookies are stored</li>
    </ul>

    <p class="leading-relaxed">
        Please note that disabling cookies may affect the functionality of our Services.
    </p>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        6.2 Device Settings (Mobile &amp; CTV)
    </h4>

    <p class="mb-4 leading-relaxed">
        You can control tracking via:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>“Limit Ad Tracking” (iOS)</li>
        <li>“Opt-out of Ads Personalization” (Android)</li>
        <li>Device-specific privacy settings for smart TVs and streaming devices</li>
    </ul>


    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        6.3 Platform-Level Controls
    </h4>

    <p class="leading-relaxed">
        Where available, we may provide in-platform controls to manage tracking preferences, subject to technical feasibility.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        7. Data Retention for Cookie Data
    </h4>

    <p class="mb-4 leading-relaxed">
        Cookie-related data is retained for varying durations depending on its purpose.
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Session cookies expire when you close your browser</li>
        <li>Persistent cookies remain for a defined period or until manually deleted</li>
        <li>Advertising identifiers may persist until reset by the user</li>
    </ul>

    <p class="leading-relaxed">
        We ensure that data collected through cookies is not retained longer than necessary for its intended purpose.
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        8. Security of Cookie Data
    </h4>

    <p class="mb-4 leading-relaxed">
        We implement appropriate safeguards to protect data collected via cookies, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Encryption where applicable</li>
        <li>Secure transmission protocols</li>
        <li>Access restrictions</li>
    </ul>

    <p class="leading-relaxed">
        While cookies themselves are not inherently harmful, improper use can pose risks. We take reasonable steps to ensure responsible and secure use.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        9. International Data Transfers
    </h4>

    <p class="leading-relaxed">
        Data collected through cookies may be processed in multiple jurisdictions. We ensure that such transfers are conducted with appropriate safeguards and in compliance with applicable laws.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        10. Updates to This Cookie Policy
    </h4>

    <p class="mb-4 leading-relaxed">
        We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our practices.
    </p>

    <p class="mb-4 leading-relaxed">
        Any updates will be posted on this page with a revised “Last Updated” date.
    </p>

    <p class="leading-relaxed">
        Continued use of our Services after updates constitutes acceptance of the revised Policy.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        11. Contact Us
    </h4>

    <p class="leading-relaxed">
        For any questions or concerns regarding this Cookie Policy, connect with our team at 
        <a href="mailto:support@vola.ad" class="text-[#995AF1]">support@vola.ad</a>.
    </p>

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





