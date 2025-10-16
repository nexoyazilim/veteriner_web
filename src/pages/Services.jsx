import React from 'react'

export default function Services() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-24 lg:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Data-Driven Services</h2>
        <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">
          Comprehensive, compassionate care for your beloved pets, with insights to empower your decisions. We treat
          every patient as if they were our own.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Wellness Exams</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Regular check-ups to keep your pet happy and healthy.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBskpbyKhNdEFZsZpJow2pmgKFvbDTNHldQv5TSM9BF_cts-3MX7RmS6RbrWlj8sWmUXy6mH6AF5BOj92k9pg2a67oK5tmwTuq_kF5aAfnauDLeWcaMePiVTtGEJ6mpsWdP8xZJRpeaiwycY0mJe1LBx3zvzHqzkEtWl5IbnzqBqvvaQkd6UjfmLLWKzmj-5sdE_aQMuFau2cBEAE7_s9arimeZpf760QcwOu3Z1EO7nKI0E45Pa4Wavhvf1aEnCAoB2vqZtRigTs8")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Early disease detection</li>
            <li>Personalized care plans</li>
            <li>Proactive health management</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Preventative Care Score: 85%</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">vaccines</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Vaccinations</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Protecting your pet from preventable diseases.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz8z2Tyl3Lh9jgPHHE1nuDTG29MeOWDcq5XleTJaCOtd_bbyobsjek9SOgGBJeOmwbZLfpMUr1iFAQilh6IlxXlaqgroO9GQ73903Uw4vE1BrsPFTaqrj1v7I3iCOLY_y4kFHQKTk4CL4cdd5UkX_VSD_XOkSbVx3d-dWhTIxVLmdJCQWPyx-dWCwADy0srOaXfF98owp3ZnY6WV7_FEjtslnTtrbVgU-qyzAjf0J6Pn6KpETBP1elPCBXeF_hu9VxsCQt6JUsp1c")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Core &amp; lifestyle vaccines</li>
            <li>Disease risk assessment</li>
            <li>Immunity tracking</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Protection Level: 92%</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">dentistry</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Dental Care</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Oral health assessments for a healthy smile.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Comprehensive dental exams</li>
            <li>Tartar build-up prevention</li>
            <li>Oral hygiene guidance</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Oral Health Score: 78%</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">emergency</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Emergency Care</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Immediate and critical care during urgent situations.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQWkuv9Fiw288jQbNtYiLOv9BbPyDgy9V4gvReAzskRlbXMWS4XtPdZ2_7Xqdnmn1RDQbaVath345pZJ_uWKbHcHAcZUw6BB4Ji-KPXqzqxIvB4Ks5v4tkePjqwLpiP3q1jqcFDzvowxsux1iHyEACN2Pd18iQNRd4anWKsnr1sLXiMopudtuKmXNAXNzuLJpJYJYGQ4wFHf9uu4QSAjekh4jNOcts5D5PcloO_qwDHjnBHlfzAHzrCqr5wLRLM87FeFfUQC5q6_I")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Rapid response team</li>
            <li>Critical care monitoring</li>
            <li>Post-emergency support</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Readiness Factor: High</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">nutrition</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Nutritional Counseling</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Expert guidance on the best diet for your pet's needs.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCht5EMQLDcsxaPqJTy_nLKtM2eZtAB_0nEp6ty1DJrptDWr-QbCEKN_uxpZjHOv-Ze4BLwUTUYFxb56LjEIjxd60YyycZqczwoRXyw_si1XKwjtbJAvxPpGdEuq3ydMwYTNxul1BVMpKDo7fH0G4mWJn5VoxxrPRzNGyBISQL06TtBWYlC9H5PX5QAUsm1EtvwoDwSToCNdT1YrzSUkwTSB5w0W0V7oE4eDCsatHySHD_SoRvcwJy-ql6PFOT9BLtUPsz3XwRl0gA")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Custom diet plans</li>
            <li>Weight management programs</li>
            <li>Allergy and intolerance advice</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Diet Suitability: 90%</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg border border-border-light dark:border-border-dark group">
          <div className="flex items-start gap-4">
            <div className="text-primary h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-2xl">psychiatry</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Behavioral Therapy</h3>
              <p className="mt-1 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Addressing behavioral issues for a harmonious home.</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCBpLskc8GylBuWvxF4baZU_sls7q92EJTY0ov4aldRly4PSUVCFKlunwh-Oljrdp8VXCb46JJEdPpdA_2XGNuKpU3oo_m4H7bf8Ji9BU8Za4eacQE4Dun_uP5Du0a96wCOpdSuqzYXGMnG7Yrrquw_3hfwFKsdyg6SOj5CkUoevC3NJow3vzXvZvT692anWcv_0P8PCKx0F_tFlS9pOWNBRHKAsHtKmHzgu4fWn0NqxRNppi-u6pRSC0A0L_0cfg_9khMAt_Cmyk")' }}></div>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-foreground-muted-light dark:text-foreground-muted-dark space-y-1">
            <li>Customized training plans</li>
            <li>Anxiety &amp; aggression management</li>
            <li>Enrichment strategies</li>
          </ul>
          <div className="mt-2">
            <p className="text-xs font-medium text-foreground-muted-light dark:text-foreground-muted-dark mb-1">Behavioral Harmony: 75%</p>
            <div className="w-full bg-progress-bg rounded-full h-2.5">
              <div className="bg-progress-fill h-2.5 rounded-full" style={{ width: '75%' }}></div>
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

