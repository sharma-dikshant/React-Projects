import { createContext, useContext, useEffect, useState } from "react";

// STEP1 : creating context
const themeContext = createContext();

// STEP2 : creating provider

function ThemeProvider({ children }) {
  // fetching theme data from local storage
  const [theme, setTheme] = useState(function () {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  // saving theme data to local storage
  useEffect(
    function () {
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <themeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

// STEP 3: creating custom hook
function useTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
