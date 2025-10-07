//! Teacher example 

class book {
    constructor () {
        this.title = ''
        this.pages = 0
        this.author = ''
        this.genre = []
        this.binding = ''
        this.publishingCo = ''
        this.review = 1
    }

    getPages() {
        console.log('The book ' + this.title + ' has ' + this.pages + ' pages.')
        return 
    }

    getGenres() {
        console.log('Genre(s) of ' + this.title + ': ', ...this.genre)
        return
    }

    getAuthor() {
        console.log(this.title + ' is a book written by ' + this.author)
        return

    }

    updateReview(num) {
        if (num >= 1 && num <= 5) {
            this.review = num
        }
        console.log('You gave ' + this.title + ' a review of ' + num + ' stars.')
        return num
    }
}