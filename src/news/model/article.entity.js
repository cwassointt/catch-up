import {Source} from "./source.entity.js";

export class Article{
    constructor(
        source = null,
        author = '',
        title = '',
        description = '',
        url = '',
        urlToImage = '',
        publishedAt = '',
    ){

        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);

    }

}