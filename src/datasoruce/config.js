const config_OMDB = {
    BASE_URL: `${import.meta.env.VITE__OMDB_BASE_URL}`,
    API_KEY: `${import.meta.VITE__OMDB_KEY}`,
    LANG: `language=en-US`,
}

export default config_OMDB;