"use client";

import React from 'react';
import FaultyTerminal from '../components/FaultyTerminal';
import TextType from '../components/TextType';
import CyberArtifact from '../components/CyberArtifact';

const App = () => {
  return (
    <div className="app-container">
      {/* 1. 배경 (터미널 효과) */}
      <div className="bg-layer">
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
      </div>

      {/* 폰트 로드 */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');`}
      </style>

      {/* 2. 메인 컨텐츠 레이아웃 */}
      <div className="content-wrapper">
        
        {/* 왼쪽: 텍스트 정보 영역 */}
        <div className="left-section">
          {/* 타이틀 */}
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

          {/* 정보 카드 리스트 */}
          <div className="cards-container">
            {/* Whoami */}
            <div className="glass-card">
              <h3>Whoami</h3>
              <p>love rev, and just do.</p>
            </div>

            {/* Experience */}
            <div className="glass-card">
              <h3>Experience</h3>
              <p>[KITRI] WhiteHat School 3기 수료</p>
            </div>

            {/* Contact */}
            <div className="glass-card">
              <h3>Contact</h3>
              <div className="contact-info">
                <span>Mail - fyonglkm@gmail.com</span>
                <span>Discord - karajann</span>
              </div>
            </div>

            {/* Blog Button */}
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
          <CyberArtifact />
        </div>
      </div>

      {/* 3. CSS 스타일 (반응형 로직 포함) */}
      <style jsx>{`
        /* 전체 컨테이너 */
        .app-container {
          width: 100%;
          height: 100vh;
          position: relative;
          background-color: #000;
          overflow: hidden; /* PC에서는 스크롤 방지 */
        }

        /* 배경 레이어 */
        .bg-layer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 1;
        }

        /* 컨텐츠 래퍼 (Flexbox) */
        .content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          padding: 5%;
          box-sizing: border-box;
          align-items: center; /* 수직 중앙 정렬 */
        }

        /* 왼쪽 섹션 */
        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
        }

        /* 오른쪽 섹션 (3D) */
        .right-section {
          flex: 1;
          height: 100%;
          position: relative;
          min-width: 300px;
        }

        /* 타이틀 영역 */
        .title-area {
          font-size: 5rem; /* 기본 PC 폰트 사이즈 */
          color: #a8a8a8;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 900;
          letter-spacing: -0.05em;
          white-space: nowrap;
          margin-bottom: 2rem;
          min-height: 120px; /* 타이핑 높이 확보 */
        }

        /* 카드 컨테이너 */
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
        }

        /* 글라스모피즘 카드 스타일 */
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

        /* =========================================
           [모바일/태블릿 반응형 스타일]
           화면 너비가 1024px 이하일 때 적용
        ========================================= */
        @media (max-width: 1024px) {
          .app-container {
            height: auto;
            min-height: 100vh;
            overflow-y: auto; /* 모바일은 스크롤 허용 */
          }

          .content-wrapper {
            flex-direction: column; /* 세로 배치로 변경 */
            padding: 20px;
            padding-top: 60px;
          }

          .left-section {
            width: 100%;
            max-width: 100%;
            z-index: 20;
            margin-bottom: 50px; /* 하단 여백 */
          }

          .right-section {
            /* 3D 오브젝트를 배경처럼 뒤로 보냄 */
            position: fixed;
            top: 20%;
            left: 0;
            width: 100%;
            height: 60vh;
            z-index: 5;
            opacity: 0.6; /* 글자 잘 보이게 투명도 조절 */
            pointer-events: none; /* 터치 방해 안 되게 */
          }

          .title-area {
            font-size: 3rem; /* 폰트 크기 줄임 */
            text-align: left;
            margin-bottom: 2rem;
            white-space: normal; /* 줄바꿈 허용 */
          }
          
          .glass-card {
             background: rgba(0, 0, 0, 0.6); /* 모바일 가독성 위해 배경 진하게 */
          }
        }

        /* 모바일이 아주 작을 때 (폰) */
        @media (max-width: 480px) {
           .title-area {
            font-size: 2.5rem;
           }
        }
      `}</style>
    </div>
  );
};

export default App;