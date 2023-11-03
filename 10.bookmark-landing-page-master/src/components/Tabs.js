import React , {useState} from 'react';
import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';

const data = [
    {
        id: 1,
        image: tab1,
        button: 'Simple Bookmarking',
        title: 'Bookmark in one click',
        content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface \
                  gives you complete control over how you manage your favourite sites.',
        link: 'More Info',
    },
    {
        id: 2,
        image: tab2,
        button: 'Speedy Searching',
    
        title: 'Intelligent search',
        content: 'Our powerful search feature will help you find saved sites in no time at all. \
                  No need to trawl through all of your bookmarks.',
        link: 'More Info',
    },
    {
        id: 3,
        image: tab3,
        button: 'Easy Sharing',
        title: 'Share your bookmarks',
        content: 'Easily share your bookmarks and collections with others. Create a shareable \
                  link that you can send at the click of a button.',
        link: 'More Info',
    },
];

function Tab() {
    const [tabs] = useState(data);
    const [value, setValue] = useState(0);

    const {image, title, content, link} = tabs[value];

    return(
        <>
            <section className='px-8 pt-14 pb-20 lg:px-5 max-w-6xl mx-auto'>
                <article className='text-center'>
                    <h1 className='text-2xl leading-loose'>Features</h1>
                    <p className='mx-auto mt-1 mb-10 md:w-2/3 lg:1/2'>
                        Our aim is to make it quick and easy for you to access your favourite websites. 
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </article>

                <div>
                    <ul className='text-center text-base border-t
                                   md:flex md:justify-center md:border-none'>
                        {tabs.map( (tab , index) => (
                            <li key = {tab.id} className='border-b'>
                                <button 
                                  className={`py-4 ${index === value && 'border-b-4 border-red_set w-1/2'} hover:text-red_set
                                             md:w-full md:px-10 md:pb-7`}
                                  onClick={ () => setValue(index) }  
                                >
                                    {tab.button}
                                </button>
                            </li>
                        ))}
                    </ul>
                    
                    <div className='mt-18 md:grid md:grid-cols-2 md:gap-16 md:place-items-center lg:gap-32'>
                        <figure>
                            <img src={image} alt="" className='block w-full mx-auto'/>
                            <div className='background-left'></div>
                        </figure>

                        <article className='text-center mt-20 md:text-left md:mt-0'>
                            <h2 className='text-2xl leading-loose py-0.5 md:mb-4'> {title} </h2>
                            <p className='md:w-4/5'> {content} </p>
                            <button
                             className='mt-4 py-2 px-5 bg-blue_set border-2 border-blue_set rounded-md text-white shadow-lg 
                                      hover:bg-white hover:text-blue_set active:translate-y-0.5 md:mt-8'>
                                {link}
                            </button>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tab;