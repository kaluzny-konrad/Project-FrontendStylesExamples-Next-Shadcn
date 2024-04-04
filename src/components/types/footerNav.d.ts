export class FooterNav {
    title: string;
    sites: { title: string; url: string }[];

    constructor(title: string, sites: { title: string; url: string }[]) {
        this.title = title;
        this.sites = sites;
    }
}