<template>
  <footer class="app-footer">
    <div class="container footer-content">
      <div class="footer-section about">
        <div class="logo-container">
          <img src="@/assets/images/logo-futureDream.svg" :alt="$t('accessibility.altText.futuredreamLogo')" class="footer-logo" />
          <h2 class="footer-title">Future Dream</h2>
        </div>
        <p>{{ $t('footer.aboutText') }}</p>
      </div>
      <div class="footer-section links">
        <h3 class="footer-heading">{{ $t('footer.quickLinks') }}</h3>
        <ul>
          <li><router-link to="/">{{ $t('header.home') }}</router-link></li>
          <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
          <li><router-link to="/privacy-policy">{{ $t('footer.privacyPolicy') }}</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3 class="footer-heading">{{ $t('footer.contactUs') }}</h3>
        <div class="contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <a href="mailto:futuredream.traveling@gmail.com">futuredream.traveling@gmail.com</a>
        </div>
      </div>
      <div class="footer-section social">
        <h3 class="footer-heading">{{ $t('footer.followUs') }}</h3>
        <div class="social-links">
          <a href="https://www.facebook.com/people/Future-Dream/61580857592468/" target="_blank" rel="noopener noreferrer" :aria-label="$t('accessibility.ariaLabels.facebook')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Future Dream. {{ $t('footer.allRightsReserved') }}</p>
      <a class="footer-download" href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk" download="NeuschwansteinCastle-App.apk" :aria-label="$t('accessibility.ariaLabels.downloadAndroidApp')">
        <span class="footer-download-icon">⬇️</span>
        {{ $t('download.button') }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-footer {
  background-color: var(--md-inverse-surface);
  color: var(--md-on-inverse-surface);
  padding: 4rem 0 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--md-outline-variant);
}

.footer-section .footer-heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--md-on-inverse-surface);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 40px;
  margin-right: 1rem;
  filter: brightness(0) invert(1);
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
}

.footer-section p {
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  color: var(--md-on-inverse-surface);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-section a:hover {
  color: var(--md-primary);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-item svg {
  color: var(--text-disabled);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a svg {
  width: 24px;
  height: 24px;
  color: var(--md-on-inverse-surface);
  transition: all 0.3s ease;
}

.social-links a:hover svg {
  color: var(--md-primary);
  transform: scale(1.1);
}

.footer-bottom {
  padding: 2rem 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-disabled);
}

.footer-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding: 0.7rem 1.1rem;
  border-radius: 10px;
  background: var(--md-primary);
  color: var(--md-on-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.footer-download:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
}

.footer-download-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .logo-container, .contact-item, .social-links {
    justify-content: center;
  }
}
</style>
