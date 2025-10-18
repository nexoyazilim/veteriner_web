import React from 'react'
import { useI18n } from '../i18n.jsx'
import aboutHeroImage from '/assets/images/hero/about_hero.webp'

export default function AboutUs() {
  const { t } = useI18n()
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Hero Section */}
          <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${aboutHeroImage})`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-8">
              <h1 className="text-5xl font-black text-white">{t('about_title')}</h1>
            </div>
</div>

          {/* Meet Our Vets Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">{t('about_meet_vets')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. Amelia Harper" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPSyrfx9ApXo1mvHh1n0GUeCWGh4d4Yb1UvXNajxemM3k1xqxmSBZZC6Hvjie5rBZmsO_KygrYhSFWwvJHnlfxwz_v2a5i2oYfp8WXmg0gEMuvO6V09rDvrQYBPvdlMgQEpFxW6kSzoSRd8aiL7bN6xkVL4JdCglncuTThfJgVfgm3kOs3p5cYf5UCkUpSnG2EDR-JQgvPbetmEgoYPZL1CKVqRta9m-7-5XipLtTdrjWQH6K0-goRQMSes44Rtq128nsXfpA5-8"/>
                </div>
                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">{t('about_vet1_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_vet1_desc')}</p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. Ethan Carter" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcwMTLwVRbWLYO_7Tym9gyzwEZtjBPtjcVCBk5CZck2LgRxgEDrMM0mND6DQTbO0bzuertM-qi6o9jWH9I6ugNLuLjV3tglGiak0BqKJv4gwtEUU5R7g9ZdYreCIf4ABWhO1mtQ3lO9xj5NP2rW6SqMEPNafWPo8iFumu1KwDd3y-e1yZ85pa4svBgmEEgZsCUt7CnmRl8Lq-urjDXAHbC3DVvE7mkc8GZz9X3iO1QmVPkQMWwYuIVeVd0To6jKYNuBC40q4tBR0"/>
                </div>
                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">{t('about_vet2_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_vet2_desc')}</p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. Olivia Bennett" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoIQ6PF56WVwFf_8RGnIg6P4ofsem2f02d2OH3ZeeeSa40SnQnyhhbEDDcy7a3KWt7Srr-u-OKYIF1hZIut6dbZpZmqLPMQoalS2RuPF27Hm1W3cCxD1w9IVoUJiwHk4czv7u6dXstkTk-EZJJR4Uz8Z0GcfKW84KW5OUXSib9Xo3rRbItKX0e3HsmrEOq0XKnTptd2ty2t-18qoTwNV4cLOuGvOFjDlJTgEkVDQz6bZvLxKWa8W-xhQHuAHY9Lj0eb6a5IC67T0"/>
</div>
                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">{t('about_vet3_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_vet3_desc')}</p>
</div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. Noah Thompson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqyyNGyyQdBRnX6KGRKxxR1NfC2Bwbs_8KxR6VNRLOrOxjQU8xyZE1i-gsQm_vxA8c1UDktyRpTLFgqFz5cJ1w3LrSjCpVLoMTcF2PeZbm3gQ38brgnTwtXzJUPtlphTy70cxRGgQa0JH7EXa-xX9RiUlp44pkSaBsveqFuB2nqbSNzVbNPqyR5xG0aZnm-SW9KxPi5NLyWSxYxA1qaTsQUh87_ZrUj-ew3O_fxPQlCANgZUcqal84H03zQRcw7LK_WQMDt3Dymjk"/>
</div>
                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">{t('about_vet4_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_vet4_desc')}</p>
</div>
</div>
          </section>

          {/* Our Mission Section */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">{t('about_mission_title')}</h2>
            <p className="text-base leading-relaxed text-foreground-muted-light dark:text-foreground-muted-dark">
              {t('about_mission_content')}
            </p>
</section>

          {/* Our Community Initiatives Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">{t('about_community_title')}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Local Pet Fair" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDAjP6d2RgRpK1d6z5TSJNvs0-0vYjNUtSZrXEOYwaNf8kjgr5TNV2n_O-Zs4UrhQzXtLbKDDYaltO5nyes51p92YqSXk3cM7E5v7On5WlQZCuHfk9IlcTieg2AamGNFqCLyJWu5aGzwx_ZA5mgDmnl007AitwDcEkmCRVRnxbvcBaSiGFOmv1bVe3mLagiPnGwyUR3Ubyvtfo_Y4XgHmwiJcSpzEKubNtRtQ9tR8_NTv3FaUVSjJ-XlIrHrm0_7L-i3o_q_86528"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">{t('about_initiative1_title')}</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_initiative1_desc')}
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">{t('about_initiative1_link')}</a>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Shelter Partnership" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFYseoWMO7WR7-zNkwnml_x-daL7xVbrZQhDKUTqcDpY5lacfv0rARihzDSQheiqCnLasMs7wES5FaDg5rXBgGNBZZr2WwFhr3leleV2CSLZoHBJunQJ9P5_bkFvcggg4XZzRju55pQnVOln6jDqp9zFVU73y3csDrKFDWIRAGYZsz_towtwTNP7UD52k_0TMDfvMlXwhsrZTDJOwmakDdzY4X5hkTGxBVceSr00m76bCsOuLteFvVPhe7N8cYtd_Ss7AhPvzMWTQ"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">{t('about_initiative2_title')}</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_initiative2_desc')}
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">{t('about_initiative2_link')}</a>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Community Volunteering" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFaHJUcbCmEID2KyIGkgP7vjd9GHMQnWNZRnAPBpFiAVrTJkisgHPkHJ8vrdSz9CWWwY6YYbUj8lnze9CW9pjSd__zv-9q7mLIeYZ6oQ_Y8FRmvvV4M7HmA7ZCb_GtH2q8y42FD_KxgJGbgA3o83YESGwIu7f-28ztnykliJWKkqWRQjZVUdyB0_pOeqWv5zO3FyyfZ_2ICpTIzuroX1daUfeY9dXpO-I7WmteVcN1kytdWIaY5tzpnpsyVv9NdvXQlPfBnnbYgUQ"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">{t('about_initiative3_title')}</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_initiative3_desc')}
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">{t('about_initiative3_link')}</a>
</div>
</div>
</section>

          {/* Client Testimonials Section */}
<section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">{t('about_testimonials_title')}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Sophia Clark" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP8z1u9qomUFwxGwE81cPDZJzjQofTgL9-NQyCWs9U0UrrqM8fR5KbpkrJglV29ZZJIPfuRIysbnZZXFkm4eStnyy61HBdbBoI5MSGxI-NpOs-b9RzvPH_gSj3TpNFwQ2sPUpk2q1BIVS92KtgHd8k437LsVRRWOiomEn0OnljPT6ZjQ9YtmmGaB16FfWRjR9gyPe36SOu1j28qfQuJepXoiPUPvjNVLEI-ooOyT3ZHOGMTsGbJKAa9QKkNs85sxK3lbE596nLdk"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">{t('about_testimonial1_name')}</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_testimonial1_time')}</p>
                  </div>
                </div>
                <div className="flex text-primary">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                </div>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_testimonial1_content')}
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Liam Evans" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKlhk8foqzsiBH_RoAtnIVm9HMv7KFjpl2lYSZC3LE4-iCSHiNq5aY-LHJgc-Ll65cagOGSdqpuZvFAuWSpsqGCVTOChu-aN8Y71lKqjS7_kJl_KAMDM-C52ZVbVclT8agFqYF0poK9uIzbozLGNnPO16GKYTPews_XVa-yD0ZDhHow0-ueD-S8wr2EB-EK5mkxPwmEZBPhnl1MP_GqD_GgBXUZ41iE9Dm_s4bLCckDVSeYFlfjQRk3q3uFaQZSjbaxv2Gb06_Xew"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">{t('about_testimonial2_name')}</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_testimonial2_time')}</p>
                  </div>
                </div>
                <div className="flex text-primary">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                </div>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_testimonial2_content')}
                </p>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Isabella Green" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTxHkP2S43A598m7q-AuHqrSTVGoO_LjQgCBTwzKCOSXFuMngeP302D2hpVz3rEuy8ighek9BPQ2x6HS-OWMay0PlLOqmbmJ4mJxJBB70bv-yxlRSnE66cgnvUhmi5CdMb02X5KeOLAtTsc5z7rHYWMafzmE7ddJFJL65U_5UeGVeAKfCuD4rLfe71OjHzQA8a6nk1a_VjR2gIytUxJhqrVApxdIE9EQiqcoNUjrNFt5bVbTDHF6PlUkK3xYQIdljhkD8M73tkvc"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">{t('about_testimonial3_name')}</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">{t('about_testimonial3_time')}</p>
</div>
</div>
                <div className="flex text-primary">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  {t('about_testimonial3_content')}
                </p>
</div>
</div>
</section>
</div>
</div>
</div>
  )
}