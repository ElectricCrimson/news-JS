export interface IResponse {
    status: string;
    totalResults: number;
    articles: Array<IArticle>;
}

export interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ISources {
    status: string;
    sources: Array<ISourceData>;
}

export interface ISourceData {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IOptions {
    [key: string]: string;
}
