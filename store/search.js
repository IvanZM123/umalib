export const actions = {
    searchElement ({ commit }, data) {
        const WORDKEY = data.toLocaleLowerCase();
        let content_title = document.querySelectorAll('#word-title');
        let container = document.querySelectorAll('#container');

        for (var i=0; i<content_title.length; i++) {
            let title = content_title[i].textContent.toLocaleLowerCase();

            if (title.includes(WORDKEY)) {
                container[i].style.display = '';
            }else{
                container[i].style.display = 'none';
            }
        }
    }
}