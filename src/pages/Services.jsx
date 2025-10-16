import React from 'react'

export default function Services() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-24 lg:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Compassionate Care for Your Beloved Pet</h2>
        <p className="mt-4 text-lg text-foreground-subtle-light dark:text-foreground-subtle-dark">
          We understand your concerns and are here to provide clear, empathetic, and comprehensive care, treating every pet as if they were our own.
        </p>
      </div>

      {/* Section 1 - Wellness Exams */}
      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBskpbyKhNdEFZsZpJow2pmgKFvbDTNHldQv5TSM9BF_cts-3MX7RmS6RbrWlj8sWmUXy6mH6AF5BOj92k9pg2a67oK5tmwTuq_kF5aAfnauDLeWcaMePiVTtGEJ6mpsWdP8xZJRpeaiwycY0mJe1LBx3zvzHqzkEtWl5IbnzqBqvvaQkd6UjfmLLWKzmj-5sdE_aQMuFau2cBEAE7_s9arimeZpf760QcwOu3Z1EO7nKI0E45Pa4Wavhvf1aEnCAoB2vqZtRigTs8")' }}
              />
            </div>
            <div className="flex flex-col flex-grow w-full md:w-1/2">
              <div className="flex items-center gap-4">
                <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <h3 className="text-3xl font-bold">Wellness Exams: Ensuring a Happy, Healthy Life</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                Regular check-ups are key to your pet's long-term well-being. Our thorough wellness exams focus on proactive health management, early disease detection, and personalized care plans tailored to your pet's unique needs.
              </p>
              <h4 className="text-xl font-bold mt-6">What to Expect During a Wellness Exam:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">event_note</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Scheduling</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">check_circle</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Comprehensive Check</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">monitor_heart</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Health Assessment</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">assignment</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Personalized Plan</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">How often should my pet have a wellness exam?</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">For most adult pets, an annual wellness exam is recommended. Puppies, kittens, and senior pets may require more frequent visits.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">What should I bring to the appointment?</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Please bring any relevant medical records, a list of medications, and be prepared to discuss your pet's diet and behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Vaccinations */}
      <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz8z2Tyl3Lh9jgPHHE1nuDTG29MeOWDcq5XleTJaCOtd_bbyobsjek9SOgGBJeOmwbZLfpMUr1iFAQilh6IlxXlaqgroO9GQ73903Uw4vE1BrsPFTaqrj1v7I3iCOLY_y4kFHQKTk4CL4cdd5UkX_VSD_XOkSbVx3d-dWhTIxVLmdJCQWPyx-dWCwADy0srOaXfF98owp3ZnY6WV7_FEjtslnTtrbVgU-qyzAjf0J6Pn6KpETBP1elPCBXeF_hu9VxsCQt6JUsp1c")' }}
            />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-2xl">vaccines</span>
              </div>
              <h3 className="text-3xl font-bold">Vaccinations: Building Strong Immunity Together</h3>
            </div>
            <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
              Vaccinations are vital for protecting your pet from serious, preventable diseases. We assess your pet's lifestyle and risk factors to create a tailored vaccination schedule, ensuring optimal protection and peace of mind.
            </p>
            <h4 className="text-xl font-bold mt-6">Understanding Your Pet's Vaccination Journey:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">pets</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Risk Assessment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">health_and_safety</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Tailored Plan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">syringe</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Vaccine Administered</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">calendar_month</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Reminder for Boosters</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
              <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">Are vaccines safe for all pets?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Vaccines are generally safe, but we conduct a thorough health check beforehand to ensure your pet is a good candidate. We'll discuss any potential concerns.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">What are core vaccines?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Core vaccines are recommended for all pets, regardless of lifestyle, due to the prevalence and severity of the diseases they protect against (e.g., Rabies, Distemper).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Dental Care */}
      <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")' }}
            />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-2xl">dentistry</span>
              </div>
              <h3 className="text-3xl font-bold">Dental Care: For a Brighter Smile and Healthier Pet</h3>
            </div>
            <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
              Good oral hygiene is crucial for your pet's overall health, preventing issues like gum disease and infections. Our dental care services include comprehensive exams, professional cleanings, and guidance on maintaining your pet's oral health at home.
            </p>
            <h4 className="text-xl font-bold mt-6">Our Dental Care Process:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">search</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Oral Exam</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">cleaning</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Professional Cleaning</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">medication</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Treatment (if needed)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">home_health</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Home Care Guidance</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
              <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">How can I tell if my pet has dental problems?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Signs include bad breath, visible tartar, red or bleeding gums, difficulty eating, or pawing at the mouth. Regular check-ups help us catch issues early.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">Can I brush my pet's teeth at home?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Yes, daily brushing with pet-specific toothpaste is highly effective. We can demonstrate the proper technique during your visit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Emergency Care */}
      <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQWkuv9Fiw288jQbNtYiLOv9BbPyDgy9V4gvReAzskRlbXMWS4XtPdZ2_7Xqdnmn1RDQbaVath345pZJ_uWKbHcHAcZUw6BB4Ji-KPXqzqxIvB4Ks5v4tkePjqwLpiP3q1jqcFDzvowxsux1iHyEACN2Pd18iQNRd4anWKsnr1sLXiMopudtuKmXNAXNzuLJpJYJYGQ4wFHf9uu4QSAjekh4jNOcts5D5PcloO_qwDHjnBHlfzAHzrCqr5wLRLM87FeFfUQC5q6_I")' }}
            />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-2xl">emergency</span>
              </div>
              <h3 className="text-3xl font-bold">Emergency Care: Ready When You Need Us Most</h3>
            </div>
            <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
              In urgent situations, every moment counts. Our team is prepared to provide immediate and critical care for your pet, with advanced monitoring and post-emergency support to guide you through challenging times.
            </p>
            <h4 className="text-xl font-bold mt-6">Our Emergency Response Steps:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">call</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Call Us First</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">local_hospital</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Immediate Assessment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">emergency</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Critical Treatment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">restore</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Ongoing Support</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
              <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">What constitutes a pet emergency?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Examples include severe bleeding, difficulty breathing, collapse, sudden lameness, ingestion of toxins, or significant trauma. When in doubt, call us immediately.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">What should I do before bringing my pet in?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">If possible, call us while en route to give us a heads-up and allow us to prepare for your arrival. Remain calm to help keep your pet calm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 - Nutritional Counseling */}
      <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCht5EMQLDcsxaPqJTy_nLKtM2eZtAB_0nEp6ty1DJrptDWr-QbCEKN_uxpZjHOv-Ze4BLwUTUYFxb56LjEIjxd60YyycZqczwoRXyw_si1XKwjtbJAvxPpGdEuq3ydMwYTNxul1BVMpKDo7fH0G4mWJn5VoxxrPRzNGyBISQL06TtBWYlC9H5PX5QAUsm1EtvwoDwSToCNdT1YrzSUkwTSB5w0W0V7oE4eDCsatHySHD_SoRvcwJy-ql6PFOT9BLtUPsz3XwRl0gA")' }}
            />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-2xl">nutrition</span>
              </div>
              <h3 className="text-3xl font-bold">Nutritional Counseling: Fueling Your Pet's Best Life</h3>
            </div>
            <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
              Proper nutrition is foundational to your pet's health and happiness. Our expert guidance provides customized diet plans, weight management programs, and advice for allergies or intolerances, ensuring your pet gets the right fuel.
            </p>
            <h4 className="text-xl font-bold mt-6">Our Nutritional Approach:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">restaurant</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Diet Assessment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">dry_cleaning</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Custom Plan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">monitoring</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Progress Monitoring</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">support</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Ongoing Support</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
              <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">How do I know if my pet is overweight?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">You should be able to easily feel your pet's ribs without pressing hard, and they should have a visible waist. We can provide a professional assessment during an exam.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">What about homemade diets?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">While homemade diets can be an option, they require careful planning to ensure complete nutrition. We can help you formulate a balanced recipe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 - Behavioral Therapy */}
      <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl h-64 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCBpLskc8GylBuWvxF4baZU_sls7q92EJTY0ov4aldRly4PSUVCFKlunwh-Oljrdp8VXCb46JJEdPpdA_2XGNuKpU3oo_m4H7bf8Ji9BU8Za4eacQE4Dun_uP5Du0a96wCOpdSuqzYXGMnG7Yrrquw_3hfwFKsdyg6SOj5CkUoevC3NJow3vzXvZvT692anWcv_0P8PCKx0F_tFlS9pOWNBRHKAsHtKmHzgu4fWn0NqxRNppi-u6pRSC0A0L_0cfg_9khMAt_Cmyk")' }}
            />
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-2xl">psychiatry</span>
              </div>
              <h3 className="text-3xl font-bold">Behavioral Therapy: Creating a Harmonious Home</h3>
            </div>
            <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
              Addressing behavioral issues can significantly improve your pet's quality of life and your bond with them. Our behavioral therapy services offer customized training plans, anxiety and aggression management, and enrichment strategies to foster a happy and balanced environment.
            </p>
            <h4 className="text-xl font-bold mt-6">Our Behavioral Support Process:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">quiz</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Behavior Assessment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">psychology</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Tailored Plan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">pets</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Training Sessions</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">home_repair_service</span>
                <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">Home Integration</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
              <h4 className="text-xl font-bold mb-4">Frequently Asked Questions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">Can all behavioral issues be resolved?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">Many behavioral issues can be significantly improved or resolved with consistent therapy and owner commitment. We aim for positive, lasting change.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">How long does behavioral therapy take?</h5>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">The duration varies depending on the issue's complexity and your pet's individual learning pace. We'll set realistic expectations during the initial consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <button className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-primary text-foreground-dark text-base font-bold hover:bg-primary/90 transition-colors">
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

