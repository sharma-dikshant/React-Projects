import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <div className={theme}>
      Toggle Theme :{" "}
      <button onClick={handleToggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default Header;
