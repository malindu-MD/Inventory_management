import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AllCategory.css";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
//useEffect is what do you wat with rendering component

function AllCategory() {

    const [category, setCategory] = useState([]);

    useEffect(() => {


        const getCategory = async () => {

            const result = await axios.get("http://localhost:8070/categories/");
            setCategory(result.data);

        }



        getCategory();


    }, [])


    return (

        <div className='category-container'>

            <h2 className='subtitel'>All Category</h2>
            <TableContainer overflowY='auto' maxHeight='80vh'>
                <Table variant='striped' colorScheme='gray'>

                    <Thead>
                        <Tr >
                            <Th><b>Category Code</b></Th>
                            <Th><b>Category Name</b></Th>
                            <Th ><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            category.map((item) => (

                                <Tr key={item.id}>

                                    <Td>#{item.Status}</Td>
                                    <Td>{item.category_name}</Td>
                                    <Td><Link to={`/add_product/${item._id}`}><Button colorScheme='blue'>Edit</Button></Link>
                                    </Td>



                                </Tr>


                            ))
                        }

                    </Tbody>

                </Table>


            </TableContainer>


        </div>



    );

}

export default AllCategory;