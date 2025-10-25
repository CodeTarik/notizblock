// Simple example script for Notizblock
console.log('script.js geladen');

document.addEventListener('DOMContentLoaded', () => {
	const heading = document.getElementById('main-heading');
	if (heading) {
		// simple toggle feedback on click
		const base = heading.textContent || 'Notizen';
		heading.addEventListener('click', () => {
			heading.textContent = heading.textContent === base ? base + ' — (geklickt)' : base;
		});
	}

	// Notes functionality
	const STORAGE_KEY = 'notizblock_notes_v1';
	const input = document.getElementById('note-input');
	const saveBtn = document.getElementById('save-note');
	const clearInputBtn = document.getElementById('clear-input');
	const clearAllBtn = document.getElementById('clear-all');
	const notesList = document.getElementById('notes-list');

	function loadNotes(){
		try{
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) : [];
		}catch(e){
			console.error('Fehler beim Laden der Notizen', e);
			return [];
		}
	}

	function saveNotes(notes){
		try{
			localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
		}catch(e){
			console.error('Fehler beim Speichern der Notizen', e);
		}
	}

	function renderNotes(){
		const notes = loadNotes();
		notesList.innerHTML = '';
		if(notes.length === 0){
			notesList.textContent = 'Keine Notizen gespeichert.';
			return;
		}

		notes.slice().reverse().forEach(note => {
			const item = document.createElement('div');
			item.className = 'note-item';

			const text = document.createElement('div');
			text.className = 'note-text';
			text.textContent = note.text;

			const meta = document.createElement('div');
			meta.className = 'note-meta';
			const dt = new Date(note.id);
			meta.textContent = dt.toLocaleString();

			const actions = document.createElement('div');
			actions.className = 'note-actions';
			const del = document.createElement('button');
			del.textContent = 'Löschen';
			del.addEventListener('click', () => {
				const remaining = loadNotes().filter(n => n.id !== note.id);
				saveNotes(remaining);
				renderNotes();
			});
			actions.appendChild(del);

			item.appendChild(text);
			item.appendChild(meta);
			item.appendChild(actions);
			notesList.appendChild(item);
		});
	}

	function addNote(text){
		if(!text || !text.trim()) return;
		const notes = loadNotes();
		notes.push({ id: Date.now(), text: text.trim() });
		saveNotes(notes);
		renderNotes();
	}

	if(saveBtn){
		saveBtn.addEventListener('click', () => {
			addNote(input.value);
			input.value = '';
			input.focus();
		});
	}

	if(clearInputBtn){
		clearInputBtn.addEventListener('click', () => { input.value = ''; input.focus(); });
	}

	if(clearAllBtn){
		clearAllBtn.addEventListener('click', () => {
			if(!confirm('Alle Notizen wirklich löschen?')) return;
			saveNotes([]);
			renderNotes();
		});
	}

	// support pressing Ctrl+Enter to save
	if(input){
		input.addEventListener('keydown', (e) => {
			if((e.ctrlKey || e.metaKey) && e.key === 'Enter'){
				e.preventDefault();
				saveBtn.click();
			}
		});
	}

	// initial render
	renderNotes();
});
