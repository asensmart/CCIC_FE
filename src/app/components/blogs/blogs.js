'use client';
import { useState } from "react";

const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    // const [first, setfirst] = useState(second)

    const blogs = [
      { id: 1, name: "Blog 1", content: "This is the content of Blog 1" },
      { id: 2, name: "Blog 2", content: "This is the content of Blog 2" },
      { id: 3, name: "Blog 3", content: "This is the content of Blog 3" },
    ];

    return (
        <div className=" bg-white text-black p-2 grid grid-cols-3 gap-4">
            {/* Left side: Blog list */}
            <div className="col-span-1 border-r border-gray-300 p-2">
                <h2 className="font-bold mb-2">Blog List</h2>
                <ul>
                    {blogs.map((blog) => (
                        <li
                            key={blog.id}
                            className={`cursor-pointer p-2 ${
                                selectedBlog?.id === blog.id ? "bg-gray-200" : ""
                            }`}
                            onClick={() => setSelectedBlog(blog)}
                        >
                            {blog.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side: Blog content */}
            <div className="col-span-2 p-2">
                {selectedBlog ? (
                    <div>
                        <h2 className="font-bold text-xl mb-2">{selectedBlog.name}</h2>
                        <p>{selectedBlog.content}</p>
                    </div>
                ) : (
                    <p>Select a blog to view its content</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
