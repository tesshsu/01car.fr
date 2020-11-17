import React from 'react';

const lists = [
	  { icon: "far fa-smile text-lg mr-1", name: "Note de confiance" },
	  { icon: "fas fa-unlock-alt text-lg mr-1", name: "Sécuriser au maximum" },
	  { icon: "fas fa-certificate text-lg mr-1", name: "Vendre facilement" }
  ];
export default function PubContentThreeIcons() {
  return (
    <>
	 <div className="flex justify-center">
         {lists.map(list => (   
			<div className="mr-4 p-3 text-center">                       
				<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                    <i className={list.icon}></i>
                </span>
                <span className="text-sm text-gray-500">{list.name}</span>
            </div>  
		  ))}
      </div>
    </>
  );
}
