import { useContext, useState, createContext } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [roomID, setRoomID] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const value = {
    roomID,
    setRoomID,
    nickname,
    setNickname,
  };

  return (
    <DataContext.Provider value={value}>
      <ToastContainer />
      {!loading && children}
    </DataContext.Provider>
  );
}
