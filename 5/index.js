const IMAGE_API_URL = 'https://picsum.photos/200/300'
const TEXT_API_URL = 'https://dummyapi.io/data/v1/user?limit=10'
const imageElement = document.getElementById('image')

//---------------1
function myFetch(url, options) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open(options?.method || 'GET', url)
		xhr.responseType = 'blob'
		if(options?.headers){
			for(const headerName in options.headers){
				if(Object.hasOwnProperty.call(options.headers, headerName)){
					const headerValue = options.headers[headerName]
					xhr.setRequestHeader(headerName, headerValue)
				}
			}
		}
		xhr.setRequestHeader('app-id', '6155fa5472aa4147002c1df3')
		xhr.onload = () => {
			if(xhr.status >= 400){
				reject({ status: xhr.status, statusText: xhr.statusText })
			}else{
				resolve({
					data: {
						status: xhr.status,
						statusText: xhr.statusText,
						responseType: xhr.responseType,
						url: xhr.responseURL,
					},
					text(){
						return xhr.response.text()
					},
					json(){
						return this.text().then(text => JSON.parse(text))
					},
					blob(){
						return xhr.response
					},
				})
			}
		}
		xhr.onerror = () => {
			reject('Request fail!')
		}
		xhr.send(options?.body)
	})
}

//------------------------------2
myFetch(IMAGE_API_URL)
	.then(res => {
		console.log(res)
		return res.blob()
	})
	.then(file => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			insertImage(reader.result)
		}
		reader.onerror = () => {
			console.warn('Failed to read file!\n\n' + reader.error)
		}
	})
	.catch(error => {
		console.warn('Failed to get file from server!', error)
	})
function insertImage(src){
	imageElement.src = src
}