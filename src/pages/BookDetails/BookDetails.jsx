import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams(); //router id 
    const bookId = parseInt(id); // convert string to number

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image } = singleBook || {};


    const handleMarkAsRead = (id) => {

        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     didOpen: () => {
        //         // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //         MySwal.showLoading()
        //     },
        // }).then(() => {
        //     return MySwal.fire(<p>Shorthand works too</p>)
        // })

        toast("Wow so easy!");
        addToStoredDB(id);
    }
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt='' />
            <h5>{bookName}</h5>
              <ToastContainer />
            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add To WishList</button>
        </div>
    );
};

export default BookDetails;