"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TextType from '../components/TextType';

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), { 
  ssr: false
});

const CyberArtifact = dynamic(() => import('../components/CyberArtifact'), { 
  ssr: false 
});

const App = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="app-container">
      {/* 1. 배경 (터미널 효과) */}
      <div className="bg-layer">
        {/* 마운트 된 후에만 렌더링하여 안전하게 표시 */}
        {mounted && (
          <FaultyTerminal
            tint="#ffffffff"
            scale={2.5}
            digitSize={1.2}
            timeScale={0.5}     
            noiseAmp={1}       
            brightness={0.1}
            scanlineIntensity={0.5}
            curvature={0.1}
            mouseStrength={0.5}
            mouseReact={true}
            pageLoadAnimation={false}
            gridMul={[2, 1]}
            failColor="#FF0000"
            glitchAmount={1}
            flickerAmount={1}
            chromaticAberration={0}
            dither={0}
            pause={false}
            className=""
            style={{}}
          />
        )}
      </div>

      {/* 폰트 로드 */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');`}
      </style>

      {/* 2. 메인 컨텐츠 레이아웃 */}
      <div className="content-wrapper">
        
        {/* 왼쪽: 텍스트 정보 영역 */}
        <div className="left-section">
          <div className="title-area">
            <TextType 
              text={["Welcome.", "It's KARAJAN"]}
              typingSpeed={150}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              variableSpeed={false}
              onSentenceComplete={() => {}}
              deletingSpeed={50}
              initialDelay={0}
              reverseMode={false}
            />
          </div>

          <div className="cards-container">
            <div className="glass-card">
              <h3>Whoami</h3>
              <p>love rev, and just do.</p>
            </div>

            <div className="glass-card">
              <h3>Experience</h3>
              <p>[KITRI] WhiteHat School 3기 수료</p>
            </div>

            <div className="glass-card">
              <h3>Contact</h3>
              <div className="contact-info">
                <span>Mail - fyonglkm@gmail.com</span>
                <span>Discord - karajann</span>
              </div>
            </div>

            <div className="glass-card row-card">
              <h3>And my blog!</h3>
              <a 
                href="https://karajann.tistory.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="blog-btn"
              >
                Visit Tistory →
              </a>
            </div>
          </div>
        </div>

        {/* 오른쪽: 3D 아티팩트 영역 */}
        <div className="right-section">
          {mounted && <CyberArtifact />}
        </div>
      </div>

      {/* 3. CSS 스타일 */}
      <style jsx>{`
        .app-container {
          width: 100%;
          height: 100vh;
          position: relative;
          background-color: #000;
          overflow: hidden;
        }

        .bg-layer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 1; /* 배경이 맨 뒤로 가도록 설정 */
        }

        .content-wrapper {
          position: relative;
          z-index: 10; /* 컨텐츠는 배경보다 앞에 */
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          padding: 5%;
          box-sizing: border-box;
          align-items: center;
        }

        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
        }

        .right-section {
          flex: 1;
          height: 100%;
          position: relative;
          min-width: 300px;
        }

        .title-area {
          font-size: 5rem;
          color: #a8a8a8;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 900;
          letter-spacing: -0.05em;
          white-space: nowrap;
          margin-bottom: 2rem;
          min-height: 120px;
        }

        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
        }

        .glass-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          font-family: 'Noto Sans KR', sans-serif;
          transition: transform 0.2s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .glass-card h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
        }

        .glass-card p {
          margin: 0;
          font-size: 1rem;
          font-weight: 300;
          color: #a0a0a0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 1rem;
          font-weight: 300;
          color: #a0a0a0;
        }

        .row-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
        }

        .blog-btn {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: #fff;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .blog-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1024px) {
          .app-container { height: auto; min-height: 100vh; overflow-y: auto; }
          .content-wrapper { flex-direction: column; padding: 20px; padding-top: 60px; }
          .left-section { width: 100%; max-width: 100%; z-index: 20; margin-bottom: 50px; }
          .right-section { position: fixed; top: 20%; left: 0; width: 100%; height: 60vh; z-index: 5; opacity: 0.6; pointer-events: none; }
          .title-area { font-size: 3rem; text-align: left; margin-bottom: 2rem; white-space: normal; }
          .glass-card { background: rgba(0, 0, 0, 0.6); }
        }
        @media (max-width: 480px) { .title-area { font-size: 2.5rem; } }
      `}</style>
    </div>
  );
};

export default App;