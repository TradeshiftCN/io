
console.log('window', window);
console.log('ts', ts);

describe('ts.app.broadcast', function() {
	it('works', function() {
		window.top.postMessage = spyOn(window.top, 'postMessage').and.callThrough();
		ts.app.broadcast();
		expect(window.top.postMessage.calls.any()).toBeTruthy();
	});
});