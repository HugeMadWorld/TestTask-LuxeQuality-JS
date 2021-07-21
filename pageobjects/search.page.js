class SearchPage {

    get tsBtn() {return $('[href*="TypeScript"]')}
    get firstLink() {return $('li:nth-child(1) [class="v-align-middle"]')}

}

module.exports = new SearchPage();
