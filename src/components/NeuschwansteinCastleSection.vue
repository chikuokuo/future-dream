<template>
    <section class="destination-section alternate-bg">
        <div class="container">
            <div class="destination-content">
                <div class="visual-column">
                    <img src="@/assets/images/NeuschwansteinCastle.png" alt="Neuschwanstein Castle in the mist"
                        class="destination-image">
                </div>
                <div class="text-column">
                    <h2 class="destination-title">{{ $t('neuschwansteinCastle.title') }}</h2>

                    <div class="info-block">
                        <h3>{{ $t('neuschwansteinCastle.story.title') }}</h3>
                        <p>{{ $t('neuschwansteinCastle.story.content1') }}</p>
                        <p>{{ $t('neuschwansteinCastle.story.content2') }}</p>
                    </div>

                    <div class="info-block">
                        <h3>{{ $t('neuschwansteinCastle.experience.title') }}</h3>
                        <p>{{ $t('neuschwansteinCastle.experience.content1') }}</p>
                        <p>{{ $t('neuschwansteinCastle.experience.content2') }}</p>
                    </div>

                    <div class="info-block">
                        <h3>{{ $t('neuschwansteinCastle.tips.title') }}</h3>
                        <ul>
                            <li>{{ $t('neuschwansteinCastle.tips.content1') }}</li>
                            <li>{{ $t('neuschwansteinCastle.tips.content2') }}</li>
                        </ul>
                    </div>

                    <div class="cta-container">
                        <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk"
                            class="cta-button" download="FutureDream-App.apk">
                            <span class="btn-icon">🎟️</span>
                            {{ $t('neuschwansteinCastle.cta') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Script setup if needed
</script>

<style scoped>
/* Using shared styles with Uffizi section for consistency, but with minor tweaks */
.destination-section {
    padding: 5rem 0;
    background-color: #ffffff;
    /* White background */
}

.alternate-bg {
    background-color: #ffffff;
    /* White background */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.destination-content {
    display: flex;
    gap: 3rem;
    align-items: center;
}

.text-column {
    flex: 2;
}

.destination-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 2rem;
    border-bottom: 3px solid #3b82f6;
    padding-bottom: 0.5rem;
    display: inline-block;
}

.info-block {
    margin-bottom: 2rem;
}

.info-block h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
}

.info-block p,
.info-block ul {
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.7;
    padding-left: 0;
}

.info-block ul {
    list-style-position: inside;
    padding-left: 1rem;
}

.info-block li {
    margin-bottom: 0.5rem;
}

.cta-container {
    margin-top: 2rem;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
    text-decoration: none;
}

.cta-button:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.visual-column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.destination-image {
    width: 100%;
    max-width: 350px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
}

.destination-image:hover {
    transform: scale(1.03);
}

.visual-placeholder {
    width: 100%;
    max-width: 350px;
    aspect-ratio: 3 / 4;
    background-color: #e5e7eb;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9ca3af;
    border: 2px dashed #d1d5db;
}

.icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

@media (max-width: 992px) {
    .destination-content {
        flex-direction: column-reverse;
        /* Stack image on top for mobile */
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .destination-title {
        font-size: 2rem;
    }
}
</style>
