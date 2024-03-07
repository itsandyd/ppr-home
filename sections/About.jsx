"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About PausePlayRepeat" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{" "}
        <span className="font-extrabold text-white">PausePlayRepeat</span> –
        where your music production journey never skips a beat. Embrace the
        seamless integration of creativity and education, with our comprehensive
        platforms designed to enhance, educate, and empower.{" "}
        <span className="font-extrabold text-white">
          "Never Stop Your Music Production"
        </span>{" "}
        echoes as our guiding principle, shaping a world where your musical
        endeavors are limitless.
        <br />
        <br />
        Discover our diverse offerings from extensive learning courses,
        personalized coaching, to vibrant community engagement and innovative AI
        tools - all crafted to support your growth and success. Join our Discord
        community, contribute as a course author, or shine through our music
        showcase. At{" "}
        <span className="font-extrabold text-white">PausePlayRepeat</span>, we
        ensure the rhythm of your creativity keeps flowing – pause, play, and
        repeat.
      </motion.p>

      {/* <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
