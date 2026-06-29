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

<title>Data Processing Agreement</title>

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
        Data Processing Agreement (DPA)
    </h2>

    <p class="text-sm text-gray-500 mb-8">
        Last Updated: 1st January 2026
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-10 mb-4">
        1. Introduction and Parties
    </h4>

    <p class="mb-4 leading-relaxed">
        This Data Processing Agreement (“DPA”) forms part of, and is incorporated into, the Terms of Service and/or any other agreement (“Agreement”) between:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>
            <span class="font-medium">Vola.ad</span> (“Processor”, “Service Provider”, “we”, “us”, or “our”), an AI-powered advertising platform and a subsidiary of Collectcent Digital Private Limited
        </li>
        <li>
            The customer, advertiser, agency, publisher, or partner using the Services (“Controller”, “Business”, or “you”)
        </li>
    </ul>

    <p class="leading-relaxed">
        This DPA governs the processing of Personal Data by Vola.ad on behalf of the Controller in connection with the Services.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        2. Definitions
    </h4>

    <p class="mb-4 leading-relaxed">
        For the purposes of this DPA:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><span class="font-medium">Personal Data</span>: Any information relating to an identified or identifiable individual.</li>
        <li><span class="font-medium">Processing</span>: Any operation performed on Personal Data (collection, storage, use, disclosure, etc.).</li>
        <li><span class="font-medium">Controller</span>: The entity that determines the purposes and means of processing Personal Data.</li>
        <li><span class="font-medium">Processor</span>: The entity that processes Personal Data on behalf of the Controller.</li>
        <li><span class="font-medium">Sub-processor</span>: Any third party engaged by the Processor to process Personal Data.</li>
        <li><span class="font-medium">Data Subject</span>: The individual to whom the Personal Data relates.</li>
    </ul>

    <p class="mb-2 leading-relaxed">
        Under applicable laws:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Controller = “Data Fiduciary” (DPDP Act)</li>
        <li>Processor = “Data Processor”</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        3. Scope and Applicability
    </h4>

    <p class="mb-4 leading-relaxed">
        This DPA applies where Vola.ad processes Personal Data on behalf of the Controller in connection with:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Campaign execution and optimization</li>
        <li>Programmatic advertising and bidding</li>
        <li>Audience targeting and segmentation</li>
        <li>Attribution and analytics</li>
        <li>Platform usage and account management</li>
    </ul>

    <p class="leading-relaxed">
        In certain scenarios, Vola.ad may act as an independent Controller (e.g., platform analytics, fraud detection). In such cases, this DPA does not apply, and processing is governed by our Privacy Policy.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        4. Nature and Purpose of Processing
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad processes Personal Data strictly for the purpose of providing the Services under the Agreement.
    </p>

    <p class="mb-4 leading-relaxed">
        Processing activities may include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Collection, storage, and organization of data</li>
        <li>Retrieval, analysis, and optimization</li>
        <li>Transmission to advertising partners (e.g., SSPs, DSPs, exchanges)</li>
        <li>Measurement, attribution, and reporting</li>
        <li>Fraud detection and prevention</li>
    </ul>

    <p class="leading-relaxed">
        Processing is carried out using automated systems, including AI and machine learning models, to improve campaign performance and platform efficiency.
    </p>

    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        5. Categories of Data and Data Subjects
    </h4>

    <h5 class="text-lg font-semibold text-gray-900 mt-6 mb-3">
        5.1 Categories of Personal Data
    </h5>

    <p class="mb-4 leading-relaxed">
        May include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Online identifiers (IP address, device ID, advertising ID)</li>
        <li>Cookie identifiers and tracking data</li>
        <li>Approximate location data</li>
        <li>Campaign interaction data (impressions, clicks, conversions)</li>
        <li>Account and contact information (for platform users)</li>
    </ul>

    <h5 class="text-lg font-semibold text-gray-900 mt-6 mb-3">
        5.2 Categories of Data Subjects
    </h5>

    <p class="mb-4 leading-relaxed">
        May include:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>End users interacting with ads</li>
        <li>Customers or users of the Controller’s services</li>
        <li>Platform users (advertisers, agencies, publishers)</li>
    </ul>

    <p class="leading-relaxed">
        Vola.ad does not intentionally process sensitive personal data unless explicitly required and permitted by law.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        6. Obligations of the Controller
    </h4>

    <p class="mb-4 leading-relaxed">
        The Controller represents and warrants that:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>It has a valid legal basis for processing Personal Data</li>
        <li>It has obtained all necessary consents from Data Subjects</li>
        <li>It complies with all applicable data protection laws</li>
        <li>It provides appropriate notices to Data Subjects</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        The Controller is solely responsible for:
    </p>

    <ul class="list-disc pl-6 space-y-2">
        <li>The accuracy and legality of the data provided</li>
        <li>Compliance with applicable privacy regulations</li>
        <li>Responding to Data Subject requests</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        7. Obligations of the Processor (Vola.ad)
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad shall:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Process Personal Data only on documented instructions from the Controller</li>
        <li>Not use Personal Data for purposes other than those specified</li>
        <li>Ensure confidentiality of all Personal Data</li>
        <li>Implement appropriate technical and organizational measures</li>
        <li>Assist the Controller in fulfilling its legal obligations</li>
        <li>Notify the Controller of any data breaches as required by law</li>
    </ul>

    <p class="leading-relaxed">
        We ensure that personnel authorized to process data are bound by confidentiality obligations.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        8. Sub-processors
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad may engage Sub-processors to support the delivery of Services, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Cloud hosting providers</li>
        <li>Analytics providers</li>
        <li>Advertising exchanges and partners</li>
        <li>Infrastructure and support vendors</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        We ensure that all Sub-processors:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Are bound by written agreements</li>
        <li>Provide equivalent data protection safeguards</li>
        <li>Process data only as instructed</li>
    </ul>

    <p class="leading-relaxed">
        We remain fully liable for the actions of our Sub-processors.
    </p>

      <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        9. Cross-Border Data Transfers
    </h4>

    <p class="mb-4 leading-relaxed">
        Personal Data may be transferred and processed in jurisdictions outside the Controller’s location, including India and the United States.
    </p>

    <p class="mb-4 leading-relaxed">
        We ensure that such transfers are protected through:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Contractual safeguards</li>
        <li>Industry-standard security measures</li>
        <li>Compliance with applicable laws</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        10. Data Security
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad implements appropriate technical and organizational measures, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Encryption (data in transit and at rest)</li>
        <li>Access controls and authentication mechanisms</li>
        <li>Network security and monitoring</li>
        <li>Regular audits and risk assessments</li>
    </ul>

    <p class="leading-relaxed">
        These measures are designed to protect Personal Data against unauthorized access, loss, misuse, or alteration.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        11. Data Subject Rights Assistance
    </h4>

    <p class="mb-4 leading-relaxed">
        To the extent required by law, Vola.ad shall assist the Controller in responding to requests from Data Subjects, including:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Access requests</li>
        <li>Correction or deletion requests</li>
        <li>Objections or opt-outs</li>
        <li>Data portability requests</li>
    </ul>

    <p class="leading-relaxed">
        Such assistance will be provided taking into account the nature of processing and available information.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        12. Data Breach Notification
    </h4>

    <p class="mb-4 leading-relaxed">
        In the event of a Personal Data breach, Vola.ad shall:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Notify the Controller without undue delay</li>
        <li>Provide relevant details about the breach</li>
        <li>Take reasonable steps to mitigate its impact</li>
        <li>Cooperate in fulfilling legal notification obligations</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        13. Data Retention and Deletion
    </h4>

    <p class="mb-4 leading-relaxed">
        Vola.ad shall retain Personal Data only for as long as necessary to provide the Services or comply with legal obligations.
    </p>

    <p class="mb-4 leading-relaxed">
        Upon termination of the Agreement or upon request:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Data will be deleted or anonymized</li>
        <li>Copies will be removed from active systems (subject to backups and legal retention)</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        14. Audits and Compliance
    </h4>

    <p class="mb-4 leading-relaxed">
        Upon reasonable request, Vola.ad may provide information necessary to demonstrate compliance with this DPA.
    </p>

    <p class="mb-4 leading-relaxed">
        Audits:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Must be reasonable and not disruptive</li>
        <li>May be subject to confidentiality obligations</li>
        <li>May require prior notice</li>
    </ul>

    <p class="leading-relaxed">
        We may also provide third-party audit reports or certifications where available.
    </p>

     <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        15. CCPA/CPRA Specific Terms
    </h4>

    <p class="mb-4 leading-relaxed">
        For purposes of U.S. privacy laws:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Vola.ad acts as a Service Provider / Processor</li>
        <li>We do not sell Personal Data in the traditional sense</li>
        <li>We process data only for business purposes as defined by law</li>
    </ul>

    <p class="mb-4 leading-relaxed">
        We agree:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Not to retain, use, or disclose Personal Data beyond permitted purposes</li>
        <li>Not to combine Personal Data with other data except as allowed</li>
    </ul>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        16. DPDP Act Compliance
    </h4>

    <p class="mb-4 leading-relaxed">
        In alignment with the Digital Personal Data Protection Act, 2023:
    </p>

    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>The Controller acts as the Data Fiduciary</li>
        <li>Vola.ad acts as the Data Processor</li>
        <li>Processing is carried out under lawful instructions</li>
        <li>Appropriate safeguards are implemented</li>
    </ul>

    <p class="leading-relaxed">
        We assist in grievance redressal and compliance obligations where applicable.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        17. Liability
    </h4>

    <p class="mb-4 leading-relaxed">
        Each party shall be liable for its own violations of applicable data protection laws.
    </p>

    <p class="leading-relaxed">
        Vola.ad’s liability is subject to limitations outlined in the main Agreement.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        18. Term and Termination
    </h4>

    <p class="mb-4 leading-relaxed">
        This DPA remains in effect as long as Vola.ad processes Personal Data on behalf of the Controller.
    </p>

    <p class="leading-relaxed">
        Termination of the Agreement will result in termination of this DPA, subject to data retention obligations.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        19. Governing Law
    </h4>

    <p class="leading-relaxed">
        This DPA shall be governed by the laws specified in the main Agreement.
    </p>


    <h4 class="text-xl font-semibold text-gray-900 mt-12 mb-4">
        20. Contact Information
    </h4>

    <p class="leading-relaxed">
        For data protection inquiries, connect with our team at 
        <a href="mailto:support@vola.ad" class="text-[#995AF1]">
            support@vola.ad
        </a>
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





