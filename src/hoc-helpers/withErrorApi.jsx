export const withErrorApi = View => {
	const [errorApi, setErrorApi] = useState(false);

	return props => (
		<>
			{errorApi ? (
				<h2>Error...</h2>
			) : (
				<View setErrorApi={setErrorApi} {...props} />
			)}
		</>
	);
};
