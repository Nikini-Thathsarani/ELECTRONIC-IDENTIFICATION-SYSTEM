import React, { useState } from 'react';
// Lucide icons for that clean, professional look from your reference image
import { Zap, ShieldCheck, Database, RefreshCw, BarChart3, UserCheck, Search, Bell } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // Controls which page is visible

  // Modern Color Palette inspired by the Sri Lankan Flag and modern fintech
  const colors = {
    bg: '#0a0f1e', // Very dark blue/black background
    glassBg: 'rgba(255, 255, 255, 0.04)', // The core glass effect background
    glassBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#ffffff',
    subtext: '#94a3b8', // Gray for descriptions
    primary: '#6d28d9', // Modern violet (like your BloomFi reference)
    success: '#10b981', // Green for positive indicators
  };

  // --- Shared Styles (Glassmorphism / Frosted Glass Look) ---
  const glassCardStyle = {
    background: colors.glassBg,
    backdropFilter: 'blur(20px)', // The "Frosting" effect
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', // Soft shadow for depth
    padding: '30px',
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
    transition: 'all 0.2s',
  };

  // --- Shared Component: The Modern Navigation Bar ---
  const NavigationBar = () => (
    <nav style={{ ...glassCardStyle, padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px auto', maxWidth: '1200px', borderRadius: '100px', position: 'sticky', top: '20px', zIndex: '100' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ShieldCheck size={26} color={colors.primary} />
        <span style={{ fontWeight: '700', fontSize: '20px' }}>Sri Lanka E-ID</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', color: colors.subtext, fontSize: '15px' }}>
        <a href="#" onClick={() => setCurrentPage('landing')} style={{color: currentPage === 'landing' ? colors.text : colors.subtext, textDecoration: 'none', fontWeight: currentPage === 'landing' ? '600' : '400'}}>Concept</a>
        <a href="#" onClick={() => setCurrentPage('enrollment')} style={{color: currentPage === 'enrollment' ? colors.text : colors.subtext, textDecoration: 'none', fontWeight: currentPage === 'enrollment' ? '600' : '400'}}>Prototype</a>
        <a href="#" style={{color: colors.subtext, textDecoration: 'none'}}>Architecture</a>
        <a href="#" style={{color: colors.subtext, textDecoration: 'none'}}>Security</a>
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
    <input type={type} placeholder={placeholder} {...props} style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: `1px solid ${colors.glassBorder}`, color: colors.text, outline: 'none', fontSize: '15px' }} />
  );

  // --- Page Component: The Informational Landing Page (Mirroring BloomFi) ---
  const LandingPage = () => (
    <div style={{ padding: '0 20px 80px 20px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* --- HERO SECTION (Matches Reference Top Image) --- */}
      <div style={{ ...glassCardStyle, textAlign: 'center', margin: '40px 0', padding: '100px 30px' }}>
        <ShieldCheck size={40} color={colors.primary} style={{ margin: '0 auto 15px auto' }} />
        <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1', letterSpacing: '-2px', margin: '0 0 20px 0' }}>Where Identity Grows Secure</h1>
        <p style={{ color: colors.subtext, fontSize: '20px', maxWidth: '600px', margin: '0 auto 30px auto' }}>A national, biometric-driven digital identity ecosystem designed for secure service delivery and modern governance integration.</p>
        <button style={modernButtonStyle} onClick={() => setCurrentPage('enrollment')}>Launch Portal Prototype</button>
      </div>

      {/* --- BENEFITS SECTION (Answering "Why use E-id?") --- */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', margin: '100px 0', alignItems: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', margin: 0 }}>The Essential Next Step <br/> for Every Citizen</h2>
        <div style={{ color: colors.subtext, fontSize: '18px', lineHeight: '1.6' }}>
          Sri Lanka's Next-Gen E-ID is not just an upgrade; it’s a necessary move from outdated, manual verification to an automated, secure digital framework. It connects every citizen with critical government services efficiently and guarantees security for your personal identity.
        </div>
      </div>

      {/* --- KEY COMPONENTS (The Three Glass Cards from reference) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '60px 0' }}>
        {[
          { icon: Zap, title: "Automated & Instant", text: "Replace slow, paper-based verification with near-instant, automated identity confirmation." },
          { icon: ShieldCheck, title: "Secure Biometrics", text: "Multi-factor authentication using facial and fingerprint scans prevents identity theft." },
          { icon: RefreshCw, title: "Universal Integration", text: "Seamless integration across banking, welfare, and tax portals for a smoother digital life." },
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
          <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', margin: '0 0 15px 0' }}>Component<br/> Ecosystem</h2>
          <p style={{ color: colors.subtext, fontSize: '18px' }}>Our platform streamlines national identity management by connecting secure biometric enrollment to a national registry database, enabling robust digital verification.</p>
        </div>
        
        {/* Architecture Diagram style card */}
        <div style={{ ...glassCardStyle }}>
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
          <hr style={{ border: `1px solid ${colors.glassBorder}`, margin: '25px 0' }}/>
          <div style={{ color: colors.subtext, fontSize: '13px' }}>The central national database holds all citizen records securely encrypted.</div>
        </div>
      </div>
    </div>
  );

  // --- Page Component: The Interactive Prototype Page (Your existing code in new UI) ---
  const EnrollmentPrototype = () => {
    const [submitted, setSubmitted] = useState(false);
    return (
      <div style={{ padding: '0 20px 80px 20px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', textAlign: 'center', margin: '40px 0' }}>Enrollment Prototype</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ ...glassCardStyle, width: '100%', maxWidth: '600px', textAlign: 'center' }}>
            <ShieldCheck size={32} color={colors.success} style={{ margin: '0 auto 20px auto' }} />
            <h2 style={{ margin: '0 0 25px 0' }}>Generate Digital ID</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <ModernInput type="text" placeholder="Citizen Full Name" />
              <ModernInput type="date" placeholder="Date of Birth" />
              <button style={{ ...modernButtonStyle, width: '100%', marginTop: '10px' }} onClick={() => setCurrentPage('enrollment')}>Simulate ID Generation</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- MAIN APP RENDER LOOP (Switches between the two pages) ---
  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <NavigationBar />
      {currentPage === 'landing' ? <LandingPage /> : <EnrollmentPrototype />}
    </div>
  );
}