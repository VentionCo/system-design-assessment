export const getVideos = async () => {
    const res = await fetch("http://localhost:3001/api/videos");
    return await res.json();
}