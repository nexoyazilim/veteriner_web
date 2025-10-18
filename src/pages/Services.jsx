import React from 'react'
import { useI18n } from '../i18n.jsx'
import servicesHeroImage from '/assets/images/hero/services_hero.webp'

export default function Services() {
  const { t } = useI18n()
  return (
    <>
    {/* Hero Section (match AboutUs style) */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${servicesHeroImage})`}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="relative flex h-full flex-col justify-end p-8">
            <h1 className="text-5xl font-black text-white">{t('services_title')}</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-24 lg:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t('services_comprehensive_title')}</h2>
        <p className="mt-4 text-lg text-foreground-subtle-light dark:text-foreground-subtle-dark">
          {t('services_comprehensive_subtitle')}
        </p>
      </div>

      {/* Section 1 - Wellness Exams */}
      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group">
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
                <h3 className="text-3xl font-bold">{t('services_wellness_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_wellness_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_wellness_expect_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">event_note</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_wellness_scheduling')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">check_circle</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_wellness_comprehensive')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">monitor_heart</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_wellness_assessment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">assignment</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_wellness_plan')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_wellness_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_wellness_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_wellness_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_wellness_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Vaccinations */}
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group mt-8">
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
                <h3 className="text-3xl font-bold">{t('services_vaccination_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_vaccination_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_vaccination_journey_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">pets</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_vaccination_risk')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">health_and_safety</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_vaccination_plan')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">syringe</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_vaccination_administered')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">calendar_month</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_vaccination_reminder')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_vaccination_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_vaccination_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_vaccination_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_vaccination_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Dental Care */}
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group mt-8">
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
                <h3 className="text-3xl font-bold">{t('services_dental_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_dental_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_dental_process_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">search</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_dental_exam')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">cleaning</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_dental_cleaning')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">medication</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_dental_treatment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">home_health</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_dental_home_care')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_dental_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_dental_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_dental_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_dental_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Emergency Care */}
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group mt-8">
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
                <h3 className="text-3xl font-bold">{t('services_emergency_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_emergency_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_emergency_steps_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">call</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_emergency_call')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">local_hospital</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_emergency_assessment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">emergency</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_emergency_treatment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">restore</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_emergency_support')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_emergency_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_emergency_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_emergency_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_emergency_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 - Nutritional Counseling */}
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group mt-8">
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
                <h3 className="text-3xl font-bold">{t('services_nutrition_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_nutrition_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_nutrition_approach_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">restaurant</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_nutrition_assessment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">dry_cleaning</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_nutrition_plan')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">monitoring</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_nutrition_monitoring')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">support</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_nutrition_support')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_nutrition_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_nutrition_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_nutrition_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_nutrition_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 - Behavioral Therapy */}
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-background-dark/50 rounded-xl shadow-xl border-t border-border-light dark:border-border-dark group mt-8">
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
                <h3 className="text-3xl font-bold">{t('services_behavioral_title')}</h3>
              </div>
              <p className="mt-4 text-base text-foreground-subtle-light dark:text-foreground-subtle-dark leading-relaxed">
                {t('services_behavioral_desc')}
              </p>
              <h4 className="text-xl font-bold mt-6">{t('services_behavioral_process_title')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">quiz</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_behavioral_assessment')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">psychology</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_behavioral_plan')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">pets</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_behavioral_training')}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">home_repair_service</span>
                  <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark">{t('services_behavioral_integration')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl">
                <h4 className="text-xl font-bold mb-4">{t('services_faq_title')}</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_behavioral_faq1_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_behavioral_faq1_a')}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground-light dark:text-foreground-dark">{t('services_behavioral_faq2_q')}</h5>
                    <p className="text-sm text-foreground-subtle-light dark:text-foreground-subtle-dark mt-1">{t('services_behavioral_faq2_a')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}