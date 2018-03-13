import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByTags, sortByTitle, setStartDate, setEndDate, sortByAuthor } from '../actions/filters';
import moment from 'moment';

export class BlogPostListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = e => {
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = e => {
		if (e.target.value === 'title') {
			this.props.sortByTitle();
		} else if (e.target.value === 'tags') {
			this.props.sortByTags();
		} else if(e.target.value === 'author') {
			this.props.sortByAuthor();
		}
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							className="text-input text-input--search"
							placeholder= {this.props.filters.sortBy !== 'tags' ?  ( this.props.filters.sortBy === 'author' ?  'Filter by Author' : 'Filter by Title' ) : 'Filter by Tags'}
							value={this.props.filters.text}
							onChange={this.onTextChange}
						/>
					</div>
					<div className="input-group__item">

						<select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
							<option value="title">Title</option>
							<option value="tags">Tags</option>
							{ this.props.auth.uid ? '' :  <option value="author">Author</option> }
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={moment('Mon Jan 01 2018 00:00:00 GMT+0000 (GMT Standard Time)')}
							endDate={this.props.filters.endDate}
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
	auth: state.auth,
	search: state.search
});

const mapDispatchToProps = dispatch => ({
	setTextFilter: text => dispatch(setTextFilter(text)),
	setStartDate: startDate => dispatch(setStartDate(startDate)),
	setEndDate: endDate => dispatch(setEndDate(endDate)),
	sortByTitle: () => dispatch(sortByTitle()),
	sortByTags: () => dispatch(sortByTags()),
	sortByAuthor: () => dispatch(sortByAuthor())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListFilters);