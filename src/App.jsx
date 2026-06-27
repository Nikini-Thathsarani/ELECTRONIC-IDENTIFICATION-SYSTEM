import React, { useState } from 'react';
// Lucide icons for that clean, professional look from your reference image
import { Zap, ShieldCheck, Database, RefreshCw, Search, Bell } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // Controls which page is visible

  // Modern Color Palette inspired by the Sri Lankan Flag and modern fintech
  const colors = {
    bg: `
      radial-gradient(circle at top left, rgba(109,40,217,0.25), transparent 35%),
      radial-gradient(circle at top right, rgba(16,185,129,0.15), transparent 35%),
      #0a0f1e
    `,
    glassBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#ffffff',
    subtext: '#94a3b8', // Gray for descriptions
    primary: '#6d28d9', // Modern violet (like your BloomFi reference)
    success: '#10b981', // Green for positive indicators
  };

  // --- Shared Styles (Glassmorphism / Frosted Glass Look) ---
  const glassCardStyle = {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderRadius: '28px',
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: `
      0 8px 32px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.05)
    `,
    padding: '32px',
  };

  const modernButtonStyle = {
    background: colors.primary,
    color: 'white',
    padding: '12px 28px',
    borderRadius: '100px', // Full pill shape like BloomFi
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    letterSpacing: '-0.3px',
    transition: 'all .35s ease',
  };

  // --- Shared Component: The Modern Navigation Bar ---
  const NavigationBar = () => (
    <nav
      style={{
        ...glassCardStyle,
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px auto',
        maxWidth: '1200px',
        borderRadius: '100px',
        position: 'sticky',
        top: '20px',
        zIndex: '100',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ShieldCheck size={26} color={colors.primary} />
        <span style={{ fontWeight: '700', fontSize: '20px' }}>Sri Lanka E-ID</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', color: colors.subtext, fontSize: '15px' }}>
        <a
          href="#"
          onClick={() => setCurrentPage('landing')}
          style={{ color: currentPage === 'landing' ? colors.text : colors.subtext, textDecoration: 'none', fontWeight: currentPage === 'landing' ? '600' : '400' }}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setCurrentPage('enrollment')}
          style={{ color: currentPage === 'enrollment' ? colors.text : colors.subtext, textDecoration: 'none', fontWeight: currentPage === 'enrollment' ? '600' : '400' }}
        >
          About E-ID
        </a>
        <a href="#" style={{ color: colors.subtext, textDecoration: 'none' }}>Citizen Registration</a>
        <a href="#" style={{ color: colors.subtext, textDecoration: 'none' }}>Contact</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: colors.subtext }}>
        <Search size={20} />
        <Bell size={20} />
        <button style={modernButtonStyle}>Admin Login</button>
      </div>
    </nav>
  );

  // --- Shared Component: Modern Input Field ---
  const ModernInput = ({ type, placeholder, ...props }) => (
    <input
      type={type}
      placeholder={placeholder}
      {...props}
      style={{
        width: '100%',
        padding: '16px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '12px',
        border: `1px solid ${colors.glassBorder}`,
        color: colors.text,
        outline: 'none',
        fontSize: '15px',
      }}
    />
  );

  // --- Page Component: The Informational Landing Page (Mirroring BloomFi) ---
  const LandingPage = () => (
    <div style={{ padding: '0 20px 80px 20px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>

      {/* --- HERO SECTION (Matches Reference Top Image) --- */}
      <div style={{ ...glassCardStyle, textAlign: 'center', margin: '40px 0', padding: '100px 30px' }}>
        <ShieldCheck size={40} color={colors.primary} style={{ margin: '0 auto 15px auto' }} />
        <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1', letterSpacing: '-2px', margin: '0 0 20px 0' }}>
          Sri Lanka Electronic Identification System
        </h1>
        <p style={{ color: colors.subtext, fontSize: '20px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          A secure national electronic identity platform that enables citizens to access government services, banking, healthcare and digital verification using a single trusted identity.
        </p>
        <button style={modernButtonStyle} onClick={() => setCurrentPage('enrollment')}>Register Now</button>
      </div>

      {/* --- STATS SECTION --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
        {[
          { number: '22M+', title: 'Citizens' },
          { number: '99.99%', title: 'Verification Accuracy' },
          { number: '24/7', title: 'Digital Services' },
          { number: '100+', title: 'Government Services' },
        ].map((item, index) => (
          <div key={index} style={{ ...glassCardStyle, textAlign: 'center' }}>
            <h2 style={{ fontSize: '42px', color: colors.primary, marginBottom: '10px' }}>{item.number}</h2>
            <p style={{ color: colors.subtext }}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* --- BENEFITS SECTION (Answering "Why use E-id?") --- */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', margin: '100px 0', alignItems: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', margin: 0 }}>
          The Essential Next Step <br /> for Every Citizen
        </h2>
        <div style={{ color: colors.subtext, fontSize: '18px', lineHeight: '1.6' }}>
          Sri Lanka's Next-Gen E-ID is not just an upgrade; it's a necessary move from outdated, manual verification to an automated, secure digital framework. It connects every citizen with critical government services efficiently and guarantees security for your personal identity.
        </div>
      </div>

      {/* --- KEY COMPONENTS (The Three Glass Cards from reference) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '60px 0' }}>
        {[
          { icon: Zap, title: 'Digital Identity Verification', text: 'Replace slow, paper-based verification with near-instant, automated identity confirmation.' },
          { icon: ShieldCheck, title: 'Biometric Authentication', text: 'Multi-factor authentication using facial and fingerprint scans prevents identity theft.' },
          { icon: RefreshCw, title: 'Government Service Integration', text: 'Seamless integration across banking, welfare, and tax portals for a smoother digital life.' },
        ].map((item, i) => (
          <div key={i} style={{ ...glassCardStyle, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ background: colors.primary, width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <item.icon size={24} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>{item.title}</h3>
            <p style={{ color: colors.subtext, fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* --- USE CASES / ARCHITECTURE SECTION --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', margin: '100px 0' }}>
        <div>
          <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', margin: '0 0 15px 0' }}>
            Component<br /> Ecosystem
          </h2>
          <p style={{ color: colors.subtext, fontSize: '18px' }}>
            Our platform streamlines national identity management by connecting secure biometric enrollment to a national registry database, enabling robust digital verification.
          </p>
        </div>

        <div style={glassCardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <Database size={24} color={colors.primary} />
            <h3 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>System Registry</h3>
          </div>
          <div style={{ fontSize: '14px', color: colors.subtext }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Citizens Enrolled:</span>
              <span style={{ color: colors.success, fontWeight: '700' }}>22,185,340 (Live)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Data Sync Status:</span>
              <span style={{ color: colors.success, fontWeight: '700' }}>99.99% Connected</span>
            </div>
          </div>
          <hr style={{ border: `1px solid ${colors.glassBorder}`, margin: '25px 0' }} />
          <div style={{ color: colors.subtext, fontSize: '13px' }}>
            The central national database holds all citizen records securely encrypted.
          </div>
        </div>
      </div>
    </div>
  );

  // --- Page Component: Citizen Registration / Enrollment Prototype ---
  const EnrollmentPrototype = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
      <div style={{ padding: '0 20px 80px 20px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', textAlign: 'center', margin: '40px 0' }}>
          Citizen Registration Portal
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ ...glassCardStyle, width: '100%', maxWidth: '600px', textAlign: 'center' }}>
            {submitted ? (
              <>
                <ShieldCheck size={32} color={colors.success} style={{ margin: '0 auto 20px auto' }} />
                <h2 style={{ margin: '0 0 10px 0' }}>ID Generated Successfully</h2>
                <p style={{ color: colors.subtext, fontSize: '15px', margin: '0 0 25px 0' }}>
                  Your electronic identity has been created and synced with the national registry.
                </p>
                <button style={{ ...modernButtonStyle, width: '100%' }} onClick={() => setSubmitted(false)}>
                  Register Another
                </button>
              </>
            ) : (
              <>
                <ShieldCheck size={32} color={colors.success} style={{ margin: '0 auto 20px auto' }} />
                <h2 style={{ margin: '0 0 25px 0' }}>Create Your Electronic ID</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <ModernInput type="text" placeholder="Full Name (According to Birth Certificate)" />
                  <ModernInput type="date" placeholder="Date of Birth" />
                  <button
                    style={{ ...modernButtonStyle, width: '100%', marginTop: '10px' }}
                    onClick={() => setSubmitted(true)}
                  >
                    Simulate ID Generation
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- MAIN APP RENDER LOOP (Switches between the two pages) ---
  return (
    <div style={{ background: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <NavigationBar />
      {currentPage === 'landing' ? <LandingPage /> : <EnrollmentPrototype />}
    </div>
  );
}
