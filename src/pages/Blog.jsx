import React, { useState, useEffect } from 'react'
import { useI18n } from '../i18n.jsx'
import blogHeroImage from '/assets/images/hero/blog_hero.webp'

export default function Blog() {
  const { t } = useI18n()
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
    <>
      {/* Hero Section (match AboutUs/Services style) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${blogHeroImage})`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-8">
              <h1 className="text-5xl font-black text-white">{t('blog_title')}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('blog_title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground-muted-light dark:text-foreground-muted-dark">
            {t('blog_subtitle')}
          </p>
        </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-foreground-muted-light dark:text-foreground-muted-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
</svg>
</div>
            <input type="search" placeholder={t('blog_search_placeholder')}
              className="block w-full pl-10 pr-4 py-3 rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground-light dark:text-foreground-dark placeholder-foreground-muted-light dark:placeholder-foreground-muted-dark" />
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-foreground-dark">{t('blog_category_all')}</button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">{t('blog_category_health')}</button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">{t('blog_category_nutrition')}</button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">{t('blog_category_training')}</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBluPwezK9LEcw5qc3qripns3t7Fi-u8tERqoLDXA2P8n98VkGDP7Qlm2PEAG5YttW6WZkxjXowoiUR7fNRwHEKw33Ex7A4pf3ulq-G1aXDtENf5mEZuAJdxttfaoSwralaHgPXGEMLO-ak8pIFtB9dd4a3BECSQ7lOCcGvi87k4dyQLbNjm1Trz9gDLV0b1r-oxc6etBS71kmcqPOJkUGoYqeqblawOraYhggSvv5qhUQGsSzDAuMOCi_S_MGN3Ngh0OqLRaXpMqA")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article1_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article1_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article1_title'), t('blog_article1_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuBluPwezK9LEcw5qc3qripns3t7Fi-u8tERqoLDXA2P8n98VkGDP7Qlm2PEAG5YttW6WZkxjXowoiUR7fNRwHEKw33Ex7A4pf3ulq-G1aXDtENf5mEZuAJdxttfaoSwralaHgPXGEMLO-ak8pIFtB9dd4a3BECSQ7lOCcGvi87k4dyQLbNjm1Trz9gDLV0b1r-oxc6etBS71kmcqPOJkUGoYqeqblawOraYhggSvv5qhUQGsSzDAuMOCi_S_MGN3Ngh0OqLRaXpMqA")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article2_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article2_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article2_title'), t('blog_article2_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
              </div>
</div>

            {/* Card 3 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article3_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article3_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article3_title'), t('blog_article3_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 4 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSBn5xaPU9_uiz879cPogrWQDECwL06lQliux-BxN1Fgb0cs3gWzILiai41d9pAwRqyCRh2O7VR3aiijtkcj4hA1cHQ9Ve5-OVUs1K_WLaEM4kPc_jlA870ypefVXBpnacYh6N1PL0CvD-mrhP31i3c3dg1xPlLme_w826htULvRji7tIaCHUqd5li_eJNx8VVbffYmYWI9_iqw4y2UhUUpsjXcYuOabMKIWEW_aZ-XUHcCCBDac3bdhDQmShu1n4YEHUMRYs-IUY")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article4_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article4_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article4_title'), t('blog_article4_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuBSBn5xaPU9_uiz879cPogrWQDECwL06lQliux-BxN1Fgb0cs3gWzILiai41d9pAwRqyCRh2O7VR3aiijtkcj4hA1cHQ9Ve5-OVUs1K_WLaEM4kPc_jlA870ypefVXBpnacYh6N1PL0CvD-mrhP31i3c3dg1xPlLme_w826htULvRji7tIaCHUqd5li_eJNx8VVbffYmYWI9_iqw4y2UhUUpsjXcYuOabMKIWEW_aZ-XUHcCCBDac3bdhDQmShu1n4YEHUMRYs-IUY")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
              </div>
</div>

            {/* Card 5 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article5_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article5_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article5_title'), t('blog_article5_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 6 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article6_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article6_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article6_title'), t('blog_article6_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuAURlrr0gViYtaU0G0UPXMW9X8Ek6Uhkz3JJTeZNs-YmciKKzBEoUWoSra-W_-ZxKU2ukcefp1UVuTi5pf3XQtnfaL_p1zH0JQjscygt2FQ7mBfyZll1lvxtOmIDRA5FeIzNPcUD2zEcfkbJRYQ9qdOW7Dplg5e6fAjc0KvCnMSYChbK6KmiJP4TQTY0jBKTkgyFGisIaZC2njifsoRLzqc9bR0liAaCHb7mURzTCc7O7Yf-8NKPwYoXB3D5HLyDoxAO9nNe7_55pk")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 7 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article7_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article7_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article7_title'), t('blog_article7_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 8 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz8z2Tyl3Lh9jgPHHE1nuDTG29MeOWDcq5XleTJaCOtd_bbyobsjek9SOgGBJeOmwbZLfpMUr1iFAQilh6IlxXlaqgroO9GQ73903Uw4vE1BrsPFTaqrj1v7I3iCOLY_y4kFHQKTk4CL4cdd5UkX_VSD_XOkSbVx3d-dWhTIxVLmdJCQWPyx-dWCwADy0srOaXfF98owp3ZnY6WV7_FEjtslnTtrbVgU-qyzAjf0J6Pn6KpETBP1elPCBXeF_hu9VxsCQt6JUsp1c")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article8_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article8_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article8_title'), t('blog_article8_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuBz8z2Tyl3Lh9jgPHHE1nuDTG29MeOWDcq5XleTJaCOtd_bbyobsjek9SOgGBJeOmwbZLfpMUr1iFAQilh6IlxXlaqgroO9GQ73903Uw4vE1BrsPFTaqrj1v7I3iCOLY_y4kFHQKTk4CL4cdd5UkX_VSD_XOkSbVx3d-dWhTIxVLmdJCQWPyx-dWCwADy0srOaXfF98owp3ZnY6WV7_FEjtslnTtrbVgU-qyzAjf0J6Pn6KpETBP1elPCBXeF_hu9VxsCQt6JUsp1c")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 9 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article9_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article9_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article9_title'), t('blog_article9_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuAUpjuxuMby9IblWrbBNgHa_Q_QxOz9yqTgywy-blRVvKTihI3GInUPZlw_90ZgdBTvCnG7DGs3VMqI1Kt7St0Zydv-vdYL1PsvXLgnuRsYjHORbM7u1SoDkiU4awQA0-pTLKAUl2vsS8mX-wYQUVanPHS2or7LgU8T3AmtiJgw78qH2mtI40Nz4LlAS705mK1qFDIgrj5ce-72aFFqGFOAaEAvyfkcw_z_CG3cdlTGoUG4neXJTYemkyJtknQ1hRlQ5vuF9yKP4Sc")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 10 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCht5EMQLDcsxaPqJTy_nLKtM2eZtAB_0nEp6ty1DJrptDWr-QbCEKN_uxpZjHOv-Ze4BLwUTUYFxb56LjEIjxd60YyycZqczwoRXyw_si1XKwjtbJAvxPpGdEuq3ydMwYTNxul1BVMpKDo7fH0G4mWJn5VoxxrPRzNGyBISQL06TtBWYlC9H5PX5QAUsm1EtvwoDwSToCNdT1YrzSUkwTSB5w0W0V7oE4eDCsatHySHD_SoRvcwJy-ql6PFOT9BLtUPsz3XwRl0gA")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article10_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article10_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article10_title'), t('blog_article10_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuCht5EMQLDcsxaPqJTy_nLKtM2eZtAB_0nEp6ty1DJrptDWr-QbCEKN_uxpZjHOv-Ze4BLwUTUYFxb56LjEIjxd60YyycZqczwoRXyw_si1XKwjtbJAvxPpGdEuq3ydMwYTNxul1BVMpKDo7fH0G4mWJn5VoxxrPRzNGyBISQL06TtBWYlC9H5PX5QAUsm1EtvwoDwSToCNdT1YrzSUkwTSB5w0W0V7oE4eDCsatHySHD_SoRvcwJy-ql6PFOT9BLtUPsz3XwRl0gA")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 11 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQWkuv9Fiw288jQbNtYiLOv9BbPyDgy9V4gvReAzskRlbXMWS4XtPdZ2_7Xqdnmn1RDQbaVath345pZJ_uWKbHcHAcZUw6BB4Ji-KPXqzqxIvB4Ks5v4tkePjqwLpiP3q1jqcFDzvowxsux1iHyEACN2Pd18iQNRd4anWKsnr1sLXiMopudtuKmXNAXNzuLJpJYJYGQ4wFHf9uu4QSAjekh4jNOcts5D5PcloO_qwDHjnBHlfzAHzrCqr5wLRLM87FeFfUQC5q6_I")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article11_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article11_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article11_title'), t('blog_article11_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuDQWkuv9Fiw288jQbNtYiLOv9BbPyDgy9V4gvReAzskRlbXMWS4XtPdZ2_7Xqdnmn1RDQbaVath345pZJ_uWKbHcHAcZUw6BB4Ji-KPXqzqxIvB4Ks5v4tkePjqwLpiP3q1jqcFDzvowxsux1iHyEACN2Pd18iQNRd4anWKsnr1sLXiMopudtuKmXNAXNzuLJpJYJYGQ4wFHf9uu4QSAjekh4jNOcts5D5PcloO_qwDHjnBHlfzAHzrCqr5wLRLM87FeFfUQC5q6_I")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>

            {/* Card 12 */}
            <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")' }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{t('blog_article12_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-4 flex-grow">{t('blog_article12_desc')}</p>
                <button type="button" onClick={() => openModal(t('blog_article12_title'), t('blog_article12_content'), "https://lh3.googleusercontent.com/aida-public/AB6AXuDXAvkx2DIJvp1knhIGgsiMJg3Z0VUw40HtVFkce0fuJbRU0d4eCffgarWFlzqXGsLnxe9EnZNJ4Wi0VcdtNr59LKG9FXZzEzxT6UiFrLkmw0CizPvkpZ5v04qUHjkoum4svAqgsyKlGP9sxZc9IX4Yj4Zks3meKfqyxaS4QumKmwY7ohuBqJ4FTh1mcyfHEta4eUJ77SmiHi0tl9oGzqzO34OWpGhNmObIgBoIVcvCuRIa4BU_2CS1j2zlK_rvlMsTO2jvaGvPe3c")} className="font-bold text-primary hover:underline self-start">{t('blog_read_more')}</button>
</div>
</div>
</div>
</div>
</div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative z-10 w-full max-w-3xl mx-4 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl shadow-xl overflow-hidden max-h-[85vh]">
            {/* Top bar with title and close button */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border-light dark:border-border-dark">
              <h3 className="text-xl md:text-2xl font-bold truncate">{modal.title}</h3>
              <button aria-label="Close" onClick={closeModal} className="shrink-0 inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-primary/10 dark:hover:bg-primary/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
</div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-6rem)]">
              {modal.image && (
                <div className="w-full mb-4 bg-background-light dark:bg-background-dark">
                  <img src={modal.image} alt="Article cover" className="w-full max-h-[40vh] object-contain" />
</div>
              )}
              <p className="text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed whitespace-pre-line">
                {modal.body}
              </p>

              {/* Extra long content to enrich reading */}
              <div className="mt-6 space-y-4 text-foreground-muted-light dark:text-foreground-muted-dark">
                <h4 className="text-lg font-bold">{t('blog_extra_notes')}</h4>
                <p>
                  {t('blog_extra_content')}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {t('blog_extra_tips').map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
</ul>
                <p>
                  {t('blog_extra_final')}
                </p>
</div>

                <div className="mt-6 flex justify-end">
                  <button onClick={closeModal} className="px-4 py-2 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/90">{t('blog_close')}</button>
</div>
</div>
</div>
</div>
      )}
    </>
  )
}