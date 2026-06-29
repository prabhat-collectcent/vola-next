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

<title>Privacy Policy</title>

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
        Privacy Policy
    </h2>

    <p class="text-sm text-gray-500 mb-8">
        Last Updated: 1st January 2026
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        1. Introduction
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad (“Vola.ad”, “we”, “us”, or “our”) is an AI-powered advertising and growth platform that enables businesses to acquire users, run programmatic media buying campaigns, monetize inventory, and access advanced analytics across mobile applications, websites, video environments, and connected TV (CTV).
    </p>

    <p class="mb-4 leading-relaxed">
        Vola.ad operates as a subsidiary of Collectcent Digital Private Limited and forms part of its broader digital advertising and technology ecosystem. Through our platform, we facilitate interactions between advertisers, agencies, publishers, and end users across multiple digital environments and devices.
    </p>

    <p class="mb-4 leading-relaxed">
        We recognize that privacy and data protection are fundamental to building trust. This Privacy Policy explains how we collect, use, process, store, and disclose personal data when you interact with our Services. It also outlines your rights and choices regarding your information and the safeguards we implement to protect it.
    </p>

    <p class="mb-4 leading-relaxed">
        By using our Services, you acknowledge that you have read and understood this Privacy Policy.
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        2. Scope and Applicability
    </h4>

    <p class="mb-4 leading-relaxed">
        This Privacy Policy applies broadly to all individuals and entities interacting with Vola.ad, whether directly or indirectly. This includes users visiting our website, clients using our platform, publishers integrating our technology, and individuals interacting with advertisements delivered through our systems.
    </p>

    <p class="mb-4 leading-relaxed">
        In particular, this Policy governs:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>The use of our website, dashboards, and self-serve tools</li>
        <li>Data processed through APIs, SDKs, and integrations</li>
        <li>Data collected through advertising campaigns executed via our platform</li>
        <li>Data shared with us by partners, advertisers, and third-party providers</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        Depending on the context, Vola.ad may act as a data controller (when determining purposes of processing) or a data processor/service provider (when processing data on behalf of clients). This distinction may impact how certain rights and obligations apply.
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        3. Categories of Information We Collect
    </h4>

    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.1 Information You Provide Directly
    </h4>

    <p class="mb-4 leading-relaxed">
        When you interact with our Services, we may collect personal and business-related information that you voluntarily provide. This includes information submitted during account registration, onboarding, campaign setup, or communication with our team.
    </p>

    <p class="mb-4 leading-relaxed">
        Such data may include your name, email address, contact number, company details, role, and billing information. Additionally, advertisers and partners may provide campaign-specific inputs such as targeting parameters, creatives, and audience data.
    </p>

    <p class="mb-4 leading-relaxed">
        We use this information to establish and maintain business relationships, provide services, and ensure smooth platform operations. Where required, we may also use this information for identity verification, account security, and compliance purposes.
    </p>

    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.2 Automatically Collected Information
    </h4>

    <p class="mb-4 leading-relaxed">
        When you access or interact with our Services, we automatically collect certain technical and behavioral data. This helps us understand how users engage with our platform and enables us to improve performance, security, and user experience.
    </p>

    <p class="mb-4 leading-relaxed">
        This information may include IP addresses, device identifiers, browser type, operating system, network data, timestamps, and navigation paths. We may also collect approximate location data derived from IP addresses or device settings.
    </p>

    <p class="mb-4 leading-relaxed">
        Such data is essential for delivering ads, ensuring compatibility across devices, detecting fraud, and optimizing campaign performance in real time.
    </p>

    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.3 Advertising and Campaign Data
    </h4>

    <p class="mb-4 leading-relaxed">
        As an advertising technology platform, we process a significant volume of campaign-related data. This includes information about ad impressions, clicks, conversions, engagement metrics, and attribution across devices and channels.
    </p>

    <p class="mb-4 leading-relaxed">
        We may also process audience segmentation data, which is typically derived from behavioral patterns rather than directly identifiable personal information. This enables advertisers to reach relevant audiences while minimizing the use of personally identifiable data.
    </p>

    <p class="mb-4 leading-relaxed">
        Additionally, we collect post-click and post-view activity to measure campaign effectiveness, improve targeting accuracy, and provide actionable insights to our clients.
    </p>

    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.4 Data from Third Parties
    </h4>

    <p class="mb-4 leading-relaxed">
        We may receive information from trusted third-party partners, including advertising exchanges, supply-side platforms (SSPs), demand-side platforms (DSPs), data providers, and analytics vendors.
    </p>

    <p class="mb-4 leading-relaxed">
        This data may include audience segments, device-level identifiers, campaign performance data, and aggregated insights. We may also receive data uploaded by clients for campaign activation, including custom audience lists or conversion data.
    </p>

    <p class="mb-4 leading-relaxed">
        We take reasonable steps to ensure that third parties providing data to us have the necessary rights and permissions to share such data.
    </p>

    <h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">
        3.5 Sensitive Personal Data
    </h4>

    <p class="mb-4 leading-relaxed">
        We do not intentionally collect or process sensitive personal data such as health information, biometric data, financial account details, or information revealing racial or religious identity.
    </p>

    <p class="leading-relaxed">
        If such data is inadvertently received, we take steps to delete or anonymize it unless its retention is required by law or explicitly authorized.
    </p>


     <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        4. Cookies and Tracking Technologies
    </h4>

    <p class="mb-4 leading-relaxed">
        We use a combination of cookies, pixels, SDKs, and similar technologies to collect and process information. These technologies allow us to recognize users and devices, measure campaign performance, and deliver personalized advertising experiences.
    </p>

    <p class="mb-4 leading-relaxed">
        Cookies may be placed directly by us (first-party cookies) or by our partners (third-party cookies). They help us understand user behavior, remember preferences, and improve platform functionality.
    </p>

    <p class="mb-4 leading-relaxed">
        In mobile and CTV environments, we may rely on device identifiers, SDK integrations, and server-side tracking to achieve similar objectives.
    </p>

    <p class="leading-relaxed">
        Users have the ability to control cookie usage through browser settings, device preferences, or consent management tools. However, disabling certain tracking technologies may impact the functionality of our Services or the relevance of ads displayed.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        5. Purpose of Processing
    </h4>

    <p class="mb-4 leading-relaxed">
        We process personal data for multiple legitimate business purposes, all of which are essential to the functioning of our platform.
    </p>

    <p class="mb-4 leading-relaxed">
        Firstly, we use data to operate and maintain our Services, including account management, campaign execution, and reporting. Without such processing, it would not be possible to deliver the core functionality of our platform.
    </p>

    <p class="mb-4 leading-relaxed">
        Secondly, we process data to enable programmatic advertising. This includes real-time bidding, audience targeting, ad delivery, and cross-device attribution. These processes rely on automated systems and large-scale data analysis to ensure efficiency and effectiveness.
    </p>

    <p class="mb-4 leading-relaxed">
        Thirdly, we use artificial intelligence and machine learning technologies to optimize campaigns. These systems analyze patterns in data to improve targeting accuracy, allocate budgets efficiently, and enhance overall performance.
    </p>

    <p class="mb-4 leading-relaxed">
        We also use data for analytics and reporting, allowing clients to gain insights into campaign performance and make informed decisions.
    </p>

    <p class="leading-relaxed">
        Finally, we process data for communication, security, fraud prevention, and legal compliance purposes. This ensures that our platform remains secure, reliable, and compliant with applicable laws.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        6. Legal Basis for Processing
    </h4>

    <p class="mb-4 leading-relaxed">
        Depending on the nature of the processing and the applicable jurisdiction, we rely on different legal bases.
    </p>

    <p class="mb-4 leading-relaxed">
        In many cases, processing is necessary to perform a contract with our clients or to provide requested services. In other cases, we rely on legitimate interests, such as improving our platform, preventing fraud, or ensuring network security.
    </p>

    <p class="mb-4 leading-relaxed">
        Where required by law, we obtain user consent before collecting or processing certain types of data, particularly for cookies and targeted advertising.
    </p>

    <p class="leading-relaxed">
        We may also process data to comply with legal obligations, including regulatory requirements, law enforcement requests, and dispute resolution.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        7. Sharing and Disclosure of Information
    </h4>

    <p class="mb-4 leading-relaxed">
        We may share personal data with various categories of recipients as part of our operations.
    </p>

    <p class="mb-4 leading-relaxed">
        We engage service providers to support infrastructure, analytics, payments, and customer support. These providers are contractually bound to process data only on our behalf and in accordance with our instructions.
    </p>

    <p class="mb-4 leading-relaxed">
        We also share data within the advertising ecosystem, including SSPs, DSPs, exchanges, and measurement partners. This is necessary to facilitate ad delivery, real-time bidding, and performance tracking.
    </p>

    <p class="mb-4 leading-relaxed">
        In certain cases, we may disclose data to legal authorities to comply with applicable laws or respond to lawful requests.
    </p>

    <p class="mb-4 leading-relaxed">
        If our business undergoes a merger, acquisition, or restructuring, personal data may be transferred as part of that transaction, subject to appropriate safeguards.
    </p>

    <p class="leading-relaxed">
        We may also share aggregated or anonymized data that does not identify individuals.
    </p>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        8. Data Retention
    </h4>

    <p class="mb-4 leading-relaxed">
        We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy.
    </p>

    <p class="mb-4 leading-relaxed">
        Retention periods may vary depending on the type of data, contractual obligations, and legal requirements. For example, certain financial or transactional data may be retained for longer periods to comply with regulatory obligations.
    </p>

    <p class="leading-relaxed">
        Once data is no longer required, we take steps to securely delete, anonymize, or archive it in accordance with industry standards.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        9. Data Security
    </h4>

    <p class="mb-4 leading-relaxed">
        We implement robust technical and organizational measures to protect personal data. These include encryption, access controls, secure infrastructure, and continuous monitoring systems.
    </p>

    <p class="mb-4 leading-relaxed">
        We regularly review and update our security practices to address emerging threats and vulnerabilities. Access to personal data is restricted to authorized personnel who require it for legitimate business purposes.
    </p>

    <p class="leading-relaxed">
        Despite our efforts, no system is completely secure. In the event of a data breach, we will take appropriate steps to mitigate the impact and notify affected parties as required by law.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        10. Cross-Border Data Transfers
    </h4>

    <p class="leading-relaxed">
        Given the global nature of digital advertising, personal data may be transferred across borders, including to India and the United States.
    </p>

    <p class="leading-relaxed mt-4">
        We ensure that such transfers are conducted in accordance with applicable laws and are protected by appropriate safeguards, including contractual agreements and security measures.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        11. Your Rights
    </h4>

    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-2">
        DPDP Act, 2023
    </h4>

    <p class="mb-4 leading-relaxed">
        Users have the right to access, correct, and erase their personal data, as well as withdraw consent and seek grievance redressal.
    </p>

    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-2">
        CCPA/CPRA and State Laws
    </h4>

    <p class="leading-relaxed">
        Users may have the right to know what data is collected, request deletion, opt out of data sharing, and receive equal service without discrimination.
    </p>

    <p class="leading-relaxed mt-4">
        We provide mechanisms to exercise these rights and respond to requests within legally required timeframes.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        12. Advertising Choices and Opt-Out
    </h4>

    <p class="mb-4 leading-relaxed">
        Users can manage their advertising preferences through browser settings, device controls, or industry opt-out tools.
    </p>

    <p class="leading-relaxed">
        While opting out may reduce personalization, it will not eliminate ads entirely.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        13. Children’s Privacy
    </h4>

    <p class="leading-relaxed">
        Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        14. Third-Party Services
    </h4>

    <p class="leading-relaxed">
        Our platform may integrate with third-party services, each of which operates under its own privacy practices. We encourage users to review their policies.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        15. Updates to This Policy
    </h4>

    <p class="leading-relaxed">
        We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. Updates will be posted with a revised date.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        16. Contact Information
    </h4>

    <p class="leading-relaxed">
        For privacy-related inquiries, connect with our team at 
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





