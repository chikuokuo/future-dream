<template>
    <section class="our-services-section">
        <div class="container">
            <h2 class="section-title">{{ $t('ourServices.title') }}</h2>
            <p class="section-subtitle" v-html="$t('ourServices.subtitle')"></p>
            <div class="services-grid">
                <!-- Neuschwanstein Castle Service -->
                <div class="service-card">
                    <div class="service-icon">🏰</div>
                    <h3>{{ $t('ourServices.neuschwanstein.title') }}</h3>
                    <ul>
                        <li v-for="(feature, index) in $tm('ourServices.neuschwanstein.features')" :key="index">
                            {{ feature }}
                        </li>
                    </ul>
                </div>
                <!-- German Rail Service -->
                <div class="service-card">
                    <div class="service-icon">🚆</div>
                    <h3>{{ $t('ourServices.germanRail.title') }}</h3>
                    <ul>
                        <li v-for="(feature, index) in $tm('ourServices.germanRail.features')" :key="index">
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
</script>

<style scoped>
.our-services-section {
    padding: 5rem 0;
    background: #f8fafc;
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

.section-subtitle {
    font-size: 1.1rem;
    text-align: center;
    color: #6b7280;
    margin-bottom: 4rem;
    line-height: 1.6;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.service-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
}

.service-card h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.service-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

.service-card li {
    color: #4b5563;
    line-height: 1.8;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.service-card li::before {
    content: '✓';
    color: #3b82f6;
    font-weight: bold;
}


/* Responsive Design */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .container {
        padding: 0 1rem;
    }
}
</style>
