import React from 'react';

const CategoryGrid = () => {
    const categories = [
        {
            title: "Digestive",
            imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/4c/4cf73959-a1f9-4829-8f0f-eae4d5fd1475.638724424360000000.jpg",
            link: "#"
        },
        {
            title: "Daily & Immunity",
            imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/5c/5c551dfd-b9a7-4bf7-a84f-83d75e79f646.638724424360000000.jpg",
            link: "#"
        },
        {
            title: "Women's Intimate",
            imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/56/56de93e8-b22b-4440-b075-459d54a3fcb0.638724424390000000.jpg",
            link: "#"
        },
        {
            title: "Babies & Children",
            imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/ad/ad7270d6-c824-438f-8c58-8a4396ff0935.638724424450000000.jpg",
            link: "#"
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            High quality live cultures, backed by credible science
                        </h2>
                        <p className="text-lg text-gray-600">
                            At Optibac we specialise entirely in live cultures and have many different supplements 
                            for different life stages and individual needs.
                        </p>
                    </div>

                    {/* Category Grid */}
                    <ul className="md:w-1/2 grid grid-cols-2 gap-4">
                        {categories.map((category, index) => (
                            <li key={index} className="group relative overflow-hidden rounded-lg">
                                <a href={category.link} className="block">
                                    <img 
                                        src={category.imageUrl} 
                                        alt={`${category.title} probiotics`}
                                        className="w-full h-48 object-cover transition-opacity group-hover:opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-between p-4">
                                        <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
