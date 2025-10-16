import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4">Book a Quick Appointment</h1>
          <p className="text-lg text-foreground-muted-light dark:text-foreground-muted-dark">Welcome back! Quickly schedule your pet's visit with pre-filled details.</p>
        </div>

        <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark" id="booking-form">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground-light dark:text-foreground-dark">Quick Appointment Dashboard</h2>
            <div className="relative">
              <select
                id="previous-pets"
                className="appearance-none bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer"
                defaultValue=""
              >
                <option value="">Returning User: Select Pet</option>
                <option value="fido">Fido (Golden Retriever)</option>
                <option value="mittens">Mittens (Siamese Cat)</option>
                <option value="buddy">Buddy (Beagle)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                arrow_drop_down
              </span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="pet-name">Pet's Name</label>
                <input
                  className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  id="pet-name"
                  placeholder="Fido"
                  type="text"
                  defaultValue="Fido"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="species">Species</label>
                <input
                  className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  id="species"
                  placeholder="Dog"
                  type="text"
                  defaultValue="Dog"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="breed">Breed</label>
              <input
                className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                id="breed"
                placeholder="Golden Retriever"
                type="text"
                defaultValue="Golden Retriever"
              />
            </div>

            <div className="border-t border-border-light dark:border-border-dark pt-6">
              <h2 className="text-lg font-semibold text-foreground-light dark:text-foreground-dark mb-4">Owner Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="owner-name">Your Name</label>
                  <input
                    className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    id="owner-name"
                    placeholder="Jane Doe"
                    type="text"
                    defaultValue="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="email">Email</label>
                  <input
                    className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    id="email"
                    placeholder="jane.doe@example.com"
                    type="email"
                    defaultValue="jane.doe@example.com"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  id="phone"
                  placeholder="(555) 123-4567"
                  type="tel"
                  defaultValue="(555) 123-4567"
                />
              </div>
            </div>

            <div className="border-t border-border-light dark:border-border-dark pt-6">
              <h2 className="text-lg font-semibold text-foreground-light dark:text-foreground-dark mb-4">Appointment Details</h2>
              <div>
                <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="service">Service</label>
                <select
                  className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  id="service"
                  defaultValue="Routine Check-up"
                >
                  <option value="">Select service</option>
                  <option value="Routine Check-up">Routine Check-up</option>
                  <option value="Vaccination">Vaccination</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-2">Preferred Date &amp; Time</label>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
                    <div className="font-medium text-gray-500 dark:text-gray-400">Sun</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Mon</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Tue</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Wed</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Thu</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Fri</div>
                    <div className="font-medium text-gray-500 dark:text-gray-400">Sat</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">29</button>
                    <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">30</button>
                    <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed">31</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">2</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">3</button>
                    <button className="w-full py-2 rounded-lg bg-primary text-foreground-dark font-bold shadow-md">4</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">5</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">6</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">7</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">8</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">10</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">11</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">12</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">13</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">14</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">15</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">16</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">17</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">18</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">19</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">20</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">21</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">22</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">23</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">24</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">25</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">26</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">27</button>
                    <button className="w-full py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">28</button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 mt-6">
                <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-2">Available Slots (Mon, Oct 4)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9:00 AM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">9:30 AM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">10:00 AM</button>
                  <button className="bg-primary text-foreground-dark font-bold rounded-lg px-4 py-2 text-center text-sm shadow-md">10:30 AM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hoverbg-gray-700 transition-colors">11:00 AM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">11:30 AM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1:00 PM</button>
                  <button className="bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">1:30 PM</button>
                </div>
                <button className="w-full mt-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <span className="material-symbols-outlined align-middle mr-2">event_available</span>
                  Next Available Slot: Tue, Oct 5, 9:00 AM
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1" htmlFor="notes">Additional Notes</label>
              <textarea
                className="w-full bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                id="notes"
                placeholder="Any specific concerns or requests?"
                rows={4}
              />
            </div>

            <div>
              <button className="w-full bg-primary text-foreground-dark font-bold py-4 px-6 rounded-lg hover:bg-primary/90 transition-all text-lg shadow-lg" type="submit">
                Confirm Quick Appointment
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-foreground-muted-light dark:text-foreground-muted-dark mt-8">
            For immediate assistance, please call us at <a className="font-medium text-primary hover:underline" href="tel:555-123-4567">(555) 123-4567</a>.
          </p>
        </div>
      </div>
    </div>
  )
}