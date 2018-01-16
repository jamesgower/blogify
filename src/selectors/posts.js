import moment from 'moment';
import checkTags from '../selectors/tags';

export default (posts, {text, sortBy, startDate, endDate}) => {
	return posts.filter((post) => {
		const createdAtMoment = moment(post.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
		const tagsMatch = checkTags(post.tags, text);
		if(sortBy === 'tags') {
			return startDateMatch && endDateMatch && tagsMatch;			
		} else {
			return startDateMatch && endDateMatch && textMatch;
		}
	}).sort((a,b) => {
		return a.createdAt < b.createdAt ? 1 : -1;
	});
};
