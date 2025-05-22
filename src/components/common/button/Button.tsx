import Link from "next/link"

import styles from "./Button.module.scss"

interface IButtonProps {
  children: React.ReactNode
  isLoading?: boolean
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  withoutBorderRadius?: boolean
  href?: string
}

export default function Button({
  children,
  isLoading,
  disabled,
  type = "button",
  withoutBorderRadius,
  href,
}: IButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${withoutBorderRadius ? styles["button--no-radius"] : ""}`}
        aria-busy={isLoading ? "true" : "false"}
        aria-disabled={disabled || isLoading ? "true" : "false"}
        tabIndex={disabled || isLoading ? -1 : 0}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`${styles.button} ${withoutBorderRadius ? styles["button--no-radius"] : ""}`}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? "true" : "false"}
      aria-disabled={disabled || isLoading ? "true" : "false"}
    >
      {children}
    </button>
  )
}
