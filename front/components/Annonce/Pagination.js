import React, {useEffect, } from "react";
import Link from "next/link";


export default function Pagination(props) {
	const items = Array.from({ length: props.last_page }, (_, i) => i)

	return (
		<>
			<div className="py-2">
				<nav className="block">
					<ul className="flex pl-0 rounded list-none flex-wrap">
						<li>
							<a href={`?page=1`} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-angle-double-left -mr-px"></i>
							</a>
						</li>
						<li>
							<a href={`?page=${props.current_page-1}`} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-chevron-left -ml-px"></i>
							</a>
						</li>
							{items.map((num) => (
								<li>
									<a href={`?page=${num}`} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 text-orange-500 bg-gray-500">
										{num}
									</a>
								</li>
							))}
						<li>
							<a href={`?page=${props.current_page+1}`} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-chevron-right -mr-px"></i>
							</a>
						</li>
						<li>
							<a href={`?page=${props.last_page}`} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-angle-double-right -mr-px"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
