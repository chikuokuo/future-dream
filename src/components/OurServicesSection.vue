<template>
    <section class="our-services-section">
        <div class="container">
            <h2 class="section-title">{{ $t('ourServices.title') }}</h2>
            <p class="section-subtitle" v-html="$t('ourServices.subtitle')"></p>
            <div class="services-grid">
                <!-- Italian Rail Service -->
                <div class="service-card">
                    <div class="service-icon">🚆</div>
                    <h3>{{ $t('ourServices.italianRail.title') }}</h3>
                    <ul>
                        <li v-for="(feature, index) in $tm('ourServices.italianRail.features')" :key="index">
                            {{ feature }}
                        </li>
                    </ul>
                </div>

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

                <!-- Uffizi Gallery Service -->
                <div class="service-card">
                    <div class="service-icon">🏛️</div>
                    <h3>{{ $t('ourServices.uffizi.title') }}</h3>
                    <ul>
                        <li v-for="(feature, index) in $tm('ourServices.uffizi.features')" :key="index">
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
    background: var(--bg-default);
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

.section-subtitle {
    font-size: 1.1rem;
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 4rem;
    line-height: 1.6;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.service-card {
    background: var(--bg-paper);
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 15px var(--color-shadow-light);
    transition: all 0.3s ease;
    border: 1px solid var(--border-light);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px var(--color-shadow-medium);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.service-card h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.service-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--text-secondary);
}

.service-card ul li {
    margin-bottom: 0.75rem;
    line-height: 1.5;
}

.service-card ul li:last-child {
    margin-bottom: 0;
}


/* Responsive Design */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .container {
        padding: 0 1rem;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>
