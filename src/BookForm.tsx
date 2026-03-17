import {useState} from 'react';
import {type IBook} from './BookStack';

interface Props {
    addBook: (book: IBook) => void;
}

function BookForm({addBook}: Props) {

    const [name, setName] = useState('');
    const [isbn, setIsbn] = useState(0);
    const [author, setAuthor] = useState('');
    const [editorial, setEditorial] = useState('');

    const handLeSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newBook: IBook = { name, isbn, author, editorial };

        addBook(newBook);
        setName('');
        setIsbn(0);
        setAuthor('');
        setEditorial('');
    }

    return (
        <form onSubmit={handLeSubmit}>
            <div className="form-grid">
                <div className="field">
                    <label>Título</label>
                    <input
                        type="text"
                        placeholder="Ej. Cien años de soledad"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>ISBN</label>
                    <input
                        type="number"
                        placeholder="Ej. 314"
                        value={isbn || ''}
                        onChange={(e) => setIsbn(Number(e.target.value))}
                    />
                </div>

                <div className="field">
                    <label>Autor</label>
                    <input
                        placeholder="Ej. Gabriel García Márquez"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Editorial</label>
                    <input
                        placeholder="Ej. Sudamericana"
                        value={editorial}
                        onChange={(e) => setEditorial(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Agregar libro</button>
        </form>
    )
}

export default BookForm;