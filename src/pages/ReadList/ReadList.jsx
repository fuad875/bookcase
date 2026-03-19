import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort,setSort] =useState("");
    const data = useLoaderData();
    //  console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [])

     const handleSort =(type) =>{
        setSort(type);
        if(type === "pages"){
              const SortedByPage =[...readList].sort((a,b)=>a.totalPages -b.totalPages);
              setReadList(SortedByPage);
        }

        if(type === "ratings"){
            const sortedByratings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByratings);
        }
     }


    return (
        <div>

            <details className="dropdown">
                <summary className="btn m-1">sort by:{sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
                    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read{readList.length}</h2>

                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;