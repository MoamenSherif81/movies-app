import styles from "./Button.module.scss"

interface IButtonProps {
  isLoading: boolean
  children: React.ReactNode
}

export default function Button({ isLoading, children }: IButtonProps) {
  return (
    <button
      className={`${styles.search__btn}`}
      type="submit"
      disabled={isLoading}
    >
      {children}
    </button>
  )
}
