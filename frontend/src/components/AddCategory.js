import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "./AddCategory.css";
import toast from 'react-hot-toast'
import { Spinner } from '@chakra-ui/react'

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../config";


export default function AddCategory() {


    const [category_name, setCatName] = useState("");
    const [category_desc, setCatDesc] = useState("");
    const [Status, setCatStatus] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    useEffect(() => {

        const getCategory = async () => {
            const result = await axios.get(`http://localhost:8070/categories/get/${params.id}`);
            const item = result.data;
            setCatName(item.category_name);
            setCatDesc(item.category_desc);
            setCatStatus(item.Status);

        }

        if (params.id) {
            getCategory();
        }


    }, [params.id]);

    const handleUpload = async (e) => {

        const file = e.target.files[0];
      
        const formData = new FormData();
        formData.append("image", file);
        const result = await axios.post("http://localhost:8070/upload", formData);
        setImage(result.data.path);
        console.log(image);
        

    }




    function sendCategoryData(e) { //pass the event as argument

        if (params.id) {

            e.preventDefault();
            const newCaregory = {

                category_name,
                category_desc,
                Status
            }

            //1st parameter backend pakge url
            axios.put(`http://localhost:8070/categories/update/${params.id}`, newCaregory).then(() => {


                setCatName("");
                setCatDesc("");
                setCatStatus("");

                toast.success('Category is successfully Updated!!');

                setTimeout(() => {

                    navigate("/c_list");
                }, 1000);

            }).catch((err) => {

                alert(err);
            })


        }






        else {

            e.preventDefault();
            const newCaregory = {

                category_name,
                category_desc,
                Status
            }

            //1st parameter backend pakge url
            axios.post("http://localhost:8070/categories/add_category", newCaregory).then(() => {


                setCatName("");
                setCatDesc("");
                setCatStatus("");
                <Spinner color='red.500' />
                toast.success('Category is successfully Added!!');

                setTimeout(() => {

                    navigate("/c_list");
                }, 1000);

            }).catch((err) => {

                alert(err);
            })


        }


    }

    return (

        <>

        <div className="add-category-container">
            <Form onSubmit={sendCategoryData} enctype="multipart/form-data">
                <Form.Group className="mb-3" controlId="catname">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control onChange={(e) => {
                        setCatName(e.target.value);
                    }} value={category_name} type="text" placeholder="Enter Category Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="catdes">
                    <Form.Label>Category Description</Form.Label>
                    <Form.Control onChange={(e) => {
                        setCatDesc(e.target.value);
                    }} type="text" value={category_desc} placeholder="Enter Category Description" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Category Status</Form.Label>
                    <Form.Control onChange={(e) => {
                        setCatStatus(e.target.value);
                    }} type="number" value={Status} placeholder="Enter status 0 or 1" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Category Image Upload</Form.Label>
                    <Form.Control type="file" onChange={handleUpload} />

                </Form.Group>
             
                
                


                {image && (
          <img src={`${api}${image}`} width="100px" height="100px" alt="" />
        )}



                <Button variant="primary" type="submit ">
                    {params.id ? "Save Change" : "Add"}
                </Button>
            </Form>

           

        </div>
        
       
        </>
    );
}
