import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function CardAcceptCondition() {
  return (
    <>
	    <div>
			<label className="inline-flex items-center cursor-pointer">
				<input
								id="customCheckLogin"
								type="checkbox"
								checked="checked"
								className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
				/>
				    <span className="ml-2 text-sm font-semibold text-gray-700">
					J'ai lu et j'accepte les{" "}
					<Link href="/footer/policy">
						<a
							href="#"
							className="text-blue-500"							
						>
							Politique de confidentialité de 01car.fr
						</a>
					</Link>
					</span>
			</label>
		</div>		
    </>
  );
}
