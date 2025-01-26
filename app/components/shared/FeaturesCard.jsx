import React from 'react';

const FeaturesCard = ({ icon: Icon, title, disc }) => {
    return (
        <div className="bg-white shadow rounded-xl w-[160px] md:w-[200px] flex gap-3 px-4 py-5 items-center">
            {/* Render the passed icon component */}
            <Icon className="text-4xl text-green-400" />
            <div>
                <h4 className="md:text-lg font-medium">{title}</h4>
                <p className="text-xs md:text-sm text-zinc-500">{disc}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;
