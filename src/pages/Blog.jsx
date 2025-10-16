import React, { useState, useEffect } from 'react'

export default function Blog() {
  const [modal, setModal] = useState(null) // { title, body, image }
  const openModal = (title, body, image) => setModal({ title, body, image })
  const closeModal = () => setModal(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow || ''
    }
    return () => {
      document.body.style.overflow = previousOverflow || ''
    }
  }, [modal])

  return (
    <div className="py-12 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Blog</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground-muted-light dark:text-foreground-muted-dark">
            Stay informed with the latest in pet health and wellness. Expert advice, heartwarming stories, and practical tips.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-foreground-muted-light dark:text-foreground-muted-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input type="search" placeholder="Search articles..."
              className="block w-full pl-10 pr-4 py-3 rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground-light dark:text-foreground-dark placeholder-foreground-muted-light dark:placeholder-foreground-muted-dark" />
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-foreground-dark">All</button>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Health</button>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Nutrition</button>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Training</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBluPwezK9LEcw5qc3qripns3t7Fi-u8tERqoLDXA2P8n98VkGDP7Qlm2PEAG5YttW6WZkxjXowoiUR7fNRwHEKw33Ex7A4pf3ulq-G1aXDtENf5mEZuAJdxttfaoSwralaHgPXGEMLO-ak8pIFtB9dd4a3BECSQ7lOCcGvi87k4dyQLbNjm1Trz9gDLV0b1r-oxc6etBS71kmcqPOJkUGoYqeqblawOraYhggSvv5qhUQGsSzDAuMOCi_S_MGN3Ngh0OqLRaXpMqA")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Understanding Your Pet's Nutritional Needs</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Learn how to choose the right food for your pet's age and breed.</p>
              <button type="button" onClick={() => openModal("Understanding Your Pet's Nutritional Needs", "Long-form content about choosing the right food for age, breed, and health conditions. Includes macro/micro nutrients, feeding schedules, and vet tips.", "https://lh3.googleusercontent.com/aida-public/AB6AXuBluPwezK9LEcw5qc3qripns3t7Fi-u8tERqoLDXA2P8n98VkGDP7Qlm2PEAG5YttW6WZkxjXowoiUR7fNRwHEKw33Ex7A4pf3ulq-G1aXDtENf5mEZuAJdxttfaoSwralaHgPXGEMLO-ak8pIFtB9dd4a3BECSQ7lOCcGvi87k4dyQLbNjm1Trz9gDLV0b1r-oxc6etBS71kmcqPOJkUGoYqeqblawOraYhggSvv5qhUQGsSzDAuMOCi_S_MGN3Ngh0OqLRaXpMqA")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Common Pet Health Myths Debunked</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Separate fact from fiction when it comes to your pet's health.</p>
              <button type="button" onClick={() => openModal("Common Pet Health Myths Debunked", "Deep dive into common myths: grain-free diets, vaccine misconceptions, and what science actually says.", "https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">The Importance of Regular Check-ups</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Discover why regular veterinary visits are crucial for your pet's well-being.</p>
              <button type="button" onClick={() => openModal("The Importance of Regular Check-ups", "Explaining preventive care, early detection, baseline exams, and cost-saving benefits over time.", "https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSBn5xaPU9_uiz879cPogrWQDECwL06lQliux-BxN1Fgb0cs3gWzILiai41d9pAwRqyCRh2O7VR3aiijtkcj4hA1cHQ9Ve5-OVUs1K_WLaEM4kPc_jlA870ypefVXBpnacYh6N1PL0CvD-mrhP31i3c3dg1xPlLme_w826htULvRji7tIaCHUqd5li_eJNx8VVbffYmYWI9_iqw4y2UhUUpsjXcYuOabMKIWEW_aZ-XUHcCCBDac3bdhDQmShu1n4YEHUMRYs-IUY")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Training Tips for a Well-Behaved Pet</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Effective techniques to train your pet and strengthen your bond.</p>
              <button type="button" onClick={() => openModal("Training Tips for a Well-Behaved Pet", "Practical routines, positive reinforcement, consistency, and environment setup for training success.", "https://lh3.googleusercontent.com/aida-public/AB6AXuBSBn5xaPU9_uiz879cPogrWQDECwL06lQliux-BxN1Fgb0cs3gWzILiai41d9pAwRqyCRh2O7VR3aiijtkcj4hA1cHQ9Ve5-OVUs1K_WLaEM4kPc_jlA870ypefVXBpnacYh6N1PL0CvD-mrhP31i3c3dg1xPlLme_w826htULvRji7tIaCHUqd5li_eJNx8VVbffYmYWI9_iqw4y2UhUUpsjXcYuOabMKIWEW_aZ-XUHcCCBDac3bdhDQmShu1n4YEHUMRYs-IUY")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">First Aid for Your Pet</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Essential tips for handling common pet emergencies before you reach the vet.</p>
              <button type="button" onClick={() => openModal("First Aid for Your Pet", "Key first-aid steps, when to rush to vet, and assembling a pet emergency kit.", "https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Keeping Your Senior Pet Healthy</h3>
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">Adjusting care for your aging companion to ensure their golden years are happy.</p>
              <button type="button" onClick={() => openModal("Keeping Your Senior Pet Healthy", "Senior care adjustments: mobility, diet, regular screenings, and home comfort tips.", "https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")} className="font-bold text-primary hover:underline self-start">Read More →</button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="relative z-10 w-full max-w-3xl mx-4 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl shadow-xl overflow-hidden max-h-[85vh]">
              {modal.image && (
                <div className="w-full bg-background-light dark:bg-background-dark">
                  <img src={modal.image} alt="Article cover" className="w-full max-h-[40vh] object-contain" />
                </div>
              )}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-12rem)]">
                <h3 className="text-2xl font-bold mb-3">{modal.title}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed whitespace-pre-line">{modal.body}</p>
                <div className="mt-6 flex justify-end">
                  <button onClick={closeModal} className="px-4 py-2 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/90">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}