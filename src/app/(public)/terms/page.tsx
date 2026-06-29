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

<title>Terms of Service</title>

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
        Terms of Service
    </h2>

    <p class="text-sm text-gray-500 mb-8">
        Last Updated: 1st January 2026
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        1. Introduction
    </h4>

    <p class="mb-4 leading-relaxed">
        These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “you”, or “your”) and Vola.ad (“Vola.ad”, “we”, “us”, or “our”), governing your access to and use of our platform, website, dashboards, APIs, SDKs, integrations, and all related services (collectively, the “Services”).
    </p>

    <p class="mb-4 leading-relaxed">
        Vola.ad is an AI-powered advertising and growth platform that enables user acquisition, programmatic media buying, inventory monetization, analytics, and cross-channel campaign execution across mobile applications, websites, video environments, and connected TV (CTV).
    </p>

    <p class="mb-4 leading-relaxed">
        Vola.ad operates as a subsidiary of Collectcent Digital Private Limited and forms part of its broader digital advertising and technology ecosystem.
    </p>

    <p class="leading-relaxed">
        By accessing, registering for, or using our Services in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and any additional agreements incorporated herein by reference.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        2. Definitions
    </h4>

    <p class="mb-4 leading-relaxed">
        For the purposes of these Terms:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><span class="font-medium">Account</span> means a registered account used to access the Services.</li>
        <li><span class="font-medium">Advertiser</span> means any entity using the platform to run campaigns.</li>
        <li><span class="font-medium">Publisher</span> means any entity providing ad inventory.</li>
        <li><span class="font-medium">Campaign</span> means any advertising activity executed via the platform.</li>
        <li><span class="font-medium">Content</span> means creatives, ads, text, images, videos, or other materials uploaded or used.</li>
        <li><span class="font-medium">Inventory</span> means digital advertising space across apps, web, video, or CTV.</li>
        <li><span class="font-medium">Invalid Traffic</span> includes fraudulent clicks, bots, automated impressions, or deceptive practices.</li>
        <li><span class="font-medium">Partners</span> means third-party service providers, exchanges, SSPs, DSPs, and vendors.</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        3. Eligibility and Authority
    </h4>

    <p class="mb-4 leading-relaxed">
        You must be at least 18 years of age and capable of entering into legally binding agreements.
    </p>

    <p class="mb-4 leading-relaxed">
        If you are accessing or using the Services on behalf of a company, agency, or other entity, you represent and warrant that you have full legal authority to bind such entity to these Terms. In such cases, the term “User” includes both you and the entity you represent.
    </p>

    <p class="leading-relaxed">
        We reserve the right to verify your identity, business credentials, and authority at any time and may suspend or restrict access if such verification fails.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        4. Description of Services
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad provides a unified platform designed to facilitate digital advertising and monetization at scale. The Services may include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Demand-Side Platform (DSP) capabilities</li>
        <li>Programmatic real-time bidding (RTB)</li>
        <li>Cross-device and cross-channel campaign execution</li>
        <li>Audience targeting and segmentation tools</li>
        <li>AI-driven campaign optimization</li>
        <li>Analytics dashboards and reporting tools</li>
        <li>Monetization solutions for publishers</li>
        <li>API and SDK integrations</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        The Services may rely on integrations with third-party systems, including ad exchanges, data providers, and measurement platforms.
    </p>

    <p class="leading-relaxed">
        We reserve the right to modify, enhance, suspend, or discontinue any part of the Services at our discretion, with or without notice, to improve functionality, comply with legal requirements, or maintain platform integrity.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        5. Account Registration and Security
    </h4>

    <p class="mb-4 leading-relaxed">
        To access certain features, you must create an Account and provide accurate, complete, and up-to-date information.
    </p>

    <p class="mb-4 leading-relaxed">
        You are solely responsible for:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Maintaining the confidentiality of your login credentials</li>
        <li>Restricting access to your Account</li>
        <li>All activities conducted under your Account</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        You agree to immediately notify us of any unauthorized access or security breach.
    </p>

    <p class="mb-4 leading-relaxed">
        We may implement additional verification steps, including identity or business verification, to ensure platform security and compliance.
    </p>

    <p class="leading-relaxed">
        We reserve the right to suspend or terminate accounts that provide false or misleading information, engage in suspicious or fraudulent activity, or violate these Terms.
    </p>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        6. Acceptable Use and Restrictions
    </h4>

    <p class="mb-4 leading-relaxed">
        You agree to use the Services only for lawful and legitimate business purposes.
    </p>

    <p class="mb-4 leading-relaxed">
        You shall not:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Engage in fraudulent, deceptive, or misleading activities</li>
        <li>Generate or facilitate Invalid Traffic</li>
        <li>Use bots, scripts, or automated systems to manipulate campaigns</li>
        <li>Distribute malware, spyware, or harmful code</li>
        <li>Attempt unauthorized access to systems or data</li>
        <li>Interfere with platform performance or security</li>
        <li>Circumvent platform controls, safeguards, or billing systems</li>
    </ul>

    <p class="leading-relaxed">
        You are responsible for ensuring that your use complies with all applicable laws, industry standards, and advertising guidelines.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        7. Advertiser Obligations
    </h4>

    <p class="mb-4 leading-relaxed">
        As an advertiser or agency, you are fully responsible for all campaigns executed through your Account.
    </p>

    <p class="mb-4 leading-relaxed">
        You represent and warrant that:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>You have all necessary rights, licenses, and permissions for your Content</li>
        <li>Your advertisements comply with applicable laws and regulations</li>
        <li>You have obtained all required user consents for data usage</li>
        <li>Your campaigns do not infringe intellectual property rights</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        You agree not to run campaigns that include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>False, misleading, or deceptive claims</li>
        <li>Illegal products or services</li>
        <li>Offensive, harmful, or discriminatory content</li>
        <li>Unauthorized data collection or tracking</li>
    </ul>

    <p class="leading-relaxed">
        We reserve the right to review, approve, reject, suspend, or remove campaigns at our sole discretion.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        8. Publisher and Inventory Partner Obligations
    </h4>

    <p class="mb-4 leading-relaxed">
        Publishers and inventory partners must ensure:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>They have full rights to the inventory provided</li>
        <li>Traffic is genuine and not artificially generated</li>
        <li>No engagement in click fraud, impression fraud, or traffic manipulation</li>
        <li>Compliance with applicable laws, including privacy and advertising regulations</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        We actively monitor traffic quality and reserve the right to:
    </p>

    <ul class="list-disc pl-6 space-y-2">
        <li>Withhold payments</li>
        <li>Suspend accounts</li>
        <li>Terminate partnerships</li>
    </ul>

    <p class="mt-4 leading-relaxed">
        These actions may be taken in cases of Invalid Traffic or policy violations.
    </p>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        9. Data Usage and Compliance
    </h4>

    <p class="mb-4 leading-relaxed">
        You agree that any data you provide or use through the platform:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Is collected and processed lawfully</li>
        <li>Does not violate privacy or data protection laws</li>
        <li>Is used only for authorized purposes</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        You are responsible for:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Obtaining necessary consents</li>
        <li>Providing proper disclosures</li>
        <li>Ensuring compliance with applicable regulations</li>
    </ul>

    <p class="leading-relaxed">
        We may process data in accordance with our Privacy Policy and applicable laws.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        10. Payments, Billing, and Financial Terms
    </h4>

    <p class="mb-4 leading-relaxed">
        You agree to pay all applicable fees associated with your use of the Services, including media spend, platform fees, and any additional charges.
    </p>

    <p class="mb-4 leading-relaxed">
        Payment obligations include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Timely payment of invoices</li>
        <li>Maintenance of valid billing information</li>
        <li>Payment of applicable taxes, duties, or levies</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        We may:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Require prepayment or deposits</li>
        <li>Suspend campaigns for non-payment</li>
        <li>Charge interest on overdue amounts</li>
    </ul>

    <p class="leading-relaxed">
        All payments are non-refundable unless otherwise agreed in writing.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        11. Intellectual Property
    </h4>

    <p class="mb-4 leading-relaxed">
        All intellectual property rights in the platform, including software, algorithms, technology, trademarks, and documentation, are owned by Vola.ad or its licensors.
    </p>

    <p class="mb-4 leading-relaxed">
        You are granted a limited, non-exclusive, non-transferable license to use the Services.
    </p>

    <p class="mb-4 leading-relaxed">
        You may not:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Copy, modify, or distribute our technology</li>
        <li>Reverse engineer or decompile the platform</li>
        <li>Use our trademarks without authorization</li>
    </ul>

    <p class="leading-relaxed">
        You retain ownership of your Content but grant us a worldwide, royalty-free license to use it for providing and improving the Services.
    </p>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        12. Third-Party Services and Integrations
    </h4>

    <p class="mb-4 leading-relaxed">
        The platform may integrate with third-party services such as ad exchanges, analytics providers, and data partners.
    </p>

    <p class="mb-4 leading-relaxed">
        We do not control and are not responsible for:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Third-party availability or performance</li>
        <li>Their data practices or policies</li>
    </ul>

    <p class="leading-relaxed">
        Your use of such services is subject to their respective terms and policies.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        13. Service Availability and Performance
    </h4>

    <p class="mb-4 leading-relaxed">
        We strive to maintain high availability, but do not guarantee uninterrupted or error-free operation.
    </p>

    <p class="mb-4 leading-relaxed">
        The Services may be affected by:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Maintenance activities</li>
        <li>Technical issues</li>
        <li>Third-party dependencies</li>
    </ul>

    <p class="leading-relaxed">
        We are not liable for downtime, delays, or performance issues.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        14. Disclaimers
    </h4>

    <p class="mb-4 leading-relaxed">
        The Services are provided on an “as is” and “as available” basis.
    </p>

    <p class="mb-4 leading-relaxed">
        We do not guarantee:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Campaign performance or ROI</li>
        <li>Specific results or outcomes</li>
        <li>Continuous or error-free operation</li>
    </ul>

    <p class="leading-relaxed">
        All warranties, express or implied, are disclaimed to the fullest extent permitted by law.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        15. Limitation of Liability
    </h4>

    <p class="mb-4 leading-relaxed">
        To the maximum extent permitted by law:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>We shall not be liable for indirect, incidental, or consequential damages</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        16. Indemnification
    </h4>

    <p class="mb-4 leading-relaxed">
        You agree to indemnify and hold harmless Vola.ad and its affiliates from any claims arising from:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Your use of the Services</li>
        <li>Your campaigns or Content</li>
        <li>Your violation of these Terms</li>
        <li>Your breach of applicable laws</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        17. Suspension and Termination
    </h4>

    <p class="mb-4 leading-relaxed">
        We may suspend or terminate your access at any time if:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>You violate these Terms</li>
        <li>You engage in fraudulent or illegal activity</li>
        <li>Required by law or regulatory authorities</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        Upon termination:
    </p>

    <ul class="list-disc pl-6 space-y-2">
        <li>Access will be revoked</li>
        <li>Outstanding payments remain due</li>
        <li>Relevant provisions will survive termination</li>
    </ul>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        18. Compliance with Laws
    </h4>

    <p class="mb-4 leading-relaxed">
        You agree to comply with all applicable laws, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Advertising regulations</li>
        <li>Data protection and privacy laws</li>
        <li>Anti-corruption and anti-fraud laws</li>
    </ul>

    <p class="leading-relaxed">
        You are responsible for compliance in all jurisdictions where you operate.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        19. Force Majeure
    </h4>

    <p class="leading-relaxed">
        We are not liable for delays or failures caused by events beyond our control, including natural disasters, network failures, or governmental actions.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        20. Changes to Terms
    </h4>

    <p class="leading-relaxed">
        We may update these Terms periodically. Continued use of the Services constitutes acceptance of the updated Terms.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        21. Contact Information
    </h4>

    <p class="leading-relaxed">
        For any questions or concerns regarding this policy, connect with our team at 
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





