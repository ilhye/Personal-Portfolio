import "../../styles/Button.css"

const theme = {
  primary:"btn__primary",
  secondary:"btn__secondary"
}
export default function Button({variant, children}) {
  return (
    <button type="button" className={`btn ${theme[variant]}`}>
      {children}
    </button>
  );
}
