import React from 'react';
const ListItem = ({ title}) => {
return (
<div className='w-full' dir='rtl'>
 <div className='flex flex-row bg-[#fcfcfc]'>
  <div className='w-2/4 text-stone-500 text-bold text-base pr-2 py-2'>{title}</div>
  <div className="absolute left-3 flex mt-3">
    <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"/>
  </div>
 </div>
 <div className="w-full relative py-0.2">
  <div className="absolute inset-0 flex items-center px-2">
    <div className="w-full border-b border-gray-300 "></div>
  </div>
</div>

</div>
);
};
export default ListItem;