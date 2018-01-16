export default (tags, text) => {
	for(var i=0; i<tags.length; i++) {
		if(tags[i].toLowerCase().includes(text.toLowerCase())) {
			return true;
		}
	}
	return false;
};
