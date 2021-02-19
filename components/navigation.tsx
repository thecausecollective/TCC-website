import Link from 'next/link';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav'

// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation (props){

  // console.log(props.navigation[0].title)
  const [active, setActive] = useState(false);

  const handleMobileButton = () => {
    setActive(!active);
  };

  const [activeAbout, setActiveAbout] = useState(false);

  const handleAboutButton = () => {
    setActiveAbout(!activeAbout);
  };


    return(
    <>
    <nav className='flex items-center flex-wrap bg-green-400 p-6'>
         
    <div className="font-bold text-xl">
            <Link  href="/">The Cause collective</Link>
          </div> 
       {/* mobile-button */}
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleMobileButton}
        >
       <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
       
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:w-auto  `}
        >
          {/* nav-beginning*/}
          <ul className=" lg:flex items-center flex-wrap  " >
           <li className="flex px-4 outline-none  hover:bg-green-600 hover:rounded-lg hover:border-solid">
           <button
           onClick={handleAboutButton}
           >{props.navigation[0].title}
          <ul className={`${ 
            activeAbout ? '' : ' hidden transform scale-0 transition-all duration-150 ease-in-out group-hover:scale-100  '
          }  w-full lg:w-auto`}>
            <li className="  lg:absolute">{props.navigation[4].title}</li>
            <li className="  lg:absolute lg:mt-6 sm:mt-0">{props.navigation[5].title}</li>
          </ul>
         
           </button>
         
           </li>
           <li>
           <Link href="/">{props.navigation[1].title}</Link>
           </li>
           <li>
           <Link href="/">{props.navigation[2].title}</Link>
           </li>
           <li>
           <Link href="/">{props.navigation[3].title}</Link>
           </li>
        </ul> 
         
        </div>
      </nav>
    </>
)
}


  {/* {props.navigation.map(item=>(
          <li className="px-4 hover:text-white outline-none  hover:bg-green-600 hover:rounded-lg hover:border-solid" key={props.navigation.id}>
            <Link href={item.slug}>
              
            <Nav.Link href={item.slug} className="font-semibold flex">
              {item.title}
              <svg className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Nav.Link>
            </Link>
          </li>
          ))} */}


