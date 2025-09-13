<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-content">
          <div class="hero-badge">
            👑 Neuschwanstein Castle Booking Made Easy
          </div>
          <h1 class="hero-title">
            Castle<br>
            Booking App
          </h1>
          <p class="hero-subtitle">
            Your trusted companion for<br>
            Neuschwanstein Castle ticket booking
          </p>
          
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🕐</span>
              <span>24/7 Online Booking</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🛡️</span>
              <span>Trusted by Travelers</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⭐</span>
              <span>100K+ Downloads</span>
            </div>
          </div>

          <div class="hero-buttons">
            <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk" 
               class="btn-primary" 
               download="NeuschwansteinCastle-App.apk">
              <span class="btn-icon">📱</span>
              Download APK
            </a>
          </div>

          <button class="learn-more-btn">
            Learn More About Features ↓
          </button>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="why-choose-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our App?</h2>
        <p class="section-subtitle">
          A comprehensive ticketing app designed for travelers visiting<br>
          Neuschwanstein Castle, providing convenient booking solutions
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-large">📅</div>
            <h3>Instant Booking</h3>
            <p>Book tickets anytime, anywhere without waiting in line</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-large">📱</div>
            <h3>Digital Tickets</h3>
            <p>Show digital tickets on your phone - eco-friendly and convenient</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-large">🛡️</div>
            <h3>Secure Payment</h3>
            <p>Your payment information is protected with the highest level of encryption</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-large">🌍</div>
            <h3>Multi-language Support</h3>
            <p>Available in Chinese, English, German, and many other languages</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Exclusive Benefits -->
    <section class="benefits-section">
      <div class="container">
        <h2 class="section-title">App Exclusive Benefits</h2>
        
        <div class="benefits-list">
          <div class="benefit-item">
            <span class="benefit-icon">🎫</span>
            <span>Skip the line with fast entry</span>
          </div>
          
          <div class="benefit-item">
            <span class="benefit-icon">📱</span>
            <span>Digital tickets - eco-friendly & convenient</span>
          </div>
          
          <div class="benefit-item">
            <span class="benefit-icon">💰</span>
            <span>Exclusive app-only discounted prices</span>
          </div>
          
          <div class="benefit-item">
            <span class="benefit-icon">🔔</span>
            <span>Real-time notifications for updates</span>
          </div>
          
          <div class="benefit-item">
            <span class="benefit-icon">📍</span>
            <span>Navigation and location information</span>
          </div>
          
          <div class="benefit-item">
            <span class="benefit-icon">⭐</span>
            <span>User reviews and experiences</span>
          </div>
        </div>

        <!-- User Review -->
        <div class="user-review">
          <div class="review-header">
            <span class="review-icon">⭐</span>
            <h3>User Review</h3>
          </div>
          <blockquote class="review-text">
            "Great booking experience! The app made it so easy to secure our tickets in advance. Highly recommended for anyone planning to visit."
          </blockquote>
          <cite class="review-author">- Sarah M., Travel Blogger</cite>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="download-section">
      <div class="download-container">
        <div class="download-icon">📱</div>
        <h2 class="download-title">Download Now</h2>
        <p class="download-subtitle">Join over 100,000 satisfied users</p>
        
        <button class="download-btn">
          <span class="download-btn-icon">⬇️</span>
          Download App for Free
        </button>
        
        <p class="compatibility">Supports iOS 12.0+ and Android 8.0+</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.landing-page {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
              url('@/assets/images/Bg-NeuschwansteinCastle.jpg') center/cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.hero-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: inline-block;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.4;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.feature-icon {
  font-size: 1.2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #fbbf24;
  color: #1f2937;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #f59e0b;
  transform: translateY(-2px);
}

.learn-more-btn {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Why Choose Section */
.why-choose-section {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 0;
  background: white;
}

.benefits-list {
  margin-bottom: 4rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  font-size: 1.1rem;
  color: #1f2937;
  border-bottom: 1px solid #e5e7eb;
}

.benefit-item:last-child {
  border-bottom: none;
}

.benefit-icon {
  font-size: 1.5rem;
  width: 2rem;
  text-align: center;
}

/* User Review */
.user-review {
  background: #f1f5f9;
  padding: 2rem;
  border-radius: 16px;
  margin-top: 3rem;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.review-icon {
  font-size: 1.5rem;
}

.review-header h3 {
  font-size: 1.5rem;
  color: #3b82f6;
  margin: 0;
}

.review-text {
  font-size: 1.1rem;
  font-style: italic;
  color: #4b5563;
  margin: 1rem 0;
  line-height: 1.6;
}

.review-author {
  color: #6b7280;
  font-size: 0.9rem;
}

/* Download Section */
.download-section {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  padding: 5rem 0;
  text-align: center;
}

.download-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.download-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
}

.download-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.download-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
}

.download-btn {
  background: #fbbf24;
  color: #1f2937;
  border: none;
  padding: 1.25rem 3rem;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.download-btn:hover {
  background: #f59e0b;
  transform: translateY(-2px);
}

.download-btn-icon {
  font-size: 1.5rem;
}

.compatibility {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-features {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .download-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}
</style>
