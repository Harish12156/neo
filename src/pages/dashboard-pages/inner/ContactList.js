import Prof from '../../../assets/images/dashboard/send/prof.png';
import Prof2 from '../../../assets/images/dashboard/send/prof2.png';
import Prof3 from '../../../assets/images/dashboard/send/prof3.png';
import Prof4 from '../../../assets/images/dashboard/send/prof4.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoSearch } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';


function ContactList() {

    const contacts = [
        { name: 'Brooklyn Simmons', phone: '+1 9988776655', image: Prof },
        { name: 'Ann Culhane', phone: '+1 9988776655', image: Prof2 },
        { name: 'Giana Torff', phone: '+1 9988776655', image: Prof3 },
        { name: 'Haylie Schleifer', phone: '+1 9988776655', image: Prof4 },
        { name: 'James Franci', phone: '+1 9988776655', image: Prof2 }
    ];
    return (
           <>
             <h5 className="dash-head-1 mb-4">Contact List</h5>
                            <div className="input-group mb-3 contact-search-f">
                                <span className="input-group-text"><IoSearch /></span>
                                <input type="text" className="form-control" placeholder="Search Beneficiary" />
                            </div>

                            <div className='cont-list-height'>
                                {contacts.map((contact, index) => (
                                    <div key={index} className='d-flex flex-row align-items-center mb-2 gap-1'>
                                        <LazyLoadImage alt="Prof" src={contact.image} width={55} />
                                        <div>
                                            <p className='dash-c-txt-1'>{contact.name}</p>
                                            <p className='dash-c-txt-2'>{contact.phone}</p>
                                        </div>
                                        <p className='dash-c-txt-1 ms-auto'><BsThreeDotsVertical /></p>
                                    </div>
                                ))}
                            </div>
           </>
    );
}

export default ContactList;
