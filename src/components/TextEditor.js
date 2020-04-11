import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Textarea = ({ value, onHandleChange, label }) => {
	return (
		<div className="form-group">
			{label && <label>{label}</label>}
			<ReactQuill
				modules={Textarea.modules}
				formats={Textarea.formats}
				placeholder="Tour Description"
				value={value}
				onChange={onHandleChange}
			/>
		</div>
	);
};
Textarea.modules = {
	toolbar: [
		[ { header: '1' }, { header: '2' }, { font: [] } ],
		[ { size: [] } ],
		[ 'bold', 'italic', 'underline', 'strike' ],
		[ { list: 'ordered' }, { list: 'bullet' } ],
		[ 'link', 'image', 'video' ],
		[ 'clean' ],
		[ 'code-block' ]
	]
};
Textarea.formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block'
];
export default Textarea;
