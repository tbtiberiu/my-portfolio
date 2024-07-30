import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Projects.module.scss';

interface Props {
  children: React.ReactNode;
  previewImagePath: string;
  previewUrl: string;
  sourceUrl: string;
}

const ProjectItem = ({
  children,
  previewImagePath,
  previewUrl,
  sourceUrl,
}: Props) => {
  return (
    <div className={styles.carousel__item}>
      <Image
        src={previewImagePath}
        alt="A preview of the website"
        height="600"
        width="1056"
        loading="eager"
      />
      <div className={styles.carousel__item__text}>{children}</div>
      <div className={styles.carousel__item__buttons}>
        <Link
          className={styles['preview-button']}
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/icons/eye-preview.svg"
            alt=""
            height={25}
            width={25}
            loading="eager"
          />
          <p>Live Preview</p>
        </Link>
        <Link
          className={styles['github-button']}
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/icons/github-logo.svg"
            alt=""
            height={25}
            width={25}
            loading="eager"
          />
          <p>GitHub Code</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
