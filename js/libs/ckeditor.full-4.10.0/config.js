/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'ko';
	config.uiColor = '#f5f5f5';
	config.width = '100%';
	config.height = 300;
	config.extraPlugins = 'lineheight';
	config.fontSize_sizes = '10px;11px;12px;13px;14px;15px;16px;17px;18px;20px;22px;24px;26px;28px;30px;34px;38px;42px;46px;50px;';
	config.line_height = '1;1.1;1.2;1.3;1.4;1.5;1.6;1.7;1.8;1.9;2;';
	// config.removePlugins = 'about,indentlist,a11yhelp,blockquote,horizontalrule,htmlwriter,scayt,wsc,dialogadvtab,bidi,templates,div,find,flash,forms,iframe,indentblock,smiley,language,liststyle,newpage,pagebreak,preview,print,save,selectall,showblocks';
	// config.removeButtons = 'Subscript,Superscript,JustifyBlock,CopyFormatting,Anchor,PasteText,PasteFromWord';
	config.toolbar = [
		{ name: 'clipboard', items: ['Undo', 'Redo'] },
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
		{ name: 'colors', items: ['TextColor', 'BGColor'] },
		{ name: 'styles', items: ['FontSize', 'lineheight', 'Format', 'Styles'] },
		{ name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight'] },
		{ name: 'format', items: ['RemoveFormat'] },
		{ name: 'insert', items: [/*'Image', */'Table', 'SpecialChar'] },
		{ name: 'links', items: ['Link', 'Unlink'] },
		//'/',
		{ name: 'document', items: ['Source'] },
	];
	config.coreStyles_bold = { element: 'span', styles: { 'font-weight': 'bold' } };
	config.coreStyles_italic = { element: 'span', styles: { 'font-style': 'italic' } };
	config.coreStyles_underline = { element: 'span', styles: { 'text-decoration': 'underline' } };
	config.coreStyles_strike = { element: 'span', styles: { 'text-decoration': 'line-through' } };
};
