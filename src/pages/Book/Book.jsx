import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise)
    // console.log(data)

    // console.log(singleBook);

    const {bookName,author,bookId,image,rating,category,tags,yearOfPublishing,publisher} =singleBook
    return (
       <Link to={`/bookDetails/${bookId}`}>
         <div className="card bg-base-100 w-94 shadow-sm border p-4 shadow">
            <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
                <img className='h-[160px] object-cover hover:scale-100 transition-all hover:-rotate-2 duration-100'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body ">
             
            <div className='flex justify-center gap-10'>
                 {
                tags.map(tag=> <button className=''>{tag}</button>)
                }
            </div>
                <h2 className="card-title hover:scale-100 transition-all hover:-rotate-1 duration-100">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>book by:{publisher}</p>
                <div className='border-t-1 border-dashed'></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-secondary">{category}</div>
                    <div className="badge badge-outline bg-amber-200">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;