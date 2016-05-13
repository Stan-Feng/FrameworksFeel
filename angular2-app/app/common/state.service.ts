import {Injectable} from 'angular2/core';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
	private _testText = 'This is a test text';

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

	getTestText(): string {
		return this._testText;
	}

	setTestText(newText: string): void {
		this._testText = newText;
	}
}
