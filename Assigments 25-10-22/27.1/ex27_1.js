const gratherThan = (num) => {
	return new Promise((resolve, reject) => {
		
			if (num > 10) {
				resolve();
			}
			else {
				reject();
			}
		});
	};

	gratherThan(11)
	.then(() => {
		console.log('grather than 10');
	})
	.catch(() => {
		console.log('smaller than 10');
	});
