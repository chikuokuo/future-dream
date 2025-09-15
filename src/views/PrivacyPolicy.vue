<template>
  <div class="privacy-policy-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('privacyPolicy.hero.title') }}</h1>
      </div>
    </section>

    <div class="container content-container">
      <p>{{ $t('privacyPolicy.introduction') }}</p>

      <h2>{{ $t('privacyPolicy.scope.title') }}</h2>
      <p>{{ $t('privacyPolicy.scope.content') }}</p>

      <h2>{{ $t('privacyPolicy.informationCollected.title') }}</h2>
      <p>{{ $t('privacyPolicy.informationCollected.intro') }}</p>
      <ul>
        <li v-html="$t('privacyPolicy.informationCollected.items.account')"></li>
        <li v-html="$t('privacyPolicy.informationCollected.items.booking')"></li>
        <li v-html="$t('privacyPolicy.informationCollected.items.travel')"></li>
        <li v-html="$t('privacyPolicy.informationCollected.items.device')"></li>
        <li v-html="$t('privacyPolicy.informationCollected.items.communications')"></li>
      </ul>
      <p>{{ $t('privacyPolicy.informationCollected.consent') }}</p>

      <h2>{{ $t('privacyPolicy.howWeUse.title') }}</h2>
      <p>{{ $t('privacyPolicy.howWeUse.intro') }}</p>
      <ul>
        <li>{{ $t('privacyPolicy.howWeUse.items.process') }}</li>
        <li>{{ $t('privacyPolicy.howWeUse.items.send') }}</li>
        <li>{{ $t('privacyPolicy.howWeUse.items.provide') }}</li>
        <li>{{ $t('privacyPolicy.howWeUse.items.improve') }}</li>
        <li>{{ $t('privacyPolicy.howWeUse.items.comply') }}</li>
      </ul>

      <h2>{{ $t('privacyPolicy.sharing.title') }}</h2>
      <p>{{ $t('privacyPolicy.sharing.intro') }}</p>
      <ul>
        <li v-html="$t('privacyPolicy.sharing.items.partners')"></li>
        <li v-html="$t('privacyPolicy.sharing.items.providers')"></li>
        <li v-html="$t('privacyPolicy.sharing.items.authorities')"></li>
      </ul>
      <p>{{ $t('privacyPolicy.sharing.noSale') }}</p>

      <h2>{{ $t('privacyPolicy.marketing.title') }}</h2>
      <p>{{ $t('privacyPolicy.marketing.content') }}</p>

      <h2>{{ $t('privacyPolicy.security.title') }}</h2>
      <p>{{ $t('privacyPolicy.security.content') }}</p>

      <h2>{{ $t('privacyPolicy.retention.title') }}</h2>
      <p>{{ $t('privacyPolicy.retention.content') }}</p>

      <h2>{{ $t('privacyPolicy.yourRights.title') }}</h2>
      <p>{{ $t('privacyPolicy.yourRights.intro') }}</p>
      <ul>
        <li>{{ $t('privacyPolicy.yourRights.items.access') }}</li>
        <li>{{ $t('privacyPolicy.yourRights.items.correct') }}</li>
        <li>{{ $t('privacyPolicy.yourRights.items.restrict') }}</li>
        <li>{{ $t('privacyPolicy.yourRights.items.withdraw') }}</li>
      </ul>
      <p>{{ $t('privacyPolicy.yourRights.exercise') }}</p>

      <h2>{{ $t('privacyPolicy.thirdParty.title') }}</h2>
      <p>{{ $t('privacyPolicy.thirdParty.content') }}</p>

      <h2>{{ $t('privacyPolicy.updates.title') }}</h2>
      <p>{{ $t('privacyPolicy.updates.content') }}</p>

      <h2>{{ $t('privacyPolicy.contact.title') }}</h2>
      <p>{{ $t('privacyPolicy.contact.intro') }}</p>
      <p><a :href="'mailto:' + $t('privacyPolicy.contact.email')">{{ $t('privacyPolicy.contact.email') }}</a></p>
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
