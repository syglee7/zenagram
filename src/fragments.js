export const COMMENT_FRAGMENT = `
    id
    text
    user {
        username
    }
`;

export const USER_FRAGMENT = `
    id
    username
    avatar
`;

export const FILE_FRAGMENT = ` 
    id
    url
`;

export const MESSAGE_FRAGMENT = `
    id
    text,
    to {
        ${USER_FRAGMENT}
    }
    from {
        ${USER_FRAGMENT}
    }
`;

export const CHAT_FRAGMENT = `
    fragment ChatParts on Chat {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages {
            ${MESSAGE_FRAGMENT}
        }
    }
`;
