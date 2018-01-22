// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
export const sortByTags = () => ({
	type: 'SORT_BY_TAGS',
});

// SORT_BY_TILE
export const sortByTitle = () => ({
	type: 'SORT_BY_TITLE',
});

//SORT_BY_AUTHOR
export const sortByAuthor = () => ({
	type: 'SORT_BY_AUTHOR'
});

// SET_START_DATE
export const setStartDate = startDate => ({
	type: 'SET_START_DATE',
	startDate,
});

// SET_END_DATE
export const setEndDate = endDate => ({
	type: 'SET_END_DATE',
	endDate,
});
