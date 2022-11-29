import React from "react";
import styles from "./Contact.module.css";
import ContactMap from "./ContactMap";
import { addressData, contactData } from "../../data";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.we_are_here}>
          <h2>We are here</h2>
          <Icon
            icon="bi:arrow-90deg-right"
            color="#707070"
            width="30"
            height="30"
            rotate={1}
          />
        </div>

        <div className={styles.contact_content}>
          <ContactMap />
          <div className={styles.address_contact_container}>
            {addressData.map((data, index) => {
              return (
                <>
                  <div className={styles.contacts} key={index}>
                    <a href="https://www.openstreetmap.org/#map=19/53.58842/9.97313" target={"blank"}>{data.icon}</a>
                    <h3>{data.title}</h3>
                    <span>
                      <p>{data.address}</p>
                    </span>
                  </div>
                </>
              );
            })}
            {contactData.map((data, index) => {
              return (
                <>
                  <div className={styles.contacts} key={index}>
                    {data.icon}
                    <h3>{data.title}</h3>
                    <p>{data.address}</p>
                    <p>{data.telephone}</p>
                    <a href = "mailto: contact@freshfruit.de"><p>{data.email}</p></a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
