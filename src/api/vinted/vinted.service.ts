
export class VintedService {

    async search() {
        const vinted = require('vinted-api');

        vinted.search('https://www.vinted.it/catalog?search_text=switch&search_id=14062421350&time=1728232499').then((posts) => {
            console.log(posts);
        });
    }
}

export default new VintedService();