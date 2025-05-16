export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("gbese-auth-token") || "");
    return token;
};

export const getMetaData = () => {
    const metadata = JSON.parse(localStorage.getItem("metadata-user") || "");
    return metadata;
};

export const getCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("current-user") || "");
    return currentUser;
};