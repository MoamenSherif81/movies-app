import styles from "./Footer.module.scss"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className={`${styles.footer}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container">
        © {year} Movies App. All rights reserved.
      </div>
    </footer>
  )
}
