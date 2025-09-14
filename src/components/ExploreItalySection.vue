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
                <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk"
                    class="cta-button" download="FutureDream-App.apk"
                    @click="() => trackButtonClick('ctaButton', { download_type: 'apk', location: 'explore_italy_section' })">
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

const { t } = useI18n()
</script>

<style scoped>
.explore-section {
    padding: 5rem 0;
    background-color: #ffffff;
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
    color: #1f2937;
}

.section-intro {
    font-size: 1.1rem;
    text-align: center;
    color: #6b7280;
    max-width: 800px;
    margin: 0 auto 3rem auto;
    line-height: 1.6;
}

.main-content {
    display: flex;
    gap: 3rem;
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
    color: #3b82f6;
    margin-top: 5px;
}

.feature-text h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 0.5rem 0;
}

.feature-text p {
    font-size: 1rem;
    color: #4b5563;
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
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.rail-map-image:hover {
    transform: scale(1.03);
}

.visual-placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    background-color: #f3f4f6;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9ca3af;
    border: 2px dashed #d1d5db;
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
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 1rem 3rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
    text-decoration: none;
}

.cta-button:link,
.cta-button:visited {
    color: white;
    text-decoration: none;
}

.cta-button:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
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
