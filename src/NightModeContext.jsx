import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const NightModeContext = createContext();

export const useNightMode = () => useContext(NightModeContext);

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => setIsNightMode(!isNightMode);

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

NightModeProvider.propTypes = {
  children: PropTypes.node.isRequired // Validate that children is a node and is required
};
