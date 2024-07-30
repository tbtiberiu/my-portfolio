import Link from 'next/link';
import Image from 'next/image';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 id="contact">Contact me</h1>

      <div className={styles.contact__info}>
        <div className={styles.contact__info__email}>
          <h2>Email</h2>
          <p>tiberiuioan35@gmail.com</p>
        </div>
        <div className={styles.contact__info__social}>
          <h2>Follow me</h2>
          <ul>
            <li>
              <Link
                href="https://github.com/tbtiberiu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="my github"
              >
                <Image
                  src="/images/icons/github-logo-white.svg"
                  alt="My Github"
                  width="30"
                  height="30"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/tiberiu-boscan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="my linkedin"
              >
                <Image
                  src="/images/icons/linkedin-logo-white.svg"
                  alt="My Linkedin"
                  width="30"
                  height="30"
                />{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
