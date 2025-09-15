<template>
  <div class="privacy-policy-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('privacyPolicy.hero.title') }}</h1>
      </div>
    </section>

    <div class="container content-container">
      <p>Future Dream (“we”, “our”, “us”) is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you use our services.</p>

      <h2>1. Scope</h2>
      <p>This Privacy Policy applies to your use of the Future Dream App, including booking and purchasing European travel packages, train tickets, attraction tickets, and bundled travel products offered by third-party partners.</p>

      <h2>2. Information We Collect</h2>
      <p>Depending on how you use our services, we may collect:</p>
      <ul>
        <li><strong>Account Information:</strong> name, email, phone number, password.</li>
        <li><strong>Booking and Payment Details:</strong> order history, payment method, billing details.</li>
        <li><strong>Travel Information:</strong> preferences, destinations, ticket details.</li>
        <li><strong>Device & Technical Data:</strong> IP address, device type, operating system, browsing activity.</li>
        <li><strong>Communications:</strong> messages with customer support or partners.</li>
      </ul>
      <p>If you provide data about other travelers (e.g., for group bookings), you are responsible for obtaining their consent.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Process bookings, payments, and deliver tickets.</li>
        <li>Send confirmations, updates, and service-related messages.</li>
        <li>Provide personalized travel recommendations and promotions.</li>
        <li>Improve app performance and user experience.</li>
        <li>Comply with legal obligations (fraud prevention, audits, financial reporting).</li>
      </ul>

      <h2>4. Sharing of Information</h2>
      <p>We only share personal data when necessary:</p>
      <ul>
        <li><strong>Service Partners</strong> (e.g., railway operators, attraction providers) to fulfill your bookings.</li>
        <li><strong>Payment & Technical Providers</strong> for secure payment processing and hosting.</li>
        <li><strong>Government or Legal Authorities</strong> if required by law.</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>5. Marketing & Your Choices</h2>
      <p>We may send promotional messages via app notifications or email. You can opt out of marketing communications at any time without affecting your use of core services.</p>

      <h2>6. Data Security</h2>
      <p>We use appropriate technical and organizational measures to protect your personal data. However, no method of online transmission or storage is completely secure.</p>

      <h2>7. Data Retention</h2>
      <p>We retain your data only as long as necessary to fulfill the purposes described in this Policy or as required by law. Once no longer needed, your data will be deleted or anonymized.</p>

      <h2>8. Your Rights</h2>
      <p>Depending on applicable law, you may have the right to:</p>
      <ul>
        <li>Access and request a copy of your personal data.</li>
        <li>Correct or delete inaccurate or unnecessary data.</li>
        <li>Restrict or object to our processing of your data.</li>
        <li>Withdraw consent for marketing communications.</li>
      </ul>
      <p>To exercise these rights, please contact us.</p>

      <h2>9. Third-Party Links</h2>
      <p>Our app may contain links to third-party websites or services. Their privacy practices are governed by their own policies, and we are not responsible for their actions.</p>

      <h2>10. Updates to This Policy</h2>
      <p>We reserve the right to update this Privacy Policy from time to time. Significant changes will be announced through the App or our website.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or our data practices, don't hesitate to get in touch with us at:</p>
      <p><a href="mailto:futuredream.traveling@gmail.com">futuredream.traveling@gmail.com</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.privacy-policy-page {
  background-color: var(--bg-default);
  color: var(--text-primary);
}

.hero-section {
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/images/Bg-privacyPolicy.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  padding: 0 2rem;
  margin-bottom: 4rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.content-container {
  padding-top: 2rem;
  padding-bottom: 5rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

p, ul {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

ul {
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  font-weight: 600;
}

a {
  color: var(--md-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-primary-600);
  text-decoration: underline;
}
</style>
