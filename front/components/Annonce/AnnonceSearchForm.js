import React, {useEffect, useState} from "react"
import { Form, Field } from 'react-final-form';
import Link from "next/link";
import {fuelOptions,
	kmMinFilterOptions,
	kmMaxFilterOptions,
	priceMinFilterOptions,
	priceMaxFilterOptions,
	boiteFilterOptions,
	statusFilterOptions,
	minYearFilterOptions,
	maxYearFilterOptions,
	marqueFilterOptions
} from "../../helpers/constant";
import {filterCars} from 'service/actions/cars';
import {connect} from "react-redux";
import {useRouter }  from "next/router";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
	await sleep(300)
	window.alert('Nous vous envoyer le lien qui vous permettra de réinitialiser votre mot de passe.')
}

const AnnonceSearchForm = ({
							  dispatch,
							  loading,
							  cars,
							  hasErrors
						  }) => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const router = useRouter();
	useEffect(() => {
		fetch("https://www.automobile.fr/ajax/car/3500/models")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result.items);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	const onSubmit = async (values) => {
		const per_page_req = router.query.perPage ? router.query.perPage : 10;
		try {
			if (cars) {
				await fetchCars(router.query.page, per_page_req, postal_code, price_min, price_max, km_min, km_max, brand, model, owner_type, fuel, transmission)
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<section className="annonceSearchForm mt-4">
				<div className="container px-4 mx-auto border-2 rounded bg-orange-500 py-2 z-40">
					<Form
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, pristine, values }) => (
							<form onSubmit={handleSubmit}>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-3 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="brand" component="select" value={values.brand}  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{marqueFilterOptions.map(marqueFilterOption => (
													<option
														value={marqueFilterOption.value}>{marqueFilterOption.label}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-3 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="model" component="select" value={values.model} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{marqueFilterOptions.map(marqueFilterOption => (
													<option
														value={marqueFilterOption.model}>{marqueFilterOption.model}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-3 flex-1">
										<Field name="postal_code">
											{({ input, meta }) => (
												<div className="relative w-full mb-3">
													<input
														{...input}
														type="text"
														value={values.postal_code}
														className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
														placeholder="code postal de ville ou région"
													/>
												</div>
											)}
										</Field>
									</div>

								</div>
								<div className="w-full"></div>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-4 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="km_min" component="select" value={values.km_min} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{kmMinFilterOptions.map( kmMinFilterOption => (
													<option
														value={kmMinFilterOption.value}>{kmMinFilterOption.label}</option>
												))}
											</Field>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-4 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="km_max" component="select"  value={values.km_max} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{kmMaxFilterOptions.map(kmMaxFilterOption => (
													<option
														value={kmMaxFilterOption.value}>{kmMaxFilterOption.label}</option>
												))}
											</Field>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-4 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="price_min" component="select" value={values.price_min} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{priceMinFilterOptions.map(priceMinFilterOption => (
													<option
														value={priceMinFilterOption.value}>{priceMinFilterOption.label}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-4 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="price_max" component="select" value={values.price_max} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{priceMaxFilterOptions.map(priceMaxFilterOption => (
													<option
														value={priceMaxFilterOption.value}>{priceMaxFilterOption.label}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center mt-2">
									<button type="button" className="mt-2 text-lg px-2" onClick={() => setNavbarOpen(!navbarOpen)}> plus de critères ? <i
										className="fas fa-chevron-circle-down"></i></button>
									<div
										className={
											"flex flex-wrap mt-4" +
											(navbarOpen ? " block" : " hidden")
										}
										id="example-navbar-warning"
									>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="fuel"  value={values.fuel} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{fuelOptions.map(fuelOption => (
															<option
																value={fuelOption.value}>{fuelOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="transmission" value={values.transmission} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{boiteFilterOptions.map(boiteFilterOption => (
															<option
																value={boiteFilterOption.value}>{boiteFilterOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="owner_type" component="select"  value={values.owner_type} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{statusFilterOptions.map(statusFilterOption => (
															<option
																value={statusFilterOption.value}>{statusFilterOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
										<div className="w-full"></div>
										<div className="w-full px-4 flex-1 mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3">
												<Field name="year_min" component="select"  value={values.year_min} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
													{minYearFilterOptions.map(minYearFilterOption => (
														<option
															value={minYearFilterOption.value}>{minYearFilterOption.label}</option>
													))}
												</Field>
												<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
													<i className="fas fa-angle-down text-2xl my-2"></i>
												</div>
											</div>
										</div>
										<div className="w-full px-4 flex-1 mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3">
												<Field name="year_max" component="select"  value={values.year_max} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
													{maxYearFilterOptions.map(maxYearFilterOption => (
														<option
															value={maxYearFilterOption.value}>{maxYearFilterOption.label}</option>
													))}
												</Field>
												<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
													<i className="fas fa-angle-down text-2xl my-2"></i>
												</div>
											</div>
										</div>
									</div>
								</div>

							</form>
						)}
					/>
					<div className="w-full px-4 flex-1 text-center mt-2">
						{router.pathname === '/annonces' ? (
							<button
								className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
								type="button"
							>
								Recherche
							</button>
						):(
							<button
								className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
								type="button"
							>
								<Link href="/annonces">
									<a
										href="#pablo"
										className={
											"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
										}
									>
										Recherche
									</a>
								</Link>
							</button>
						)}

					</div>
				</div>
			</section>
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	cars: state.carsReducer.cars,
	current_page: state.carsReducer.current_page,
	from: state.carsReducer.from,
	to: state.carsReducer.to,
	per_page: state.carsReducer.per_page,
	last_page: state.carsReducer.last_page,
	total: state.carsReducer.total,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(AnnonceSearchForm)
