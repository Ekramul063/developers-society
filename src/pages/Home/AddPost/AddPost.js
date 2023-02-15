import React from 'react';
import { FaUpload } from "react-icons/fa";

const AddPost = () => {
    return (
        <div className='px-3 mx-auto py-10'>
            <div className="flex justify-between items-center max-w-[1100px] mx-auto lg:flex-row md:flex-row flex-col-reverse">
                <div className='lg:w-[56%] md:w-[56%] w-full px-9 py-6 shadow-lg bg-white'>
                    <form>
                        <div className="form-control">
                            <input type="file" name="uploadfile" id="img" style={{ display: "none" }} />
                            <label for="img" className='text-center'>
                                <span className='flex justify-center text-3xl'> <FaUpload></FaUpload></span>
                                Click me to upload file
                            </label>

                        </div>
                        <div>
                            <textarea className="textarea textarea-bordered w-full h-[180px] mt-3" placeholder="Type here....."></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">POST</button>
                        </div>
                    </form>

                </div>
                <div className='lg:w-[42%] md:w-[42%] px-9 py-6 mb-5 lg:mb-0 md:mb-0'>
                    <p className='font-bold text-3xl text-black'>
                        "Writing a blog about coding solutions can be a great way to share your knowledge, inspire others, and make a positive impact on the developer community."
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AddPost;