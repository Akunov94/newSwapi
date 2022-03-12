import { useEffect, useState } from 'react';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';
import PeopleList from '../../components/PeoplePage/PeopleList';
// import styles from './PeoplePage.module.css';

const PeoplePage = () => {
	const [people, setPeople] = useState(null);

	const getResource = async url => {
		const res = await getApiResource(url);
		if (res) {
			let { results } = res;
			let peopleList = results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImage(id);

				return { name, id, img };
			});

			setPeople(peopleList);
			// setErrorApi(false);
		} else {
			// setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);
	return (
		<>
			<h2>Navigation </h2>
			{people && <PeopleList people={people} />}
		</>
	);
};

export default PeoplePage;
