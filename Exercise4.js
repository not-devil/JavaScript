console.log("Exercise 4 : Implementing a library class");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


class library{
    constructor(book1,book2,book3)
    {
        this.Book1=book1;
        this.Book2=book2;
        this.Book3=book3;

    }
    getBookList() {
        
       let disp1 = document.getElementById('book1').innerHTML= this.Book1;
       let disp2 = document.getElementById('book2').innerHTML= this.Book2;
       let  disp3 = document.getElementById('book3').innerHTML= this.Book3;
        
    }

    issueBook(bookname, user){
        let BookName = bookname;
        let User = user;
         
        let disp4 = document.getElementById('bookName').innerHTML=BookName;
        let disp5 = document.getElementById('userName').innerHTML=User;
    }

    returnBook(bookname)
    {
        let BookName = bookname;
        let disp6 = document.getElementById('BookReturn').innerHTML=BookName;
    }

}
ex = new library("hello word" , "the monk" , "shri madbhagwat geeta");
console.log(ex.getBookList());
ex.issueBook("hello word" , "Anmol");
ex.returnBook("hello word");