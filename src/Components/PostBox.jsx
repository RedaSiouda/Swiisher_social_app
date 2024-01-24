import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import axios from 'axios';
import '../CSS/PostBox.css';
import { Button } from '@mui/material';




function PostBox() {
    const [swiishData, setSwiishData] = useState({
        swiish: '',
        swiishPic: null,
        posts: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSwiishData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const swiishPic = e.target.files[0];
        setSwiishData((prevState) => ({
            ...prevState,
            swiishPic,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { swiish, swiishPic } = swiishData;

        const swiishSubmitted = new FormData();
        swiishSubmitted.append('swiish', swiish);

        if (swiishPic) {
            swiishSubmitted.append('swiishPic', swiishPic);
        }

        try {
            await axios.post('http://localhost:3001/api/v1/swiish', swiishSubmitted, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Successfully swiished');
        } catch (err) {
            console.error('Error submitting swiish:', err.response.data);
        }
    };

    useEffect(() => {
        const fetchSwiish = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/getSwiish');
                setSwiishData((prevState) => ({
                    ...prevState,
                    posts: response.data.posts || [],
                }));
            } catch (err) {
                console.log('Error in fetching data:', err);
            }
        };

        fetchSwiish();
    }, []);

    return (
        <div className='postBox'>
            <div className='postBox__header'>
                <div className='postBox__containAvatar'>
                    <Avatar src='https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-1198147566-e1701133343267.jpg?w=1024' />
                </div>
                <div className="postBox__userData">
                    <p className="postBox__displayName">Dummy test</p>
                </div>
            </div>
                    <form className='postBox__form'>
                        <input
                            name='swiish'
                            value={swiishData.swiish || ''}
                            onChange={handleChange}
                            placeholder='Swiish your pet Thought'
                            type='text'
                            className='postBox__input'
                        />
                        <input
                            name='swiishPic'
                            onChange={handleFileChange}
                            type='file'
                            className='postBox__inputFile'
                        />
                        <div className="postBox__containButton">
                            <Button onClick={handleSubmit} className='postBox__btn'>Swiish</Button>
                        </div>
                    </form>
        </div>
    );
}

export default PostBox;
