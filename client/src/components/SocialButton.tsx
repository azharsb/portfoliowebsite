import { motion } from "framer-motion";

type SocialButtonProps = {
  platform: "telegram" | "twitter" | "discord" | "linkedin" | "fiverr" | "freelancer";
  href: string;
};

const SocialButton = ({ platform, href }: SocialButtonProps) => {
  const icons = {
    telegram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3.47059L18.6471 20.1176C18.6471 20.1176 18.1412 21.3824 16.8235 20.8235L8.70588 14.4706L8.67059 14.4353C9.8 13.4118 18.1647 5.76471 18.5647 5.36471C19.2 4.72941 18.8706 4.34118 18.1176 4.79999L6.47059 12.7059L2.70588 11.3647C2.70588 11.3647 2.05882 11.1294 2.00001 10.5882C1.94118 10.047 2.76471 9.77647 2.76471 9.77647L20.4706 3.05882C20.4706 3.05882 22 2.32941 22 3.47059Z" fill="#00FF4C"/>
      </svg>
    ),
    twitter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" stroke="#00FF4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    discord: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="#00FF4C"/>
      </svg>
    ),
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.60457 4.10457 5.48 3 5.48C1.89543 5.48 1.02 4.60457 1.02 3.5C1.02 2.39543 1.89543 1.52 3 1.52C4.10457 1.52 4.98 2.39543 4.98 3.5ZM1.5 8.5H4.5V22H1.5V8.5ZM8.5 8.5H11.5V10.5H11.54C12.04 9.5 13.5 8.5 15.5 8.5C19.5 8.5 20.5 11 20.5 15.5V22H17.5V16C17.5 14 17.5 11.5 15 11.5C12.5 11.5 12.5 13.5 12.5 16V22H9.5V8.5H8.5Z" fill="#00FF4C"/>
      </svg>
    ),
    fiverr: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM10 7H14V9H10V7ZM10 11H14V17H10V11Z" fill="#00FF4C"/>
      </svg>
    ),
    freelancer: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M..." fill="#00FF4C"/>
      </svg>
    )
  };

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon p-2 bg-[#181a18] rounded-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icons[platform]}
    </motion.a>
  );
};

export default SocialButton;
