import { useState } from "react"

const Modal = () => {

    const data = [ 
        {   
            id: 1,
            title: "What is Frontend Mentor, and how will it help me?",
            description: "Frontend Mentor offers realistic coding challenges to help developers improve their  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        },
        { 
            id: 2,
            title: "Is Frontend Mentor free?",
            description: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
        },
        { 
            id: 3,
            title: "Can I use Frontend Mentor projects in my portfolio?",
            description: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        },
        { 
            id: 4,
            title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            description: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
        },
    ]

    const [faqsData, setFaqsData] = useState(data)

    const toggle = (id) => {
        setFaqsData((prevFaqsData) => prevFaqsData.map((faq) => {
            return faq.id === id ?
            {...faq, isOpen: !faq.isOpen} :
            faq
        }));
    }

    const faqsItem = faqsData.map((faq) => {
        return <li 
                    key={faq.id}
                    className="[&:not(:last-child)]:border-b-[1px] border-gray-100 p-4"
                > 
                        <div className="flex items-center gap-5">
                            <h3 className="text-sm font-bold hover:text-light-purple cursor-pointer transition ease-in duration-100 ">
                                {faq.title}
                            </h3>  
                            <div 
                                className="ml-auto cursor-pointer" 
                                onClick={() => toggle(faq.id)} 
                                aria-expanded={faq.isClick ? 'true' : 'false'}
                            >
                                {   
                                    faq.isOpen ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                                        <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                                        <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
                                    </svg>  
                                }  
                            </div>        
                        </div>
                        <p
                            className={`text-xs overflow-hidden transition-all duration ${
                            faq.isOpen ? "opacity-100 max-h-96 mt-4" : "opacity-0 max-h-0"
                            }`}
                        >
                            {faq.description}
                        </p>
               </li>
    });

    return ( 
        <div className="pb-10 px-5">
            <div className="flex flex-col px-6 py-7 bg-white rounded-xl mt-[-150px] mx-auto max-w-[500px] shadow-lg">
                <div className="font-[700] text-[2.5rem] flex items-center gap-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
                    </span>
                    <span className="text-dark-purple">FAQs</span>
                </div>
                <ul>
                    {faqsItem}
                </ul>
             </div>
        </div>
     );
}
 
export default Modal;