class CareersPage {

    get openposBtn() {return $('[href="#positions"]')}
    get positionLabels() {return $$('h3[class="float-left f3-mktg text-normal py-4"]')}

    async printOutPositions(){
        for (let index = 0; index <= 100; index++) {
            if (this.positionLabels[index]===undefined) {
                break
            }
            console.log(await this.positionLabels[index].getText())
        }
    
    }
}

module.exports = new CareersPage();
