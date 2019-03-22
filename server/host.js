

export class Host {

	constructor() {

		this.clients = [];

		this.normalTime = 1000 * 60 * 2;// 2 minutes
		this.subTime = normalTime * 2.5;
		this.forfeitTime = 1000 * 15;// 15 seconds
		this.tempBanTime = 5 * 1000 * 60; // 5 minutes

		this.NUM_PLAYERS = 4;

		this.numberOfLastFewMessages = 5;
		this.lastFewMessages = [];

		this.turnLengths = [];
		this.forfeitLengths = [];
		this.turnStartTimes = [];
		this.forfeitStartTimes = [];
		this.moveLineTimers = [];
		this.forfeitTimers = [];
		this.turnExpirations = [];
		this.forfeitExpirations = [];
		this.controllerList = [];
		this.controlQueues = [];

		for (let i = 0; i < this.NUM_PLAYERS; i++) {
			this.turnLengths.push(this.normalTime);
			this.forfeitLengths.push(this.forfeitTime);
			this.turnStartTimes.push(Date.now());
			this.forfeitStartTimes.push(Date.now());
			this.moveLineTimers.push(null);
			this.forfeitTimers.push(null);
			this.turnExpirations.push(0);
			this.forfeitExpirations.push(0);
			this.controllerList.push(i);
			this.controlQueues.push([]);
		}

	}


}
