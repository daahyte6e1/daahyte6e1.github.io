import {DefaultButton} from "@/components/Footer/DefaultButton";

const Footer = ({ className }: {className: string}) => {
    return (
        <footer className={className}>
            <DefaultButton className='button' text='Boost' />
            <DefaultButton className='button' text='Stats' />
            <DefaultButton className='button' text='Earn' />
            <DefaultButton className='button' text='Fren' />
            <DefaultButton className='button' text='?' />
        </footer>
    );
};

export {Footer};