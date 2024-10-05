import { createContext, useState } from 'react';

export const MusicContext = createContext();

const MusicProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <MusicContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </MusicContext.Provider>
    );
}

export default MusicProvider;
