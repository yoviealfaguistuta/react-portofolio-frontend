export const removeDuplicateIds = (objects: any[]): any[] => {
    const uniqueIds = new Set<string>();
    return objects.filter((obj) => {
        if (uniqueIds.has(obj.id)) {
            return false;
        }
        uniqueIds.add(obj.id);
        return true;
    });
}

export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}