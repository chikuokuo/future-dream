<template>
    <section class="explore-section">
        <div class="container">
            <h2 class="section-title">{{ $t('exploreItaly.title') }}</h2>
            <p class="section-intro">{{ $t('exploreItaly.intro1') }}</p>
            <p class="section-intro">{{ $t('exploreItaly.intro2') }}</p>

            <div class="main-content">
                <div class="features-column">
                    <div class="feature-item">
                        <div class="feature-icon">🚄</div>
                        <div class="feature-text">
                            <h3>{{ $t('exploreItaly.features.ice.title') }}</h3>
                            <p>{{ $t('exploreItaly.features.ice.description') }}</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🏞️</div>
                        <div class="feature-text">
                            <h3>{{ $t('exploreItaly.features.scenic.title') }}</h3>
                            <p>{{ $t('exploreItaly.features.scenic.description') }}</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🎟️</div>
                        <div class="feature-text">
                            <h3>{{ $t('exploreItaly.features.combo.title') }}</h3>
                            <p>{{ $t('exploreItaly.features.combo.description') }}</p>
                        </div>
                    </div>
                </div>

                <div class="visual-column">
                    <img src="@/assets/images/ItalyRail.png" alt="Map of Italian Rail network" class="rail-map-image">
                </div>
            </div>

            <div class="cta-container">
                <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/future-dream-travel.apk"
                    class="cta-button" download="FutureDream-App.apk"
                    @click="() => trackButtonClick('ctaButton', { download_type: 'apk', location: 'explore_italy_section', current_language: locale })">
                    <span class="btn-icon">⬇️</span>
                    {{ $t('exploreItaly.cta') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { trackButtonClick } from '@/utils/analytics'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.explore-section {
    padding: 5rem 0;
    background-color: var(--bg-paper);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.section-intro {
    font-size: 1.1rem;
    text-align: center;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto 3rem auto;
    line-height: 1.6;
}

.main-content {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.features-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--md-primary);
    margin-top: 5px;
}

.feature-text h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
}

.feature-text p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.visual-column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rail-map-image {
    width: 100%;
    max-width: 450px;
    border-radius: 16px;
    box-shadow: 0 8px 25px var(--color-shadow-light);
    transition: transform 0.3s ease;
}

.rail-map-image:hover {
    transform: scale(1.03);
}

.visual-placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    background-color: var(--bg-default);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-disabled);
    border: 2px dashed var(--border-medium);
}

.map-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.cta-container {
    text-align: center;
    margin-top: 4rem;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background-color: var(--md-primary);
    color: var(--md-on-primary);
    border: none;
    padding: 1rem 3rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px var(--color-shadow-medium);
    text-decoration: none;
}

.cta-button:link,
.cta-button:visited {
    color: var(--md-on-primary);
    text-decoration: none;
}

.cta-button:hover {
    background-color: var(--color-primary-600);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--color-shadow-dark);
}

/* Responsive */
@media (max-width: 992px) {
    .main-content {
        flex-direction: column-reverse;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .container {
        padding: 0 1rem;
    }
}
</style>
