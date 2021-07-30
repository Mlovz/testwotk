import React, { useState } from 'react'
import Logo from '../../images/RR_Logo.png'
import ArrowRight from '../../images/arrow-right.png'
import {motion} from 'framer-motion'
import SidebarMenu from './sidebaritem/SidebarMenu'

const SiderbarLeft = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <motion.div
        initial={{maxWidth: '96px', width: '100%'}}
        animate={{maxWidth: open ? '360px' : '96px', width: '100%'}}
         className='sideleft'>
            <div className="sideleft__wrap">
                <div className="sideleft__logo">
                    <div className="sideleft__logo__text">
                        <img onClick={() => setOpen(true)} style={{paddingLeft: open ? '36px' : '23px'}} src={Logo} alt="" />
                        <span style={{opacity: open ? '1' : '0'}}>Dapplets Project.</span>
                    </div>
                    <img onClick={() => setOpen(false)} src={ArrowRight} alt="" />
                </div>

                <SidebarMenu open={open} setOpen={setOpen}/>
                
                
            </div>
        </motion.div>
    )
}

export default SiderbarLeft
