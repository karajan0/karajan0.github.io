"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TextType from '../components/TextType';
import styles from './page.module.css';
import Snowfall from '../components/Snowfall';
import Clock from '../components/Clock';

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), { 
  ssr: false
});

const App = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.appContainer}>
      <div className={styles.bgLayer}>
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
        <Snowfall />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.titleArea}>
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

          <div className={styles.cardsContainer}>
            <div className={styles.glassCard}>
              <h3>Whoami</h3>
              <p>안뇽? 반가우이</p>
            </div>

            <div className={styles.glassCard}>
              <h3>Experience</h3>
              <p>[KITRI] WhiteHat School 3기 수료</p>
            </div>

            <div className={styles.glassCard}>
              <h3>Contact</h3>
              <div className={styles.contactInfo}>
                <span>Mail - fyonglkm@gmail.com</span>
                <span>Discord - karajann</span>
                <span>
                  Insta -{" "}
                  <a
                    href="https://www.instagram.com/qm1nn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    @qm1nn
                  </a>
                </span>
              </div>
            </div>

            <div className={styles.glassCard}>
              <h3>Awards</h3>
              <div className={styles.contactInfo}>
                <span>niteCTF 2025 - 2nd place (as ssul)</span>
                <span>ASIS CTF Finals 2025 - 3rd place (as Rubiyalab)</span>
                <span>hxp 39C3 CTF 2025 - 2nd place (as dizziness)</span>
              </div>
            </div>

            <div className={`${styles.glassCard} ${styles.rowCard} ${styles.blogCard}`}>
              <h3>And my blog!</h3>
              <a 
                href="https://karajann.tistory.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.blogBtn}
              >
                Visit Blog →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.artFigure}>
            <img src="/cat.webp" alt="Cat" className={styles.artImage} />
            <div className={styles.artCaption}>야옹</div>
          </div>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default App;
