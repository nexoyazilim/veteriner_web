<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PetCare Clinic Appointment</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#19e6c4",
            "background-light": "#f6f8f8",
            "background-dark": "#11211e",
          },
          fontFamily: {
            "display": ["Inter"]
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
        },
      },
    }
  </script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-display">
<div class="min-h-screen">
<header class="bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
<nav class="container mx-auto px-6 py-4 flex justify-between items-center">
<a class="flex items-center space-x-3" href="#">
<svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
</svg>
<span class="text-xl font-bold text-gray-900 dark:text-white">PetCare Clinic</span>
</a>
<div class="hidden md:flex items-center space-x-8">
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Services</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>
</div>
<a class="bg-primary text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-md" href="#booking-form">Book Now</a>
</nav>
</header>
<main class="container mx-auto px-6 py-16">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-12">
<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Book a Quick Appointment</h1>
<p class="text-lg text-gray-600 dark:text-gray-400">Welcome back! Quickly schedule your pet's visit with pre-filled details.</p>
</div>
<div class="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800" id="booking-form">
<div class="flex justify-between items-center mb-6">
<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Quick Appointment Dashboard</h2>
<div class="relative">
<select class="appearance-none bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer" id="previous-pets">
<option selected="">Returning User: Select Pet</option>
<option value="fido">Fido (Golden Retriever)</option>
<option value="mittens">Mittens (Siamese Cat)</option>
<option value="buddy">Buddy (Beagle)</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            arrow_drop_down
          </span>
</div>
</div>
<form class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="pet-name">Pet's Name</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="pet-name" placeholder="Fido" type="text" value="Fido"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="species">Species</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="species" placeholder="Dog" type="text" value="Dog"/>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="breed">Breed</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="breed" placeholder="Golden Retriever" type="text" value="Golden Retriever"/>
</div>
<div class="border-t border-gray-200 dark:border-gray-700 pt-6">
<h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Owner Information</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="owner-name">Your Name</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="owner-name" placeholder="Jane Doe" type="text" value="Jane Doe"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="email">Email</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="email" placeholder="jane.doe@example.com" type="email" value="jane.doe@example.com"/>
</div>
</div>
<div class="mt-6">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="phone">Phone Number</label>
<input class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="phone" placeholder="(555) 123-4567" type="tel" value="(555) 123-4567"/>
</div>
</div>
<div class="border-t border-gray-200 dark:border-gray-700 pt-6">
<h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Appointment Details</h2>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="service">Service</label>
<select class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="service">
<option>Select service</option>
<option selected="">Routine Check-up</option>
<option>Vaccination</option>
<option>Grooming</option>
<option>Emergency</option>
</select>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div class="md:col-span-2">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date &amp; Time</label>
<div class="grid grid-cols-7 gap-2 text-center text-sm mb-4">
<div class="font-medium text-gray-500 dark:text-gray-400">Sun</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Mon</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Tue</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Wed</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Thu</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Fri</div>
<div class="font-medium text-gray-500 dark:text-gray-400">Sat</div>
</div>
<div class="grid grid-cols-7 gap-2 text-center">
<div></div>
<div></div>
<div></div>
<div></div>
<button class="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">29</button>
<button class="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">30</button>
<button class="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">31</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">2</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">3</button>
<button class="w-full py-2 rounded-lg bg-primary text-gray-900 font-bold shadow-md">4</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">5</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">6</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">7</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">8</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">10</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">11</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">12</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">13</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">14</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">15</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">16</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">17</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">18</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">19</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">20</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">21</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">22</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">23</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">24</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">25</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">26</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">27</button>
<button class="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">28</button>
</div>
</div>
<div class="md:col-span-2 mt-6">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Available Slots (Mon, Oct 4)</label>
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9:00 AM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9:30 AM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">10:00 AM</button>
<button class="bg-primary text-gray-900 font-bold rounded-lg px-4 py-2 text-center text-sm shadow-md">10:30 AM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">11:00 AM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">11:30 AM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1:00 PM</button>
<button class="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1:30 PM</button>
</div>
<button class="w-full mt-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
<span class="material-symbols-outlined align-middle mr-2">
              event_available
            </span>
            Next Available Slot: Tue, Oct 5, 9:00 AM
          </button>
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="notes">Additional Notes</label>
<textarea class="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="notes" placeholder="Any specific concerns or requests?" rows="4"></textarea>
</div>
<div>
<button class="w-full bg-primary text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all text-lg shadow-lg" type="submit">Confirm Quick Appointment</button>
</div>
</form>
<p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">For immediate assistance, please call us at <a class="font-medium text-primary hover:underline" href="tel:555-123-4567">(555) 123-4567</a>.</p>
</div>
</div>
</main>
<footer class="bg-white dark:bg-background-dark mt-16 border-t border-gray-200 dark:border-gray-800">
<div class="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
<p>© 2023 PetCare Clinic. All Rights Reserved.</p>
</div>
</footer>
</div>
</body></html>