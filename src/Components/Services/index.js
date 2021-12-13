import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronForward } from "react-icons/io5";
import './services.css';

const Data = [
    {
        id: 1,
        Title: 'Healthcare Professionals',
        des: 'Care professionals, Admiral Nurses, Dementia Specialist and Cognitive behavioural specialist can benefit from COSMA and improve patients quality of life.',
        Link: '/healthcare-professionals',
        Class: 'borderOne'
    },
    {
        id: 2,
        Title: 'Healthcare Organisations',
        des: 'Care or Home Care organisations will have access to monitor patients psychological  and behavioural data to improve care plan and also ease carers stress & anxieties.',
        Link: '/healthcare-organisations',
        Class: 'borderTwo'
    },
    {
        id: 3,
        Title: 'Research Organisations',
        des: 'Research communities looking into gamification and cognitive assessment for cognitive impairment and dementia conditions can use COSMA for their research studies to measure different parameters.',
        Link: '/research-organisations',
        Class: 'borderThree'
    },
    {
        id: 4,
        Title: 'Dementia Community',
        des: 'Dementia Communities can get benefit from COSMA with reminiscence and group therapy sessions where element of fun and mood improvements are be promoted on a regular session basis.',
        Link: '/dementia-communities',
        Class: 'borderFour'
    },
]



export default function Services() {
    return (
        <div className='serviceswrap'>
            <div className='container-fluid m-auto'>
                <h1 className='servicesTitle'>Improve Dementia Care Quality with COSMA</h1>
                <div className="row">
                    {Data.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className={'card servicesCard ' + (item.Class)}>
                                <div className="card-body text-center">
                                    <h1 className="card-title text-center">{item.Title}</h1>
                                    <p className="card-text">
                                        {item.des}
                                    </p>
                                    <Link to={item.Link}>
                                        <a className="servicesBtn">Learn More<span><IoChevronForward className='right' /></span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )
}