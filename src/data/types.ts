import type {IconType} from 'react-icons';

export type TreeLink = {
    content: string;
    title?: string;
    url: string;
    image: string;
    publishAt?: Date;
    expireAt?: Date;
};

export type SocialLink = {
    title: string;
    url: string;
    icon: IconType;
};
