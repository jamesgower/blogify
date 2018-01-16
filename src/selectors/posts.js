import moment from 'moment';

export default (posts, {text, sortBy, startDate, endDate}) => {
	return posts.filter((post) => {
		const createdAtMoment = moment(post.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
		if(sortBy === 'title') {
			return startDateMatch && endDateMatch && textMatch;
		} else { //NEED TO ADD TAGS MATCH
			return startDateMatch && endDateMatch && textMatch;			
		}
	}).sort((a,b) => {
		return a.createdAt < b.createdAt ? 1 : -1;
	});
};
