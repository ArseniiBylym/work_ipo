import axios from './axiosConfig';
import history from './history'
import ls from 'local-storage';

export function confirmDelete(type) {
	console.log('this', this)
	const token = getToket()
	if (token) {
		axios.delete(`/adminpanel/${type}/${this.state.DeleteItemId}`, {
			headers: {
				token: token
			}
		})
			.then(() => {
				getTableData();
			})
			.catch((error) => {
				console.error('error', error)
			})
	} else {
		history.push('/')
	}
	this.toggleConfirm()
}

export function saveChanges(type, item) {
	console.log('this', this)
	const token = getToket()
	if (token) {
		if (!item.id) {
			axios.post(`/adminpanel/${type}/`, item, {
				headers: {
					token: token
				}
			})
				.then(() => {
					getTableData();
				})
				.catch((error) => {
					console.error('error', error)
				})
		} else {
			axios.put(`/adminpanel/${type}/${item.id}`, item, {
				headers: {
					token: token
				}
			})
				.then(() => {
					getTableData();
				})
				.catch((error) => {
					console.error('error', error)
				})
		}
	} else {
		history.push('/')
	}
	this.toggleTableForm()
}

export function getTableData(type) {
	console.log('this', this)
	debugger
	this.setState({ isLoading: true });
	const token = getToket()
	axios.get(`/adminpanel/${type}`, {
		headers: {
			token: token
		}
	})
		.then((response) => {
			if (response.statusText === "OK") {
				this.setState({ tableData: response.data.data })
			}
		})
		.then(() => this.setState({ isLoading: false }))
		.catch((error) => {
			console.error('error', error)
		})
}

function getToket() {
	const token = ls.get('token')
	return !!token ? token : !!token
}