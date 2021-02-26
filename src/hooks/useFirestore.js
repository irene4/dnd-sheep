import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const useFirestore = (room) => {
	const [roomContent, setRoomContent] = useState([]);

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

	function createPlayer() {
		db.collection(room)
			.doc()
			.set({ ...newFields, type: 'player', active: true });
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

	return { roomContent, createPlayer, updateField, toggleActive };
};

const newFields = {
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
	hp: {
		total: 0,
		curr: 0,
	},
	dice: {
		lastRoll: 0,
		sides: 20,
	},
	url: '',
};

export default useFirestore;
