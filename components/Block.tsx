import React from 'react';

interface BlockProps {
    title?: string;
}

const Block: React.FC<BlockProps> = ({ title }) => {
    return <div className="bg-zinc-300 border border-zinc-500 p-5 text-center h-full">{title}</div>;
};

export default Block;
