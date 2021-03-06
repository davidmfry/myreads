import React, {Component} from 'react';
import Book from '../components/Book';

class Bookshelf extends Component
{
    removeWhiteSpace = (string) =>
    {
        let reg = new RegExp(" ", "g");
        return string.replace(reg, "").toLowerCase();
    };

    render()
    {


        return (
            <div className="bookshelf">
                <div className="bookshelf-title">
                    <h2>{this.props.shelfTitle}</h2>
                </div>
                <div className="bookshelf-books">
                   <ol className="books-grid">

                       {this.props.books.filter( book => book.shelf.toLowerCase() === this.removeWhiteSpace(this.props.shelfTitle))
                                        .map( (book, index) => {
                                            // Checks if the authors array is empty
                                            // If it is it sends and empty array for the authors on the book component and stops a crash
                                            // in the map function on the <Book/>
                                            if (book.authors === undefined)
                                            {
                                                book.authors = []
                                            }
                                            return (<li key={book.id}>
                                            <Book
                                                onShelfChange={this.props.onShelfChange}
                                                sentFrom="Bookshelf"
                                                currentShelf={book.shelf}
                                                id={book.id}
                                                title={book.title}
                                                authors={book.authors}
                                                image={book.imageLinks.thumbnail}
                                            />
                                        </li>)
                                        })}
                   </ol>

                </div>

            </div>
        );
    }
}

export default Bookshelf;
