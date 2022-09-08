import React from "react";
import styles from "./Footer.module.css";
import { Icon } from "@iconify/react";

function SocialMedia() {
  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <Icon
          icon="akar-icons:facebook-fill"
          color="#707070"
          width="40"
          height="40"
        />
      ),
      link: "https://www.facebook.com/francine.m.pepe",
    },
    {
      name: "Youtube",
      icon: (
        <Icon
          icon="entypo-social:youtube-with-circle"
          color="#707070"
          width="40"
          height="40"
        />
      ),
      link: "https://www.youtube.com/",
    },
    {
      name: "Instagram",
      icon: (
        <Icon
          icon="akar-icons:instagram-fill"
          color="#707070"
          width="40"
          height="40"
        />
      ),
      link: "https://www.instagram.com/fran.e.a.canon.do.pai/",
    },
  ];

  return (
    <div className={styles.social_media_container}>
      {socialMedia.map((social, index) => (
        <a target="_blank" rel="noreferrer noopener" href={social.link} key={index} >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
