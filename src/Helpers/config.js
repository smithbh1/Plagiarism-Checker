//CONFIG FILE WITH CONSTANTS
var Config = {
	 'HTTP_SUCCESS' : 500,
	 'UNDEFINED_COPYLEAKS_HEADER_ERROR_CODE' : 9999,
     'REQUEST_TIMEOUT' : 30000, //30 seconds
     'CONTENT_TYPE_JSON' : 'application/json',
     'CONTENT_TYPE_MULTIPART' : 'multipart/form-data',
     'ACCEPTED_LANGUAGE_HEADER' : 'Accept-Language',
     'CONTENT_TYPE_HEADER' : 'Content-Type',
     'AUTHORIZATION_HEADER' : 'Authorization',
     'COPYLEAKS_ERROR_HEADER' : 'copyleaks-error-code',
     'COPYLEAKS_HEADER_PREFIX' : "copyleaks-",
     'CLIENT_CUSTOM_PREFIX' : "copyleaks-client-custom-",
     'EMAIL_CALLBACK' : 'copyleaks-email-callback',
     'HTTP_CALLBACK' : 'copyleaks-http-callback',
     'SANDBOX_MODE_HEADER' : 'copyleaks-sandbox-mode',
     'PARTIAL_SCAN_HEADER' : 'copyleaks-allow-partial-scan',
     'RESPONSE_CODE' : 'reponse_code',
     'MAX_FILE_SIZE_BYTES' : 25 * 1024 * 1024, //25MB
     'SERVICE_ENTRY_POINT' : 'https://api.copyleaks.com/',
     'SERVICE_VERSION' : 'v1',
     'USER_AGENT' : 'CopyleaksNodejsSDK/1.0',
     'DATE_FORMAT' : 'dd/MM/yyyy HH:mm:ss',
     'SERVICE_PAGE' : 'publisher',
     'COPYLEAKS_INTERNAL_ERROR' : 'Sorry we have some internal issues, please try again shortly.',

     'MULTIPART_BOUNDARY' : '--------------------------',
     'MULTIPART_HEADER'   : 'Content-Type: multipart/form-data, boundary:',
     'FORM_FIELD_FILE' 	 : 'file',

     'FILES_EXTENSIONS' : {
							'pdf' : 'application/pdf', 
							'doc' : 'application/msword',
							'docx'	  : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
							'txt'	  : 'text/plain',
							'rtf'	  : 'application/rtf' //application/x-rtf,text/richtext
							},

     'ALLOWED_EXTENSIONS' : [
    								'pdf',
    								'doc',
    								'docx',
    								'txt',
    								'rtf',
    								'png',
    								'jpg',
    								'jpeg',
    								'gif',
    								'bmp'
    								],
     'OCR_EXTENSIONS' : {
    							'png' : 'image/png',
								'jpg' : 'image/jpeg', //image/pjpeg
								'jpeg' : 'image/jpeg',
								'gif' : 'image/gif',
								'bmp' : 'image/bmp' //image/x-windows-bmp
    							},

     'OCR_LANGUGAES' : {
						    	'Afrikaans': 'Afrikaans',
								'Albanian': 'Albanian',
								'Basque': 'Basque',
								'Brazilian': 'Brazilian',
								'Bulgarian': 'Bulgarian',
								'Byelorussian': 'Byelorussian',
								'Catalan': 'Catalan',
								'Chinese_Simplified': 'Chinese Simplified',
								'Chinese_Traditional': 'Chinese Traditional',
								'Croatian': 'Croatian',
								'Czech': 'Czech',
								'Danish': 'Danish',
								'Dutch': 'Dutch',
								'English': 'English',
								'Esperanto': 'Esperanto',
								'Estonian': 'Estonian',
								'Finnish': 'Finnish',
								'French': 'French',
								'Galician': 'Galician',
								'German': 'German',
								'Greek': 'Greek',
								'Hungarian': 'Hungarian',
								'Icelandic': 'Icelandic',
								'Indonesian': 'Indonesian',
								'Italian': 'Italian',
								'Japanese': 'Japanese',
								'Korean': 'Korean',
								'Latin': 'Latin',
								'Latvian': 'Latvian',
								'Lithuanian': 'Lithuanian',
								'Macedonian': 'Macedonian',
								'Malay': 'Malay',
								'Moldavian': 'Moldavian',
								'Norwegian': 'Norwegian',
								'Polish': 'Polish',
								'Portuguese': 'Portuguese',
								'Romanian': 'Romanian',
								'Russian': 'Russian',
								'Serbian': 'Serbian',
								'Slovak': 'Slovak',
								'Slovenian': 'Slovenian',
								'Spanish': 'Spanish',
								'Swedish': 'Swedish',
								'Tagalog': 'Tagalog',
								'Turkish': 'Turkish',
								'Ukrainian': 'Ukrainian'
						    	}
}
// export the class
module.exports = Config;