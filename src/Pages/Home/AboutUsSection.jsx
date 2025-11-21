import { Link } from 'react-router';
import aboutBanner from '../../assets/aboutPhoto.jpg'
import aboutImg from '../../assets/aboutUsImage.gif'
import infoImg from '../../assets/informationImg.gif'

const AboutUsSection = () => {
    return (
        <div className='flex gap-10 pt-3 mb-10'>
            <div>
                <img className='w-[850px]' src={aboutBanner} alt="" />
            </div>

            <div>
                <img className='pb-4' src={aboutImg} alt="" />
                <p className='text-[13px] font-extralight leading-[1.8]'>MY SOFTAKE PVT. LTD. is an international company working in many sectors such as manufacturing, import & export, IT services, travel, logistics, and construction. Our vision is to build trust and connect Bangladesh, Japan, and China with the global market.</p>
                <img className='pt-4' src={infoImg} alt="" />

                <div className='bg-[#F4F4F4] text-[13px] noto-sans-jp py-5'>
                    <div className='flex gap-8 p-2'>
                        <dt>2025/07/15</dt>
                        <Link to="/"><p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>Notice of office Closure</p></Link>
                    </div>
                    <div className='border-b border-gray-300'></div>

                    <div className='flex gap-8 p-2'>
                        <dt>2025/04/08</dt>
                        <Link to="/"><p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>Notice of office closure</p></Link>
                    </div>
                    <div className='border-b border-gray-300'></div>

                    <div className='flex gap-8 p-2'>
                        <dt>2024/11/27</dt>
                        <Link to="/"><p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>Winter holiday</p></Link>
                    </div>
                    <div className='border-b border-gray-300'></div>

                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;