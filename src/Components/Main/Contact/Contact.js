import React from 'react';
import ReactTooltip from 'react-tooltip';
import Card from '../../Card/Card';
import styles from './Contact.module.css';

const ContactItem = (props) => {
    return (
        <>
            <a href={props.link} target="_blank" rel="noreferrer" data-tip data-for={props.iconAlt}>
                <Card className={styles["contacts-link-card"]}>
                    <img src={props.iconLink} alt={props.iconAlt} />
                </Card>
            </a>
            <ReactTooltip id={props.iconAlt} type="light">
                <span>{props.tooltip}</span>
            </ReactTooltip>
        </>
    )
}

export default function Contact()
{
    return (
        <Card className={styles["contacts-card"]}>

            <span>Contact</span>
            
            <div className={styles["contacts"]}>
                <ContactItem link="https://github.com/TruePadawan" iconLink="https://img.icons8.com/windows/64/000000/github.png"
                    iconAlt="GitHub PNG" tooltip="Open a new page to my GitHub" />

                <ContactItem link="https://twitter.com/TheTruePadawan" iconLink="https://img.icons8.com/color/48/000000/twitter--v1.png"
                    iconAlt="Twitter PNG" tooltip="Open a new page to my Twitter" />

                <ContactItem link="mailto:hermeschigoziri@gmail.com" iconLink="https://img.icons8.com/fluency/48/000000/mail.png"
                    iconAlt="Mail PNG" tooltip="Send me an E-Mail" />

                <ContactItem link="https://www.linkedin.com/in/hermes-chigoziri-919148204/" iconLink="https://img.icons8.com/color/50/000000/linkedin.png"
                    iconAlt="LinkedIn PNG" tooltip="Open a new page to my LinkedIn" />
            </div>

        </Card>
    );
}