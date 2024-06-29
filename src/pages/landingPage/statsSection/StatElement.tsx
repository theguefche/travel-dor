import AnimatedCounter from '@components/animated/AnimatedCounter';
import { Icon } from '@iconify/react/dist/iconify.js';
import { StatElementProps } from '@typing/StatElementProps';



const statElement = ({ icon, title, value, extra, isPercentage }: StatElementProps) => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <Icon icon={icon} fontSize={50} />
        <section className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-sub-heading">
                {title}
            </dt>

            <dd className="order-1 text-5xl flex">{extra}&nbsp;<AnimatedCounter from={0} to={value} /><span className='order-2'>&nbsp;{isPercentage && "%"}</span></dd>

        </section>
    </div>
);


export default statElement