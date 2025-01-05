
//components
import Title from './Title';
import Button from './Button';
//Icoms
import { FiSearch, FiInfo } from "react-icons/fi";

export default function ViewEarnings() {
  return (
    <section className="border border-[#0ae1068b] rounded-2xl md:p-12 sm:py-10 sm:px-7 py-5 px-4 md:mx-20 mx-5 flex flex-col gap-8">
      <Title text={'Enter your wallet address and instantly see how much you have earned by investing in the projects you have funded'} heading={['See your earnings live in ', '"My Earnings"']} small={true} br={false} />
      <div className='rounded-2xl shadow-[3px_3px_20px_#0ae106f5] p-4 flex flex-col gap-5'>
        <form className="grid md:grid-cols-[70%_2%_28%] lg:grid-cols-[83%_2%_15%] gap-y-2">
          <div className='grid grid-cols-[90%_10%] border border-[#323232] bg-[#151515] rounded-xl overflow-hidden pr-2'>
            <input 
              type="text" 
              placeholder='Enter Wallet Address...' 
              className='outline-none px-4 lg:px-6 py-2 bg-transparent text-sm sm:text-base  font-thin ' 
              aria-label="Enter wallet address" 
            />
            <div className='text-[#0ae106] text-2xl flex items-center justify-end '>
              <FiSearch />
            </div>
          </div>
          <span></span>
          <Button fill small full className={'font-semibold py-2'}> See earnings</Button>
        </form>
        <div className='border border-[#323232] bg-[#151515] rounded-xl overflow-hidden flex flex-col items-center justify-center min-h-[200px] md:min-h-[340px]'>
          <div className='text-center mx-auto max-w-[330px] md:text-[18px] text-[14px]'>
            <FiInfo className='text-4xl mb-2 mx-auto' />
            <h5 className='font-bold'>Enter an address to Begin</h5>
            <p className='font-thin leading-5'>Get instant insights into your earnings. See daily earnings and filter per project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
