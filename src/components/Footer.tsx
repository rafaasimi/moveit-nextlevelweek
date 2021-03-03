import React from 'react'
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>Move.it 2021 | Projeto desenvolvido na 4ª Next Level Week</p>
            <p>Repositório: <a href="https://github.com/rafaasimi/moveit-nextlevelweek" target="_blank" rel="noopener noreferrer">moveit-nextlevelweek</a></p>
        </footer>
    )
}

export default Footer
