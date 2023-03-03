import React from 'react';
const SearchInput = ({ value, onChangeText }) => {
    
React.useEffect(() => {
  
  /* Adds an event listener which fires whenever the value of our 
  input field changes and call the onChangeText function passed
  in as a prop to our component */
  let input = document.querySelector('input');
  input.addEventListener('input', onChangeText);
  
  /* Don't forget to return a cleanup function */  
  return input.removeEventListener('input', onChangeText);
 
 }, []);
return (
 <form>
  <div className="w-full relative p-2 bg-[#fcfcfc]" dir='rtl'>
    <div className='relative'>
        <input type="text"
            value={value}
            onChange={onChangeText}
            placeholder="جست و جو" 
            id="floating_outlined" className="bg-[#e0dada] invisible hover:visible block w-full text-base focus:visible focus:text-gray-900 appearance-none focus:outline-none focus:ring-0 peer  p-2 pr-10 font-bold rounded-sm" required/>
        <label for="floating_outlined" class="bg-[#e0dada] absolute w-full text-md text-bold text-gray-500 dark:text-gray-400 duration-100 transform -translate-y-4 p-2 pr-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:invisible">جست و جو در <a className='text-[#f75ee5] text-bold'>شهر تهران</a></label>
    </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>

  </div>
 </form>
);
};
export default SearchInput;