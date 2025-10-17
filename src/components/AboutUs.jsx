import React from 'react'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Hero Section */}
          <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/assets/images/about_hero.webp")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-8">
              <h1 className="text-5xl font-black text-white">Our Community-Focused Team</h1>
            </div>
</div>

          {/* Meet Our Vets Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">Meet Our Vets</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <img alt="Dr. Amelia Harper" className="mb-4 size-40 rounded-full object-cover ring-4 ring-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPSyrfx9ApXo1mvHh1n0GUeCWGh4d4Yb1UvXNajxemM3k1xqxmSBZZC6Hvjie5rBZmsO_KygrYhSFWwvJHnlfxwz_v2a5i2oYfp8WXmg0gEMuvO6V09rDvrQYBPvdlMgQEpFxW6kSzoSRd8aiL7bN6xkVL4JdCglncuTThfJgVfgm3kOs3p5cYf5UCkUpSnG2EDR-JQgvPbetmEgoYPZL1CKVqRta9m-7-5XipLtTdrjWQH6K0-goRQMSes44Rtq128nsXfpA5-8"/>
                <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. Amelia Harper</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Born and raised in this community, Dr. Harper is passionate about feline health and often volunteers at local cat adoption events.</p>
</div>
              <div className="flex flex-col items-center text-center">
                <img alt="Dr. Ethan Carter" className="mb-4 size-40 rounded-full object-cover ring-4 ring-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcwMTLwVRbWLYO_7Tym9gyzwEZtjBPtjcVCBk5CZck2LgRxgEDrMM0mND6DQTbO0bzuertM-qi6o9jWH9I6ugNLuLjV3tglGiak0BqKJv4gwtEUU5R7g9ZdYreCIf4ABWhO1mtQ3lO9xj5NP2rW6SqMEPNafWPo8iFumu1KwDd3y-e1yZ85pa4svBgmEEgZsCUt7CnmRl8Lq-urjDXAHbC3DVvE7mkc8GZz9X3iO1QmVPkQMWwYuIVeVd0To6jKYNuBC40q4tBR0"/>
                <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. Ethan Carter</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">A lifelong dog owner and resident, Dr. Carter specializes in canine surgery and leads our annual 'Paws in the Park' charity walk.</p>
</div>
              <div className="flex flex-col items-center text-center">
                <img alt="Dr. Olivia Bennett" className="mb-4 size-40 rounded-full object-cover ring-4 ring-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoIQ6PF56WVwFf_8RGnIg6P4ofsem2f02d2OH3ZeeeSa40SnQnyhhbEDDcy7a3KWt7Srr-u-OKYIF1hZIut6dbZpZmqLPMQoalS2RuPF27Hm1W3cCxD1w9IVoUJiwHk4czv7u6dXstkTk-EZJJR4Uz8Z0GcfKW84KW5OUXSib9Xo3rRbItKX0e3HsmrEOq0XKnTptd2ty2t-18qoTwNV4cLOuGvOFjDlJTgEkVDQz6bZvLxKWa8W-xhQHuAHY9Lj0eb6a5IC67T0"/>
                <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. Olivia Bennett</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Dr. Bennett is an active member of the local wildlife rescue, focusing on exotic animal care and rehabilitation for our neighborhood's unique fauna.</p>
</div>
              <div className="flex flex-col items-center text-center">
                <img alt="Dr. Noah Thompson" className="mb-4 size-40 rounded-full object-cover ring-4 ring-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqyyNGyyQdBRnX6KGRKxxR1NfC2Bwbs_8KxR6VNRLOrOxjQU8xyZE1i-gsQm_vxA8c1UDktyRpTLFgqFz5cJ1w3LrSjCpVLoMTcF2PeZbm3gQ38brgnTwtXzJUPtlphTy70cxRGgQa0JH7EXa-xX9RiUlp44pkSaBsveqFuB2nqbSNzVbNPqyR5xG0aZnm-SW9KxPi5NLyWSxYxA1qaTsQUh87_ZrUj-ew3O_fxPQlCANgZUcqal84H03zQRcw7LK_WQMDt3Dymjk"/>
                <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. Noah Thompson</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Having grown up just a few blocks from the clinic, Dr. Thompson is our general practice vet, committed to providing accessible and friendly care to all neighborhood pets.</p>
</div>
</div>
          </section>

          {/* Our Mission Section */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">Our Mission</h2>
            <p className="text-base leading-relaxed text-foreground-muted-light dark:text-foreground-muted-dark">
              At PetCare Clinic, our mission is to provide exceptional veterinary care with compassion and integrity. We are dedicated to the health and well-being of your pets,
              offering a wide range of services from routine check-ups to advanced treatments. Our team of experienced professionals is committed to creating a welcoming and
              supportive environment for both pets and their owners. We believe in building lasting relationships with our clients, based on trust and mutual respect. Your pet's
              health is our top priority, and we strive to deliver the highest standard of care in every aspect of our practice.
            </p>
</section>

          {/* Our Community Initiatives Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">Our Community Initiatives</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Local Pet Fair" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDAjP6d2RgRpK1d6z5TSJNvs0-0vYjNUtSZrXEOYwaNf8kjgr5TNV2n_O-Zs4UrhQzXtLbKDDYaltO5nyes51p92YqSXk3cM7E5v7On5WlQZCuHfk9IlcTieg2AamGNFqCLyJWu5aGzwx_ZA5mgDmnl007AitwDcEkmCRVRnxbvcBaSiGFOmv1bVe3mLagiPnGwyUR3Ubyvtfo_Y4XgHmwiJcSpzEKubNtRtQ9tR8_NTv3FaUVSjJ-XlIrHrm0_7L-i3o_q_86528"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">Annual Pet Fair & Health Checks</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  Every summer, we host a free pet fair offering complimentary health screenings, microchipping, and educational workshops for local pet owners.
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">See event photos</a>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Shelter Partnership" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFYseoWMO7WR7-zNkwnml_x-daL7xVbrZQhDKUTqcDpY5lacfv0rARihzDSQheiqCnLasMs7wES5FaDg5rXBgGNBZZr2WwFhr3leleV2CSLZoHBJunQJ9P5_bkFvcggg4XZzRju55pQnVOln6jDqp9zFVU73y3csDrKFDWIRAGYZsz_towtwTNP7UD52k_0TMDfvMlXwhsrZTDJOwmakDdzY4X5hkTGxBVceSr00m76bCsOuLteFvVPhe7N8cYtd_Ss7AhPvzMWTQ"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">Partnerships with Local Shelters</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  We proudly partner with "Happy Tails Shelter" and "Paws & Claws Rescue," providing discounted veterinary services and supporting adoption drives.
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">Learn about our partners</a>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <img alt="Community Volunteering" className="h-48 w-full rounded-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFaHJUcbCmEID2KyIGkgP7vjd9GHMQnWNZRnAPBpFiAVrTJkisgHPkHJ8vrdSz9CWWwY6YYbUj8lnze9CW9pjSd__zv-9q7mLIeYZ6oQ_Y8FRmvvV4M7HmA7ZCb_GtH2q8y42FD_KxgJGbgA3o83YESGwIu7f-28ztnykliJWKkqWRQjZVUdyB0_pOeqWv5zO3FyyfZ_2ICpTIzuroX1daUfeY9dXpO-I7WmteVcN1kytdWIaY5tzpnpsyVv9NdvXQlPfBnnbYgUQ"/>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">Volunteer & Education Programs</h3>
                <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  Join us for community clean-up days, pet safety workshops, or assist at our local animal welfare events. Your help makes a difference!
                </p>
                <a className="text-primary hover:underline text-sm font-medium" href="#">Volunteer with us</a>
</div>
</div>
</section>

          {/* Client Testimonials Section */}
<section>
            <h2 className="mb-6 text-3xl font-bold text-foreground-light dark:text-foreground-dark text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Sophia Clark" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP8z1u9qomUFwxGwE81cPDZJzjQofTgL9-NQyCWs9U0UrrqM8fR5KbpkrJglV29ZZJIPfuRIysbnZZXFkm4eStnyy61HBdbBoI5MSGxI-NpOs-b9RzvPH_gSj3TpNFwQ2sPUpk2q1BIVS92KtgHd8k437LsVRRWOiomEn0OnljPT6ZjQ9YtmmGaB16FfWRjR9gyPe36SOu1j28qfQuJepXoiPUPvjNVLEI-ooOyT3ZHOGMTsGbJKAa9QKkNs85sxK3lbE596nLdk"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">Sophia Clark</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">2 months ago</p>
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
                  "I've been bringing my cat, Whiskers, to PetCare Clinic for years, and I've always been impressed with the level of care and attention they provide. Dr. Harper is incredibly knowledgeable and compassionate, and the entire staff is friendly and helpful. I highly recommend them!"
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Liam Evans" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKlhk8foqzsiBH_RoAtnIVm9HMv7KFjpl2lYSZC3LE4-iCSHiNq5aY-LHJgc-Ll65cagOGSdqpuZvFAuWSpsqGCVTOChu-aN8Y71lKqjS7_kJl_KAMDM-C52ZVbVclT8agFqYF0poK9uIzbozLGNnPO16GKYTPews_XVa-yD0ZDhHow0-ueD-S8wr2EB-EK5mkxPwmEZBPhnl1MP_GqD_GgBXUZ41iE9Dm_s4bLCckDVSeYFlfjQRk3q3uFaQZSjbaxv2Gb06_Xew"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">Liam Evans</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">3 months ago</p>
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
                  "My dog, Buddy, had to have surgery recently, and I was so nervous. Dr. Carter and the team at PetCare Clinic were amazing. They kept me informed every step of the way, and Buddy recovered quickly. I'm so grateful for their expertise and care."
                </p>
</div>
              <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
                <div className="flex items-center gap-4">
                  <img alt="Isabella Green" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTxHkP2S43A598m7q-AuHqrSTVGoO_LjQgCBTwzKCOSXFuMngeP302D2hpVz3rEuy8ighek9BPQ2x6HS-OWMay0PlLOqmbmJ4mJxJBB70bv-yxlRSnE66cgnvUhmi5CdMb02X5KeOLAtTsc5z7rHYWMafzmE7ddJFJL65U_5UeGVeAKfCuD4rLfe71OjHzQA8a6nk1a_VjR2gIytUxJhqrVApxdIE9EQiqcoNUjrNFt5bVbTDHF6PlUkK3xYQIdljhkD8M73tkvc"/>
                  <div>
                    <p className="font-semibold text-foreground-light dark:text-foreground-dark">Isabella Green</p>
                    <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">4 months ago</p>
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
                  "Dr. Bennett is the only vet I trust with my exotic pets. She's incredibly knowledgeable about their unique needs and always provides excellent care. The clinic is clean, well-equipped, and the staff is always welcoming. I wouldn't take my pets anywhere else."
                </p>
</div>
</div>
</section>
</div>
</div>
</div>
  )
}