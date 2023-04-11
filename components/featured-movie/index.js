import React from 'react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import styles from './styles.module.css';
import Image from 'next/image';

function FeaturedMovie({ movie = {}, isCompact=true }) {
    const {poster_path, title, overview, id } = movie;

    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <p
                className={`${styles.overview} ${isCompact ? styles.shortOverview : ""}`}
            >
                {overview}
            </p>
            <div className={styles.actionButton}>
                <Link className={styles.playButton} href={`/movie/${id}`}>
                    Play 
                </Link>
                <button className={styles.addButton}>
                    <FaPlus />
                </button>
            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay} />
                <Image 
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
  )
}

export default FeaturedMovie