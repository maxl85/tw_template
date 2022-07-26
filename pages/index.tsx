import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import Block from '../components/Block';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto">
            <header className="flex flex-wrap min-h-[70px] mb-14">
                <div className="basis-full px-2 mb-2 md:basis-3/12 md:mb-0">
                    <Block title="Логотип"></Block>
                </div>
                <div className="basis-full px-2 mb-2 md:basis-9/12 md:mb-0">
                    <Block title="Навигация"></Block>
                </div>
            </header>

            <section className="flex flex-wrap min-h-[250px] mb-14">
                <div className="basis-full px-2 mb-2 md:basis-6/12 md:mb-0">
                    <Block title="Промо текст"></Block>
                </div>
                <div className="basis-full px-2 mb-2 md:basis-6/12 md:mb-0">
                    <Block title="Промо фото"></Block>
                </div>
            </section>

            <section className="flex flex-wrap min-h-[70px] mb-14">
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
                <div className="basis-full px-2 mb-2 sm:basis-6/12 md:basis-4/12 lg:basis-2/12 lg:mb-0">
                    <Block title="Клиент"></Block>
                </div>
            </section>
        </div>
    );
};

export default Home;
