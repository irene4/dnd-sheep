import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const useFirestore = (room) => {
	const [roomContent, setRoomContent] = useState([]);

	function createConfigIfNotExists() {
		db.collection(room)
			.doc('config')
			.get()
			.then((config) => {
				if (!config.exists) {
					db.collection(room).doc('config').set({
						type: 'config',
						backgroundColor: 'antiquewhite',
					});
				}
			});
	}

	useEffect(() => {
		const cleanup = db.collection(room).onSnapshot((snap) => {
			let content = [];
			snap.forEach((doc) => {
				content.push({ ...doc.data(), id: doc.id });
			});
			setRoomContent(content);
		});

		return () => cleanup();
	}, [room]);

	function createCard(type) {
		db.collection(room)
			.doc(Date.now().toString())
			.set({ ...newFields[type], type: type, active: true });
	}

	function deleteDocument(id) {
		db.collection(room).doc(id).delete();
	}

	function updateField(id, field, value) {
		let newValue = {};
		newValue[field] = value;
		db.collection(room).doc(id).update(newValue);
	}

	function toggleActive(id) {
		db.collection(room)
			.doc(id)
			.get()
			.then(function (doc) {
				return doc.ref.update({ active: !doc.data().active });
			})
			.catch((err) => console.log('Player not found.'));
	}

	return { roomContent, createCard, updateField, toggleActive, deleteDocument, createConfigIfNotExists };
};

const newFields = {
	player: {
		name: '',
		class: '',
		alignment: '',
		stats: {
			str: '',
			dex: '',
			con: '',
			int: '',
			wis: '',
			cha: '',
		},
		actions: '',
		notes: '',
		status: '',
		initiative: '',
		hp: {
			total: null,
			curr: null,
		},
		dice: {
			lastRoll: 0,
			sides: 20,
		},
		url: '',
	},
	enemy: {
		name: '',
		class: '',
		type: '',
		notes: '',
		status: '',
		initiative: '',
		dice: {
			lastRoll: 0,
			sides: 20,
		},
		url: '',
	},
};

export default useFirestore;
