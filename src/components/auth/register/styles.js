/* @flow */
'use strict';

import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	bg: {
		flex: 1,
		width: null,
		backgroundColor: '#360982'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	loginCotainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		color: 'white',
		padding: 10,
		height: 50,
		borderColor: '#477E65',
		borderWidth: 1,
		borderRadius: 25,
		alignSelf: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		marginBottom: 8,
		width: 320,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		padding: 10,
		marginTop: 10,
		backgroundColor: '#6DB193',
		width: 320,
	},
	label: {
		width: 230,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '600',
		color: '#000',
	},
	signup: {
		fontSize: 14,
		color: '#fff',
		margin: 30,
	},
	logo: {
		marginTop: 70,
		marginBottom: 40,
	},
	logoImage: {
		width: 55,
		height: 41,
	},
});