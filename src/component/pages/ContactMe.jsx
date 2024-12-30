import React from 'react'
import Contact from '../layouts/Contact'
import Container from '../Container'
import Hashhh from '../icons/Hashhh'
import Flex from '../Flex'
import Heading from '../Heading'
import { FaTwitter } from "react-icons/fa6";

const ContactMe = () => {
  return (

    <>
    <Contact/>
    <div className="">
        <Container>
            <div className=" pb-[10px]" >
            <Flex className={"justify-between pb-[30px] pt-[30px] items-center"}>
                        <div className=""> <div className="flex items-center">
                            <div className="flex items-center">
                                <Hashhh />
                                <Heading text={'all media'} as={'h2'} className={'font-medium text-[32px] text-white '} />
                            </div>

                        </div></div>

                    </Flex>
                <div className="flex pb-[50px]">
                    <div className="flex mr-6">
                        <FaTwitter className='text-[25px] text-menuColor'/>
                        <Heading text={'@elias'} as={"p"} className={'text-[16px] text-menuColor'}/>
                    </div>
                    <div className="flex">
                        <FaTwitter className='text-[25px] text-menuColor'/>
                        <Heading text={'@elias'} as={"p"} className={'text-[16px] text-menuColor'}/>
                    </div>
                    

                </div>

            </div>
        </Container>
    </div>
    </>

   
  )
}

export default ContactMe