export function progressUpload (event) {
    const { loaded, total } = event;
    const loadedMB = loaded / (1024*1024);
    const totalMB =  total  / (1024*1024);
    const totalProgress = (loadedMB / totalMB) * 100;
    return totalProgress;
}
