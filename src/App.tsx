import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'work'>('about');

  return (
    <div className="cyberspace-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">jabaldoo</div>
        <nav className="nav-menu">
          <div className="nav-item active">Profile</div>
          <div className="nav-item">Archive</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Notes</div>
          <div className="nav-item">Terminal</div>
          <div className="nav-item highlighted">Alerts <span className="count">!</span></div>
          <div className="nav-item">Contact</div>
        </nav>
        <div className="sidebar-footer">
          <div className="version">CyberOS v2.0.1-jbd</div>
          <div className="icons">
            <span title="Encrypted">🔒</span>
            <span title="Root Access">🛡️</span>
            <span title="Menu">≡</span>
            <span title="Logout" style={{ transform: 'rotate(180deg)', display: 'inline-block', cursor: 'pointer' }}>⎋</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <span className="breadcrumb">USER_ROOT / JABALDOO</span>
        </header>

        <section className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar-dither">
                <div className="pixel-art-placeholder"></div>
              </div>
            </div>
            <div className="profile-info">
              <div className="profile-header-row">
                <span className="handle">@jabaldoo 🕵️ 🛡️ 🐧</span>
                <span className="join-date">Based in Poland 🇵🇱</span>
              </div>
              <p className="bio">Tech Enthusiast & Aspiring Cybersecurity Researcher. Breaking things (ethically!) to understand how they work.</p>
              <div className="profile-stats-actions">
                <div className="stats">
                  Ethical Hacking &bull; BS App Builder &bull; Linux Nerd
                </div>
                <div className="actions">
                  <a href="https://github.com/jabaldoo" target="_blank" rel="noopener noreferrer">
                    <button>[G] GitHub</button>
                  </a>
                  <a href="https://www.linkedin.com/in/michal-matera-0a0a30334/" target="_blank" rel="noopener noreferrer">
                    <button>[L] LinkedIn</button>
                  </a>
                  <a href="mailto:michalmatera9@gmail.com">
                    <button>[M] Mail</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tabs-section">
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              System Info
            </div>
            <div 
              className={`tab ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              Current Tasks
            </div>
          </div>
          <div className="feed">
            {activeTab === 'about' ? (
              <div className="post-card">
                <div className="post-header">
                  <span className="post-handle">System Diagnosis</span>
                  <span className="post-meta">v1.0.0-stable</span>
                </div>
                <div className="post-content">
                  <h3 className="post-title">🛠️ Tech Stack & Tools</h3>
                  <ul>
                    <li><strong>OS:</strong> Linux (Arch/Gentoo), macOS, Windows</li>
                    <li><strong>Languages:</strong> Python, JavaScript, Kotlin</li>
                    <li><strong>Focus:</strong> Penetration Testing, Network Security, Open Source</li>
                  </ul>
                  <p>Building "BS apps" that solve niche problems while mastering the command line.</p>
                </div>
              </div>
            ) : (
              <div className="post-card">
                <div className="post-header">
                  <span className="post-handle">Current Operations</span>
                  <span className="post-meta">Active Now</span>
                </div>
                <div className="post-content">
                  <h3 className="post-title">🕵️ What I'm working on</h3>
                  <ul>
                    <li>🛡️ Learning the ropes of Penetration Testing and Network Security.</li>
                    <li>🐧 Mastering the Linux command line (Gentoo/Arch).</li>
                    <li>💻 Developing open-source tools and experimental applications.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className="status-bar">
          <div className="shortcuts">
            <span><span className="key">[⌘K]</span> Commands</span>
            <span><span className="key">[↑/↓]</span> Navigate</span>
            <span><span className="key">[ESC]</span> Close</span>
            <span><span className="key">[TAB]</span> Select</span>
          </div>
          <div className="user-handle">jabaldoo@gentoo-host:~$ _</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
