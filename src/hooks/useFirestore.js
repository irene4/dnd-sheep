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
	return { roomContent };
};

export default useFirestore;
