export const notify = (content) => ({
    status: true,
    type: content.type,
    icon: content.icon,
    text: content.text
});
